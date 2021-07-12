import React from "react";
import "./searchPage.scss";
import TuneOutLinedIcon from "@material-ui/icons/TuneOutlined";
export default function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutLinedIcon />
        <h2>FILTERS</h2>
      </div>
      <hr />
    </div>
  );
}
