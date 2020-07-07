import React, { useEffect, useState, useReducer } from "react";
import queryString from "query-string";
import io from "socket.io-client";

// 하위 컴포넌트
import Messages from "../Messages/Messages";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const ENDPOINT = "localhost:5000";

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
    socket.emit("join", { name, room }, () => {
      // console.log("error");
      // alert(error);
    });

    return () => {
      socket.emit("disconnect");

      socket.off();
    };
  }, [ENDPOINT, location.search]); // 한번만 부른다 // 불필요한 사이드 이펙트를 줄인다

  useEffect(() => {
    // 서버에서 message 이벤트가 올 경우에 대해서 `on`
    socket.on("message", (message) => {
      setMessages([...messages, message]);
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

  // return <h1>Chat</h1>;
  return (
    <div className="outerContainer">
      <div className=" container">
        <div>{room}</div>
        <a href="/">close</a>
        <div></div>
        <Messages messages={messages} name={name} />

        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
        />
        <button onClick={(e) => sendMessage(e)}>send</button>
      </div>
    </div>
  );
};

export default Chat;
