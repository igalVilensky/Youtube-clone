import React from "react";
import "./subscriptions.scss";
import { Avatar } from "@material-ui/core";
function Subscriptions({ Icon, title }) {
  return (
    <div className="subscriptions">
      <Icon className="subscriptions__icon" />
      <h2 className="subscriptions__title">{title}</h2>
    </div>
  );
}

export default Subscriptions;
