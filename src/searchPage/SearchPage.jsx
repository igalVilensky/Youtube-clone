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
        description="🍀 Music for relaxation, meditation, study, reading, massage, spa or sleep. This music is perfect for fighting anxiety, stress or insomnia as it helps you relax and get rid of bad vibrations."
      />

      <hr />
      <VideoRow />
    </div>
  );
}
