import React from "react";
import "./videoCard.scss";
import Avatar from "@material-ui/core/Avatar";
export default function VideoCard({
  image,
  title,
  channel,
  views,
  timestamp,
  channelImage,
}) {
  return (
    <div className="videoCard">
      <img className="videoCard__thumbnail" src={image} alt=""></img>
      <div className="videoCard__info">
        <Avatar
          className="videoCard__avatar"
          alt={channel}
          src={channelImage}
        />
        <div className="videoCard__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}
