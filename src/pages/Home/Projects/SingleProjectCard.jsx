import React from "react";
import { Link } from "react-router-dom";

const SingleProjectCard = ({ project }) => {
  const { id, title, thumb, technology, liveLink, githubLink } = project;

  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <div className="relative">
          <figure className="py-6 ">
            <img
              className=" h-[350px] w-[450px] object-cover "
              src={thumb}
              alt="pic"
            />
          </figure>
        </div>
        <div className="px-8 pb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold ">{title}</h2>
          </div>
          <div>
            <p className="text-sm">
              Technology Used:{" "}
              <span className="capitalize text-green-600 font-semibold leading-7">
                {technology}
              </span>{" "}
            </p>
          </div>

          <div className="flex justify-around mt-4">
            <div>
              <Link target="_blank" to={liveLink}>
                {" "}
                <button className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                  Live Site
                </button>
              </Link>
            </div>
            <div>
              <Link target="_blank" to={githubLink}>
                <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                  Github Code
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProjectCard;
