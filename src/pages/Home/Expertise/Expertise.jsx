import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MarqueImage from "../../../components/MarqueImage/MarqueImage";

const Expertise = () => {
  return (
    <>
      <div className="container mx-auto px-6">
        <div className="pt-24 pb-16">
          <SectionTitle title="Expertise" />
        </div>
        <div
          className="py-14 rounded-lg"
          style={{
            backgroundImage:
              "url(https://i.postimg.cc/7LfgJg6j/main-background-3.jpg)",
          }}
        >
          <MarqueImage />
        </div>
      </div>
    </>
  );
};

export default Expertise;
