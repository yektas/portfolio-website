import React from "react";
import { ProjectCard } from "./common/ProjectCard";

export const Projects = () => {
  return (
    <div className="px-4 py-8 mx-auto max-w-7xl">
      <section className="p-8 bg-gray-900 rounded-lg ">
        <div className="col-span-3 col-end-5 mb-6">
          <h2 className="text-2xl text-white sm:text-4xl">Projects</h2>
          <div className="self-center w-40 h-1 mt-2 bg-purple-600 rounded-lg"></div>
        </div>
      </section>

      <div className="grid grid-cols-2 gap-10">
        <div className="col-span-2 lg:col-span-1">
          <ProjectCard
            name="Auction Dapp"
            description="This demo is an auction application which users can bid on products listed by the contract owner and also claim the product when the bidding time is finished."
            demoSite="https://auction-dapp-mn2gwmu3c-yektas.vercel.app"
            githubLink="https://github.com/yektas/auction-dapp"
            image="https://res.cloudinary.com/yektas/image/upload/v1639957696/Portfolio%20Website/gtlkrydl22swhzffmfuf.gif"
          />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <ProjectCard
            name="Pianorium"
            description="A local piano lecturer's website to advertise and keep in touch with the new students."
            demoSite="https://pianorium.com"
            githubLink="https://github.com/yektas/pianoriumFrontend"
            image="https://res.cloudinary.com/yektas/image/upload/v1640034338/Portfolio%20Website/mz1yal2hui3w3nxphx47.jpg"
          />
        </div>
      </div>
    </div>
  );
};
