import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import SkillCard from "./SkillCard/SkillCard";

const SkillSet = () => {
    const [skills, setSkills] = useState([]);

    useEffect( () => {
        fetch("./skills.json")
        .then( res => res.json())
        .then( data => setSkills(data))
    }, [])

        console.log(skills);
    
  return (
    <>
      <div>
        <div className="container mx-auto px-6">
          <div className="pt-24 pb-16">
            <SectionTitle title="My SkillSet" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {
                skills?.map( (skill) => (
                    <SkillCard key={skill.id}  skill={skill} />
                ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillSet;
