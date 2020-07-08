import React, { useState } from "react";
// import { Link } from "react-router-dom";

// Material-UI 적용하기
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const JoinRoom = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const classes = useStyles();

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        {/* <h1 className="head">JoinRoom</h1> */}
        <Typography component="h1" variant="h5">
          Join LamaChat
        </Typography>
        {/* <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div> */}
        {/* <form className={classes.form} noValidate> */}
        <form className="joinInput" noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="room"
            label="room"
            type="room"
            id="room"
            autoComplete="current-password"
            onChange={(e) => setRoom(e.target.value)}
          />
        </form>
        {/* <div>
          <input
            placeholder="Room"
            className="joinInput mt-20" // margin top 20
            type="text"
            onChange={(e) => setRoom(e.target.value)}
          />
        </div> */}
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          // to={`/chat?name=${name}&room=${room}`}
          href={`/chat?name=${name}&room=${room}`}
        >
          {/* <button className="button mt-20" type="submit">
            Sign In
          </button> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            // className={classes.submit}
            className="button"
          >
            Sign In
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default JoinRoom;
