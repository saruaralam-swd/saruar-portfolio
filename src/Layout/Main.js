import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import { Scrollbars } from "rc-scrollbars";

const Main = () => {
  return (
    <div>
      <Scrollbars style={{ width: "100%", height: "100vh" }}>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </Scrollbars>
    </div>
  );
};

export default Main;
