import React from "react";
import "./Message.css";

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();
  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }
  return isSentByCurrentUser ? (
    <div className="messageContainer end">
      <div className="messageBox backgroundLight">
        <p className="messageText black">{text}</p>
      </div>
      <p className="sentMessage pl-10">{trimmedName}</p>
    </div>
  ) : (
    <div className="messageContainer start">
      <p className="sentMessage pr-10">{user}</p>
      <div className="messageBox backgroundLight">
        <p className="messageText black">{text}</p>
      </div>
    </div>
  );
};

export default Message;
