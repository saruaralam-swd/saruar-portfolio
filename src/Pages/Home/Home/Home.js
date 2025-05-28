import React from "react";
import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import Projects from "../../Projects/Projects";
import AboutMe from "../../AboutMe/AboutMe";
import Contact from "../../Contact/Contact";
import Banner2 from "../Banner/Banner2";
import Blogs from "../../Blogs/Blogs";

const Home = () => {
  useTitle("Home");

  return (
    <div>
      {/* <Banner /> */}
      <div className="hidden md:flex">
        <Banner2 />
      </div>
      <AboutMe />
      <Projects />
      {/* <Blogs /> */}
      <Contact />
    </div>
  );
};

export default Home;
