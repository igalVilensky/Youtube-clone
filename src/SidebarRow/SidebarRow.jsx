import React from "react";

import "./sidebarRow.scss";
export default function SidebarRow({ selected, Icon, title }) {
  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
      <Icon className="sidebarRow__icon" />
      <h2 className="sidebarRow__title">{title}</h2>
      {/*  <h3>Hi</h3> */}
    </div>
  );
}