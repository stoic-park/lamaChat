import React, { useEffect, useState, useReducer } from "react";
import queryString from "query-string";
import io from "socket.io-client";

// 하위 컴포넌트
import Messages from "../Messages/Messages";
import RoomInfo from "../RoomInfo/RoomInfo";
import Input from "../Input/Input";

// Material-ui
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: 0,
    height: "100vh",
    backgroundImage: "url(https://source.unsplash.com/1600x900/?peru,lama)",
  },
  appBar: {
    // position: "static",
    padding: theme.spacing(2),
  },
  paper: {
    height: "50vh",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  button: {
    // position: "flex-end",
  },
}));

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const [users, setUsers] = useState("");

  const ENDPOINT = "localhost:5000";

  // material ui style
  const classes = useStyles();

  useEffect(() => {
    // query-string middleware의 사용
    // const data = queryString.parse(location.search);
    // console.log(location.search); // ?name=lama&room=peru
    // console.log(data); // 객체 : {name: "lama", room: "peru"}
    // 다시 정리
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT); // 소켓 연결

    setName(name);
    setRoom(room);

    console.log(name, room); // lama peru

    // console.log(socket);
    socket.emit("join", { name, room }, (error) => {
      // console.log("error");
      // 에러 처리
      if (error) {
        alert(error);
      }
    });

    // return () => {
    //   socket.emit("disconnect");

    //   socket.off();
    // };
  }, [ENDPOINT, location.search]); // 한번만 부른다 // 불필요한 사이드 이펙트를 줄인다

  useEffect(() => {
    // 서버에서 message 이벤트가 올 경우에 대해서 `on`
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, [messages]);

  // 메세지 보내기 함수
  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, setMessage(""));
    }
  };

  console.log(message, messages);
  console.log(users, "users");

  // return <h1>Chat</h1>;
  // 1.roominfo
  // 2.messages
  // 3.input
  return (
    <Grid
      container
      // alignItems="flex-start"
      justify="center"
      alignContent="center"
      className={classes.root}
    >
      <Grid
        // alignItems="flex-start"
        item
        component={AppBar}
        className={classes.appBar}
        color="default"
      >
        {/* <AppBar position="absolute" color="default" className={classes.appBar}> */}
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            LamaChat
          </Typography>
          <Button color="inherit" href="/" className={classes.button}>
            close
          </Button>
        </Toolbar>
        {/* </AppBar> */}
      </Grid>

      <Grid
        item
        xs={10}
        sm={10}
        md={8}
        lg={8}
        xl={8}
        component={Paper}
        className={classes.paper}
      >
        <div className="container">
          {/* <div className="roominfo">
          <div>{room}</div>
          <a href="/">close</a>
        </div> */}
          <RoomInfo room={room} />
          <Messages messages={messages} name={name} />
          <Input
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
          {/* <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
        />
        <button onClick={(e) => sendMessage(e)}>send</button> */}
        </div>
      </Grid>
    </Grid>
  );
};

export default Chat;
