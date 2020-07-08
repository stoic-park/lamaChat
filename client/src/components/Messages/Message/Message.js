import React from "react";

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();
  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }
  return isSentByCurrentUser ? (
    <div>
      <p>{trimmedName}</p>
      <p>{text}</p>
    </div>
  ) : (
    <div>
      <p>{text}</p>
      <p>{user}</p>
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
