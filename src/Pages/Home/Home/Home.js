import React from "react";
import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import Projects from "../../Projects/Projects";

const Home = () => {
  useTitle("Home");

  return (
    <div>
      <Banner></Banner>
      <Projects></Projects>
    </div>
  );
};

export default Home;
