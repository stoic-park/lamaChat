import React from "react";

const Input = ({ message, setMessage, sendMessage }) => (
  //   return <div className="Input"></div>;
  <form className="inputForm">
    <input
      className="input"
      type="text"
      placeholder="메세지를 입력하세요"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
    />
    <button onClick={(e) => sendMessage(e)}>send</button>
  </form>
);
export default Input;
