import React from "react";

function RoomInfo({ room }) {
  return (
    <div className="roomInfo">
      <div className="leftInfo">{room}</div>
      <div className="rightInfo">
        <a href="/">close</a>
      </div>
    </div>
  );
}

export default RoomInfo;
