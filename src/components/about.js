import React from "react";
import Lottie from "react-lottie";
//import * as animationData from "../animations/web-designer.json";
import * as animationData from "../animations/coding-2.json";

const About = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className="px-4 py-2 mx-auto max-w-7xl lg:py-8">
      <div className="p-8 bg-gray-900 rounded-lg ">
        <div className="grid grid-cols-1 sm:grid-cols-3 sm:items-center">
          <div className="relative">
            <div className="aspect-w-1 aspect-h-1">
              <Lottie options={defaultOptions} />
            </div>
          </div>

          <div className="flex flex-col h-full sm:col-span-2 text-md lg:text-xl ">
            <div className="col-span-3 col-end-5 mb-6">
              <h2 className="text-2xl text-white sm:text-4xl">About Me</h2>
              <div className="self-center w-40 h-1 mt-2 bg-purple-600 rounded-lg"></div>
            </div>
            <p className="leading-relaxed text-white ">
              Hi, I'm a full stack developer with 4 years of experience. I have developed web
              applications and their backend services many times. I'm always passionate about
              learning new skills and new technologies.
            </p>
            <br />
            <p className="leading-relaxed text-white">
              Currently learning the{" "}
              <span className="text-orange-500 ">Blockchain Technology,</span>{" "}
              <span className="text-purple-500 ">Web3</span> and{" "}
              <span className=" decoration-sky-500 text-sky-500">Solidity</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
