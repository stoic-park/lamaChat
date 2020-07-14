import React from "react";
import { Link } from "react-router-dom";
import "./RoomInfo.css";

import Button from "@material-ui/core/Button";

function RoomInfo({ room }) {
  return (
    <div className="roomInfo">
      <div className="leftInfo">
        <h3 className="leftInfo-text">{room}</h3>
        {/* {room} */}
      </div>
      <div className="rightInfo">
        <Link className="rightInfo-close" to={`/lamaChat`}>
          <Button>close</Button>
        </Link>

        {/* <a href="/">close</a> */}
      </div>
    </div>
  );
}

export default RoomInfo;
