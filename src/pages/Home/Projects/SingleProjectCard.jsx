import React from "react";
import { Link } from "react-router-dom";

const SingleProjectCard = ({ project }) => {
  const { id, title, thumb, technology, liveLink, githubLink } = project;

  return (
    <div>
      <div className=" bg-white  rounded-lg shadow-lg ">
        <div className=" lg:h-[280px]">
          <img
            className="rounded-t-lg h-full object-contain "
            src={thumb}
            alt=""
          />
        </div>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-md md:text-md lg:text-xl font-bold tracking-tight text-gray-900">
              {title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 my-4 text-xs md:text-sm lg:text-md ">
            Technology Used: <span className="leading-7">{technology}</span>
          </p>

          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0  lg:space-x-6 py-2 lg:py-6">
            <div>
              <Link target="_blank" to={liveLink} >
              <button className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Live Link
              </button></Link>
            </div>
            <div>
              <Link target="_blank" to={githubLink}>
              <button className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Github Link
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
