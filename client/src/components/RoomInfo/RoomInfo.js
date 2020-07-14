import React from "react";
import { Link } from "react-router-dom";
import "./RoomInfo.css";

import Button from "@material-ui/core/Button";

function RoomInfo({ room }) {
  return (
    <div className="roomInfo">
      <div className="leftInfo">
        <h3 className="leftInfo-text">{`Room : ${room}`}</h3>
      </div>
      <div className="rightInfo">
        <Button
          className="infoButton"
          // variant="contained"
          variant="raised"
          href="/lamaChat"
          color="inherit"
        >
          close
        </Button>
      </div>
    </div>
  );
}

export default RoomInfo;
