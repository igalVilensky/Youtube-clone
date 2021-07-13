import React from "react";
import "./searchPage.scss";
import TuneOutLinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "../channelRow/ChannelRow";
import VideoRow from "../videoRow/VideoRow";
export default function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutLinedIcon />
        <h2>FILTERS</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/yti/APfAmoH0fn0MXtqS9WtxWp-PXRdK-5-v131rBthlXr88IQ=s88-c-k-c0x00ffffff-no-rj-mo"
        channel="Igal Vilensky"
        verified
        subs="154K"
        noOfVideos={382}
        description="🍀 Music for relaxation, meditation, study, reading, massage, spa or sleep. This music is perfect for fighting anxiety..."
      />

      <hr />
      <VideoRow
        views="2.2M"
        subs="240K"
        description="🍀 Music for relaxation, meditation, study, reading, massage, spa or sleep. This music is perfect for fighting anxiety..."
        timestamp="5 days ago"
        channel="Learning like a Pro"
        title="Welcome to the channel!"
        image="https://i.ytimg.com/vi/J3sZI-H7OEM/hq720_live.jpg?sqp=CPTFtYcG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA7JNEe9WuUITa8bV-5Jbz6ttZbbw"
      />
      <VideoRow
        views="2.2M"
        subs="240K"
        description="🍀 Music for relaxation, meditation, study, reading, massage, spa or sleep. This music is perfect for fighting anxiety..."
        timestamp="5 days ago"
        channel="Learning like a Pro"
        title="Welcome to the channel!"
        image="https://i.ytimg.com/vi/J3sZI-H7OEM/hq720_live.jpg?sqp=CPTFtYcG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA7JNEe9WuUITa8bV-5Jbz6ttZbbw"
      />
      <VideoRow
        views="2.2M"
        subs="240K"
        description="🍀 Music for relaxation, meditation, study, reading, massage, spa or sleep. This music is perfect for fighting anxiety..."
        timestamp="5 days ago"
        channel="Learning like a Pro"
        title="Welcome to the channel!"
        image="https://i.ytimg.com/vi/J3sZI-H7OEM/hq720_live.jpg?sqp=CPTFtYcG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA7JNEe9WuUITa8bV-5Jbz6ttZbbw"
      />
      <VideoRow
        views="2.2M"
        subs="240K"
        description="🍀 Music for relaxation, meditation, study, reading, massage, spa or sleep. This music is perfect for fighting anxiety..."
        timestamp="5 days ago"
        channel="Learning like a Pro"
        title="Welcome to the channel!"
        image="https://i.ytimg.com/vi/J3sZI-H7OEM/hq720_live.jpg?sqp=CPTFtYcG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA7JNEe9WuUITa8bV-5Jbz6ttZbbw"
      />
      <VideoRow
        views="2.2M"
        subs="240K"
        description="🍀 Music for relaxation, meditation, study, reading, massage, spa or sleep. This music is perfect for fighting anxiety..."
        timestamp="5 days ago"
        channel="Learning like a Pro"
        title="Welcome to the channel!"
        image="https://i.ytimg.com/vi/J3sZI-H7OEM/hq720_live.jpg?sqp=CPTFtYcG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA7JNEe9WuUITa8bV-5Jbz6ttZbbw"
      />
    </div>
  );
}
