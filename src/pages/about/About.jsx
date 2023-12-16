import React from "react";

const About = () => {
  return (
    <>
      <div>
        <div className="container mx-auto px-6">
          <div className="flex flex-col space-y-16 lg:space-y-0 lg:flex-row lg:items-center my-14">
            <div className="w-full lg:w-6/12 order-last">
              <div className="card  shadow-xl border-l-2 border-indigo-600">
                <div className="card-body">
                  <h2 className="card-title mb-8">Alif Hasan Shah</h2>
                  <p className="text-md leading-8">
                    I’m a dedicated programmer and love to work with people in
                    order to build modern applications that matter. My strength
                    lies in my strong knowledge of JavaScript. Though I work
                    primarily with MERN technology. I bring a dynamic skill set
                    to create modern, user-friendly projects. Let’s code the
                    future together.
                  </p>
                  <p className="font-semibold mt-9">
                    Interests:{" "}
                    <span className=" font-normal italic">
                      Blockchain, Web 3.0, NFTs, Cryptography, React Native, Web
                      2.0
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-6/12">
              <div>
                <img
                  className="w-9/12 h-[500px] object-cover rounded-lg mx-auto mb-9 lg:mb-0"
                  src="https://i.postimg.cc/8Cs39VQ9/a4alif.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
