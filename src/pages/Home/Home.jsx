import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Banner from "./Banner/Banner";
import Expertise from "./Expertise/Expertise";
import ExpertiseBackend from "./ExpertiseBackend/ExpertiseBackend";
import Projects from "./Projects/Projects";
import Certificates from "./Certificates/Certificates";
import DevelopmentStrategy from "./DevelopmentStrategy/DevelopmentStrategy";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Alif Hasan Shah | Home</title>
      </Helmet>
      <div>
        <Banner />
      </div>
      <div>
        <Expertise />
      </div>
      <div className="mt-9 ">
        <ExpertiseBackend />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <DevelopmentStrategy />
      </div>
      <div>
        <Certificates />
      </div>
    </>
  );
};

export default Home;
