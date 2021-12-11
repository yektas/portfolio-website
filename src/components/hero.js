import { useState, useEffect } from "react";

import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

export const Hero = () => {
  const words = [
    "Full Stack Developer",
    "Blockchain Enthusiast",
    "Solidity Developer",
  ];

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="lg:pr-10">
          <h5 className="mb-4 text-4xl font-extrabold leading-none text-white">
            Hi there,
          </h5>
          <h5 className="mb-4 text-4xl font-extrabold leading-none text-white">
            I'm{" "}
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
              Sercan Yektas
            </span>
          </h5>
          <h5 className="mt-16 text-3xl font-bold text-white">
            <span>
              <Typewriter
                words={words}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={60}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h5>
        </div>
        <div className="p-4 rounded ">
          <img
            className="object-cover w-full h-56 sm:h-96"
            src="/programming.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
