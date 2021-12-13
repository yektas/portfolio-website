import { useState, useEffect } from "react";

import Link from "next/link";
//import { Typewriter } from "react-simple-typewriter";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import Lottie from "react-lottie";
//import * as animationData from "../animations/web-designer.json";
import * as animationData from "../animations/programming.json";

export const Hero = () => {
  const words = [
    "Full Stack Developer",
    "Blockchain Enthusiast",
    "Solidity Developer",
  ];

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
    <section className="h-full px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
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
          <h5 className="mt-16 text-2xl text-white">
            <span>I'm a full stack developer</span>
          </h5>
        </div>
        <div className="order-first pointer-events-none md:order-last ">
          <Lottie options={defaultOptions} />
        </div>
      </div>
    </section>
  );
};
