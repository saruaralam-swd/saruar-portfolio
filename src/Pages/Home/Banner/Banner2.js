import bannerBg from "../../../assets/banner/bg.jpg";
import "../Banner/Banner2.css";
import Banner2Header from "./Banner2Header";
import BannerText from "./BannerText";

const Banner2 = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bannerBg})` }}
      className="banner-container relative text-gray-400 "
    >
      <div className="banner-img"></div>
      <Banner2Header />
      <BannerText />
    </div>
  );
};

export default Banner2;
