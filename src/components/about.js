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
    <div class="max-w-7xl px-4 py-8 mx-auto">
      <section class="p-8 bg-gray-900  rounded-lg ">
        <div class="grid grid-cols-1 sm:grid-cols-3 sm:items-center">
          <div class="relative">
            <div class="aspect-w-1 aspect-h-1">
              <Lottie options={defaultOptions} />
            </div>
          </div>

          <div class="sm:col-span-2  h-full  flex flex-col text-xl sm:text-xl ">
            <div class="col-span-3 col-end-5 mb-6">
              <h2 class="text-3xl text-white sm:text-4xl">About Me</h2>
              <hr class="mt-2 h-1 w-40 self-center bg-purple-600 " />
            </div>
            <p className="leading-relaxed text-white">
              Hi, I'm an experienced full stack developer. I have developed web
              applications and their backend services many times. I'm always
              passionate about learning new skills and new technologies.
            </p>
            <br />
            <p className="leading-relaxed text-white">
              Currently working on the{" "}
              <span className="text-orange-500 decoration-orange-500">
                Blockchain Technology
              </span>{" "}
              and{" "}
              <span className=" decoration-sky-500 text-sky-500">
                Smart Contracts
              </span>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
    /*  <section class="bg-gray-900">
      <div class="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:px-8">
        <div class="text-center flex flex-col">
          <h2 class="text-3xl text-white sm:text-4xl">About Me</h2>
          <hr class="mt-2 h-1 w-24 self-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 " />
        </div>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a
            href=""
            class="relative block p-8 pb-24 border-t-4 border-pink-600 rounded-sm shadow-xl"
          >
            <h5 class="text-4xl text-white font-bold">Solidity</h5>
            {/*             <p class="mt-4 text-lg font-medium text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, provident.
            </p> 

            <span class="absolute bottom-8 right-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-10 h-10 text-pink-600"
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

        <div class="text-center">
          <a
            class="inline-block px-5 py-3 text-sm font-medium text-white bg-blue-500 rounded-lg"
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
