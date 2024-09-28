import React from "react";
import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import Projects from "../../Projects/Projects";
import AboutMe from "../../AboutMe/AboutMe";

const Home = () => {
  useTitle("Home");

  return (
    <div>
      <Banner />
      <AboutMe />
      <Projects />
    </div>
  );
};

export default Home;
