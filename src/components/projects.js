import React, { useState } from "react";
import { ProjectCard } from "./common/ProjectCard";

export const Projects = ({ projects }) => {
  console.log(projects);
  return (
    <section className="px-4 py-8 mx-auto max-w-7xl">
      <div className="p-8 bg-gray-900 rounded-lg ">
        <div className="col-span-3 col-end-5 mb-6">
          <h2 className="text-2xl text-white sm:text-4xl">Projects</h2>
          <div className="self-center w-40 h-1 mt-2 bg-purple-600 rounded-lg"></div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-10">
        {projects.map((project, idx) => {
          console.log(project);
          return (
            <div key={idx} className="col-span-2 lg:col-span-1">
              <ProjectCard project={project} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
