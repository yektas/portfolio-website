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
    <div className="px-4 py-2 mx-auto max-w-7xl lg:py-8">
      <section className="p-8 bg-gray-900 rounded-lg ">
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
      </section>
    </div>
    /*  <section className="bg-gray-900">
      <div className="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:px-8">
        <div className="flex flex-col text-center">
          <h2 className="text-3xl text-white sm:text-4xl">About Me</h2>
          <hr className="self-center w-24 h-1 mt-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 " />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a
            href=""
            className="relative block p-8 pb-24 border-t-4 border-pink-600 rounded-sm shadow-xl"
          >
            <h5 className="text-4xl font-bold text-white">Solidity</h5>
            {/*             <p className="mt-4 text-lg font-medium text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, provident.
            </p> 

            <span className="absolute bottom-8 right-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-pink-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </span>
          </a>
        </div>

        <div className="text-center">
          <a
            className="inline-block px-5 py-3 text-sm font-medium text-white bg-blue-500 rounded-lg"
            href=""
          >
            Find out more
          </a>
        </div>
      </div>
    </section> */
  );
};

export default About;
