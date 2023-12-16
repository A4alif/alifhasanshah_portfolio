import React, { useEffect, useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import fruitsOne from "../../../assets/fruitsOne.jpg";
import fruitsTwo from "../../../assets/fruitsTwo.jpg";
import fruitsThree from "../../../assets/fruitsThree.jpg";
import fruitsFour from "../../../assets/fruitsFour.jpg";
import SingleProjectCard from "./SingleProjectCard";

const ProjectCarousel = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("./projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-9" >
          {projects.map((project) => (
            <SingleProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectCarousel;
