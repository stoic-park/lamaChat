import React from "react";
import "./Message.css";

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();
  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }
  return isSentByCurrentUser ? (
    <div className="messageContainer-end">
      <p className="sentMessage-1">{trimmedName}</p>
      <div className="messageBox-background-blue">
        <p className="messageText-white">{text}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer-start">
      <div className="messageBox-background-light">
        <p className="messageText-black">{text}</p>
      </div>
      <p className="sentMessage-2">{user}</p>
    </div>
  );
  // return (
  //   <div>
  //     <p>{name}</p>
  //     <p>{text}</p>
  //   </div>
  // );
};

export default Message;
