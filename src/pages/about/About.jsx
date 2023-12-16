import React from "react";
import Profile from "./Profile/Profile";
import { Helmet } from "react-helmet-async";
import SkillSet from "./SkillSet/SkillSet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>Alif Hasan Shah | About</title>
      </Helmet>
      <div>
        <div className="container mx-auto px-6">
          <div>
            <Profile />
          </div>
          <div>
            <SkillSet />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
