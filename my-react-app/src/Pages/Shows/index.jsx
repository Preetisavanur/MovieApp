import React from "react";
import Home from "../../Home/index";   // reuse Home component
import { request } from "../../Request";

const Show = () => {
  return (
    <div className="Container">
      <Home url={request.tvShow} title="Popular TV Shows" />
      <Home url={request.trendingTv} title="Trending TV Shows" />
    </div>
  );
};

export default Show;
