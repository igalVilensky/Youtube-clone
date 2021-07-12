import React from "react";

import "./sidebarRow.scss";
export default function SidebarRow({ Icon, title }) {
  return (
    <div className="sidebarRow">
      <Icon className="sidebarRow__icon" />
      <h2 className="sidebarRow__title">{title}</h2>
      {/*  <h3>Hi</h3> */}
    </div>
  );
}
