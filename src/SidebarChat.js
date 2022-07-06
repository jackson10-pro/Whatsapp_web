import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./SidebarChat.css";

function SidebarChat() {
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  return (
    <div className="sideBar__chats">
      <Avatar src={"https://avatars.dicebear.com/api/human/${seed}.svg"} />
      <div className="SidebarChat__info">
        <h1>Chat Name</h1>
        <p>Last Message...</p>
      </div>
    </div>
  );
  //   (
  //     <div onClick={createChat} className="sidebarChat">
  //         <h2>Add New Chat</h2>
  //     </div>
  //   );
}

export default SidebarChat;
