import React from "react";
import { Link } from "react-router-dom";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Banner = () => {
  const [text] = useTypewriter({
    /* Hook Config */
    words: ["JavaScript", "React", "Node", "Express", "MongoDB"],
    loop: {},
    typeSpeed: 120,
  });
  return (
    <>
      <div className="min-h-[cacl(100vh-50px)] bg-[url(https://i.postimg.cc/ZRQ9h0qY/banner-background.jpg)] bg-no-repeat bg-center bg-cover">
        <div className="container mx-auto px-6 ">
          <div className="flex flex-col items-center lg:flex-row lg:space-x-6 ">
            <div className=" w-full lg:w-6/12 lg:h-[700px] flex items-center  justify-center text-center lg:text-left pb-14 lg:pb-0  ">
              <div className="max-w-6xl">
                <h2 className="text-5xl mb-9 text-[#f95738] font-semibold">
                  Hi, I'm
                </h2>
                <h3 className="text-6xl font-bold text-purple-900 mb-4">
                  Alif Hasan Shah
                </h3>
                <p className="text-3xl mb-9 text-[#15295F] font-semibold">
                  Mern Stack Developer
                </p>
                <div className="max-w-4xl">
                  <p className="text-lg mb-14 text-[#15295F] font-semibold">
                    Bridging the Gap Between Ideas and Implementation
                  </p>
                </div>
                <Link
                  target="_blank"
                  to={
                    "https://drive.google.com/file/d/10nUEUBbAF8VuFxHQibA8MyIiyE01kq1-/view?usp=sharing"
                  }
                >
                  <button className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2">
                    My Resume
                  </button>
                </Link>
              </div>
            </div>
            <div className=" w-full lg:w-6/12  lg:h-[700px] flex items-center justify-center text-center order-first lg:order-last ">
              <div>
                <div
                  className="partners-intro--thumb "
                  style={{
                    backgroundImage:
                      "url('https://i.postimg.cc/tCtFHMqf/partners-circle.png')",
                  }}
                >
                  <div className="partners-intro--partners">
                    <div className="partners-intro--partners-item -pos-1">
                      <img
                        className="lazy loaded"
                        data-src="https://i.postimg.cc/TPDfMrR7/nextjs.png"
                        alt=""
                        src="https://i.postimg.cc/TPDfMrR7/nextjs.png"
                        data-was-processed="true"
                      />
                    </div>
                    <div className="partners-intro--partners-item -pos-2">
                      <img
                        className="lazy loaded"
                        data-src="https://i.postimg.cc/G2n4cqs4/postman.png"
                        alt=""
                        src="https://i.postimg.cc/G2n4cqs4/postman.png"
                        data-was-processed="true"
                      />
                    </div>
                    <div className="partners-intro--partners-item -pos-3">
                      <img
                        className="lazy loaded"
                        data-src="https://i.postimg.cc/qRwqt89J/firebase.png"
                        alt=""
                        src="https://i.postimg.cc/qRwqt89J/firebase.png"
                        data-was-processed="true"
                      />
                    </div>
                    <div className="partners-intro--partners-item -pos-4">
                      <img
                        className="lazy loaded"
                        data-src="https://i.postimg.cc/Hkjc3Jgk/github.png"
                        alt=""
                        src="https://i.postimg.cc/Hkjc3Jgk/github.png"
                        data-was-processed="true"
                      />
                    </div>
                    <div className="partners-intro--partners-item -pos-5">
                      <img
                        className="lazy loaded"
                        data-src="https://i.postimg.cc/YSY2PdFS/node.png"
                        alt=""
                        src="https://i.postimg.cc/YSY2PdFS/node.png"
                        data-was-processed="true"
                      />
                    </div>
                    <div className="partners-intro--partners-item -pos-6">
                      <img
                        className="lazy loaded"
                        data-src="https://i.postimg.cc/Bvf8LZwv/mongodb-new.png"
                        alt=""
                        src="https://i.postimg.cc/Bvf8LZwv/mongodb-new.png"
                        data-was-processed="true"
                      />
                    </div>
                    <div className="partners-intro--partners-item -pos-7">
                      <img
                        className="lazy loaded"
                        data-src="https://i.postimg.cc/W1QbSBhK/react.png"
                        alt=""
                        src="https://i.postimg.cc/W1QbSBhK/react.png"
                        data-was-processed="true"
                      />
                    </div>
                    <div className="partners-intro--partners-item -pos-8">
                      <img
                        className="lazy loaded"
                        data-src="https://i.postimg.cc/5tx89Qmb/java-SCript.png"
                        alt=""
                        src="https://i.postimg.cc/5tx89Qmb/java-SCript.png"
                        data-was-processed="true"
                      />
                    </div>
                  </div>
                  <div className="partners-intro--logo">
                    <img
                      className="lazy loaded"
                      data-src="https://i.postimg.cc/yYFd9ymm/source-code.png"
                      alt=""
                      src="https://i.postimg.cc/yYFd9ymm/source-code.png"
                      data-was-processed="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
