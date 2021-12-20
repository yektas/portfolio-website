import React from "react";

export const ProjectCard = ({ name, description, githubLink, demoSite, image }) => {
  return (
    <div className="relative col-span-1">
      <img
        className="object-cover w-full border-2 border-gray-800 rounded-lg h-72"
        src={image || "https://www.hyperui.dev/photos/shoe-1.jpeg"}
        alt=""
      />

      <div className="relative z-10 h-64 p-8 mx-6 -mt-2 text-center text-white bg-gray-800 rounded-lg shadow-xl">
        <h5 className="text-2xl font-medium ">{name || "Project Name"}</h5>
        <p className="pt-4 text-gray-300">{description || "WIP"}</p>

        <div className="flex mt-4 justify-evenly">
          <a
            href={githubLink}
            rel="noreferrer"
            target="_blank"
            className="px-2 py-3 font-medium text-white transition transform bg-purple-600 rounded-lg md:px-5 inline-bloc hover:scale-105 md:hover:scale-110 hover:shadow-xl"
          >
            View Code
          </a>

          <a
            href={demoSite}
            rel="noreferrer"
            target="_blank"
            className="px-2 py-3 font-medium text-white transition transform bg-purple-600 rounded-lg md:px-5 inline-bloc hover:scale-105 md:hover:scale-110 hover:shadow-xl"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};
