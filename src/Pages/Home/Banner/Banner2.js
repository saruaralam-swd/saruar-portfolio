import React from "react";
import bannerImg from "../../../assets/banner/image.png";
import "../Banner/Banner2.css";
import Banner2Header from "./Banner2Header";
import BannerText from "./BannerText";

const Banner2 = () => {
  return (
    <div
      className="banner-container relative text-gray-400"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="banner-img"></div>
      <Banner2Header />
      <BannerText />
    </div>
  );
};

export default Banner2;
