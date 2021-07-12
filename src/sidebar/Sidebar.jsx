import React from "react";
import "./sidebar.scss";
import SidebarRow from "../SidebarRow/SidebarRow";
/* import WhatshotIcon from "@material-ui/icons/Whatshot"; */
import ExploreIcon from "@material-ui/icons/Explore";
import HomeIcon from "@material-ui/icons/Home";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={ExploreIcon} title="Explore" />
      <SidebarRow Icon={SubscriptionsIcon} title="Subscriptions" />
    </div>
  );
}
