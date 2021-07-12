import React, { useState } from "react";
import "./header.scss";
import MenuIcon from "@material-ui/icons/MenuSharp";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import MicIcon from "@material-ui/icons/Mic";
import { Link } from "react-router-dom";
function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon className="menu__icon" />
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png"
          ></img>
        </Link>
      </div>
      <div className="header__input">
        <div className="header__input__searchIcon">
          <input
            onChange={(e) => setInputSearch(e.target.value)}
            value={inputSearch}
            placeholder="Search"
            type="text"
          ></input>
          <Link to={`/search/${inputSearch}`}>
            <SearchIcon className="header__inputButton" />
          </Link>
        </div>
        <MicIcon className="header__input__micIcon" />
      </div>

      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          className="header__icon"
          alt="Me"
          src="https://yt3.ggpht.com/yti/APfAmoH0fn0MXtqS9WtxWp-PXRdK-5-v131rBthlXr88IQ=s88-c-k-c0x00ffffff-no-rj-mo"
        />
      </div>
    </div>
  );
}

export default Header;
