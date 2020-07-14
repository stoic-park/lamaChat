import React from "react";
import "./Input.css";

const Input = ({ message, setMessage, sendMessage }) => (
  //   return <div className="Input"></div>;
  // <form className="inputForm">
  <div className="input-container">
    <input
      className="input"
      type="text"
      placeholder="메세지를 입력하세요"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
    />
    <button onClick={(e) => sendMessage(e)}>send</button>
  </div>
  // </form>
);
export default Input;
