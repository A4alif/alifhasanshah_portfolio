import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const DevelopmentStrategy = () => {
  return (
    <>
      <div>
        <div className="container mx-auto px-6">
          <div className="pt-24 pb-16 ">
            <SectionTitle title={"Development Strategy"} />
          </div>
          <div className="flex flex-col space-y-16 lg:space-y-0 lg:flex-row lg:items-center">
            <div className="w-full lg:w-6/12">
              <div className="card   shadow-xl border-r-2 border-indigo-600">
                <div className="card-body">
                  <h2 className="card-title mb-8">
                    Software Development Life Cycle
                  </h2>
                  <p className="text-md leading-8">
                    The Software Development Life Cycle (SDLC) is a systematic
                    process that development teams use to produce high-quality
                    software, that meets customer expectations, in a
                    cost-effective way. It provides a methodical, step-by-step
                    approach to developing successful software, including
                    gathering the initial requirements for a new product,
                    through to maintaining a mature product on the market.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-6/12">
              <div>
                <img src="https://i.postimg.cc/3wg1mHSG/sdlc-1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DevelopmentStrategy;
