import { useState, useEffect } from "react";

import Link from "next/link";
//import { Typewriter } from "react-simple-typewriter";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import Lottie from "react-lottie";
//import * as animationData from "../animations/web-designer.json";
import * as animationData from "../animations/programming.json";

export const Hero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
    isClickToPauseDisabled: true,
  };

  return (
    <section className="h-full px-4 py-4 mx-auto lg:py-12 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="flex flex-col justify-center font-medium lg:pr-10">
          <h5 className="mb-4 text-4xl leading-none text-white">Hi there,</h5>

          <h5 className="mb-4 text-4xl leading-none text-white">
            <Typist cursor={{ show: true, blink: true, element: "_" }}>
              I'm{" "}
              <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
                Sercan Yektas
              </span>
            </Typist>
          </h5>
          <h5 className="mt-8 text-2xl text-white">
            <span>💻 Full Stack Developer</span>
          </h5>
        </div>
        <div className="order-first mt-8 pointer-events-none md:order-last lg:mt-0">
          <Lottie options={defaultOptions} />
        </div>
      </div>
    </section>
  );
};
