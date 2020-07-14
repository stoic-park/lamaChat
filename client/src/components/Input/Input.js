import React from "react";
import "./Input.css";

import Button from "@material-ui/core/Button";

const Input = ({ message, setMessage, sendMessage }) => (
  //   return <div className="Input"></div>;
  // <form className="inputForm">
  <div className="inputContainer">
    <input
      className="input"
      type="text"
      placeholder="메세지를 입력하세요"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
    />
    <Button
      variant="contained"
      color="primary"
      className="inputButton"
      onClick={(e) => sendMessage(e)}
    >
      send
    </Button>
  </div>
  // </form>
);
export default Input;
