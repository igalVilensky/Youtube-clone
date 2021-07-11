import React from "react";
import MenuIcon from "@material-ui/icons/MenuSharp";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
function Header() {
  return (
    <div className="header">
      <h1>I am a header</h1>
      <MenuIcon />
      <img
        className="header__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png"
      ></img>
      <input type="text"></input>
      <SearchIcon />
      <VideoCallIcon />
      <AppsIcon />
      <NotificationsIcon />
      <Avatar
        alt="Me"
        src="https://lh3.googleusercontent.com/ogw/ADea4I7XmwLlVfUlKeNrwTlkzHLxTYTIkC-SRO6lsv-16w=s83-c-mo"
      />
    </div>
  );
}

export default Header;
