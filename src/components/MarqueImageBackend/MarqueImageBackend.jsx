import React from "react";
import Marquee from "react-fast-marquee";
const MarqueImageBackend = () => {
  return (
    <>
      <div>
        <div>
          <Marquee pauseOnHover={true} speed={55} direction="right">
            <div>
              <img
                className="w-36  mr-28"
                src="https://i.postimg.cc/9fnX6grS/nodejs3d.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="  h-32 mr-28"
                src="https://i.postimg.cc/s2QzCMF2/expressjs.webp"
                alt=""
              />
            </div>

            <div>
              <img
                className="w-36  mr-28"
                src="https://i.postimg.cc/pVnyHvQB/mongodb3d.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="w-36 mr-28"
                src="https://i.postimg.cc/MTBwh6kM/firebase.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="w-36 mr-28"
                src="https://i.postimg.cc/wjFjVjH9/git3d.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="w-38 h-40 mr-28"
                src="https://i.postimg.cc/sxS29PfL/github3d.png"
                alt=""
              />
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default MarqueImageBackend;
