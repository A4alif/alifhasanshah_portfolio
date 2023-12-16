import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Banner from "./Banner/Banner";
import Expertise from "./Expertise/Expertise";
import ExpertiseBackend from "./ExpertiseBackend/ExpertiseBackend";

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
      <div className="mt-9 mb-14" >
        <ExpertiseBackend />
      </div>
    </>
  );
};

export default Home;
