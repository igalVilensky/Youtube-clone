import React from "react";
import "./sidebar.scss";
import SidebarRow from "../SidebarRow/SidebarRow";
import Subscriptions from "../subscriptions/Subscriptions";
import ExploreIcon from "@material-ui/icons/Explore";
import HomeIcon from "@material-ui/icons/Home";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WhatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import { Avatar } from "@material-ui/core";

export default function Sidebar() {
  /*   const userPic = {

  } */
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={ExploreIcon} title="Explore" />
      <SidebarRow Icon={SubscriptionsIcon} title="Subscriptions" />
      <hr />
      <SidebarRow Icon={VideoLibraryIcon} title="Library" />
      <SidebarRow Icon={HistoryIcon} title="History" />
      <SidebarRow Icon={OndemandVideoIcon} title="Your videos" />
      <SidebarRow Icon={WhatchLaterIcon} title="Watch later" />
      <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked videos" />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more" />
      <hr />
      <h2 className="sidebar__subscriptions__title">SUBSCRIPTIONS</h2>
      <Subscriptions Icon={Avatar} title="Joma Tech" />

      <Subscriptions Icon={Avatar} title="Joma Tech" />
      <Subscriptions Icon={Avatar} title="Joma Tech" />
      <Subscriptions Icon={Avatar} title="Joma Tech" />
      <Subscriptions Icon={Avatar} title="Joma Tech" />
      <Subscriptions Icon={Avatar} title="Joma dsada" />
      <Subscriptions Icon={Avatar} title="Joma Tech" />
      <Subscriptions Icon={Avatar} title="Joma Tech" />
      <Subscriptions Icon={ExpandMoreOutlinedIcon} title="Show 685 more" />
    </div>
  );
}
