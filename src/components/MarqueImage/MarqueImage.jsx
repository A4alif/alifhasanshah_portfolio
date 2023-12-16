import React from "react";
import Marquee from "react-fast-marquee";

const MarqueImage = () => {
  return (
    <div>
      <div>
        <Marquee pauseOnHover={true} speed={55}>
          <div>
            <img
              className="w-40  h-40 mr-28"
              src="https://i.postimg.cc/66R6P0wj/html3d-2.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-36 h-40 mr-28"
              src="https://i.postimg.cc/Jhvm6yFC/css3d-2.png"
              alt=""
            />
          </div>

          <div>
            <img
              className="w-36 h-40 mr-28"
              src="https://i.postimg.cc/6p69yxZg/tailwind3d.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-36 mr-28"
              src="https://i.postimg.cc/DyTf3Xw2/java-Script3d-2.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-36 mr-28"
              src="https://i.postimg.cc/43dNFRNV/react3d.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-36 mr-28"
              src="https://i.postimg.cc/BnhJF7c6/nextjs.png"
              alt=""
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueImage;
