import React from "react";
import { ProjectCard } from "./common/ProjectCard";

export const Projects = () => {
  return (
    <div class="max-w-7xl px-4 py-8 mx-auto">
      <section class="p-8 bg-gray-900  rounded-lg ">
        <div class="col-span-3 col-end-5 mb-6">
          <h2 class="text-3xl text-white sm:text-4xl">Projects</h2>
          <hr class="mt-2 h-1 w-40 self-center bg-purple-600 " />
        </div>
      </section>

      <div class="grid grid-col-2 grid-flow-col gap-10">
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};
