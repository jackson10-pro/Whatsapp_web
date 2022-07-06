import { Avatar, IconButton } from "@material-ui/core";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { MdDonutLarge } from "react-icons/md";
import { MoreVert, SearchOutlined } from "@material-ui/icons";
import React from "react";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__headerRight">
          <IconButton>
            <MdDonutLarge className="status" />
          </IconButton>
          <IconButton>
            <BsFillChatLeftTextFill className="chat" />
          </IconButton>
          <IconButton>
            <MoreVert className="menu" />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <input type="text" placeholder="Search or start a new chat" />
        </div>
      </div>
      <div className="chats">
      <SidebarChat addNewChat/>
      <SidebarChat/>
      <SidebarChat/>
      <SidebarChat/>
      </div>
    
    </div>
  );
}

export default Sidebar;
