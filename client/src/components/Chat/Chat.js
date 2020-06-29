import React, { useEffect, useState } from "react";
import queryString from "query-string";
import io from "socket.io-client";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    // query-string middleware의 사용
    // const data = queryString.parse(location.search);
    // console.log(location.search); // ?name=lama&room=peru
    // console.log(data); // 객체 : {name: "lama", room: "peru"}
    // 다시 정리
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT); // 소켓 연결

    setName(name);
    setRoom(room);
    // console.log(name, room); // lama peru

    // console.log(socket);
    socket.emit("join", { name, room }, () => {
      // console.log("error");
      // alert(error);
    });

    return () => {
      socket.emit("disconnect");

      socket.off();
    };
  }, [ENDPOINT, location.search]); // 한번만 부른다 // 불필요한 사이드 이펙트를 줄인다

  return <h1>Chat</h1>;
};

export default Chat;
