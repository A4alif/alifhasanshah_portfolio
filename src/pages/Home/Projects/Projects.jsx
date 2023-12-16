import React, { useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ProjectCarousel from "./ProjectCarousel";

const Projects = () => {
  return (
    <>
      <div className="container mx-auto px-6">
        <div className="pt-24 pb-16">
          <SectionTitle title="Projects" />
        </div>
        {/* project carousel*/}
        <div>
            <ProjectCarousel />
        </div>
      </div>
    </>
  );
};

export default Projects;
