import React from "react";

const About = () => {
  return (
    <section class="bg-gray-900">
      <div class="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:px-8">
        <div class="">
          <h2 class="text-3xl font-bold text-white sm:text-4xl">Skills</h2>
          <hr class="mt-2 h-1 w-full bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 " />
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
            </p> */}

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
          <a
            href=""
            class="relative block p-8 pb-24 border-t-4 border-pink-600 rounded-sm shadow-xl"
          >
            <h5 class="text-xl text-white font-bold">
              Javascript / Typescript
            </h5>
            {/*             <p class="mt-4 text-lg font-medium text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, provident.
            </p> */}

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
    </section>
  );
};

export default About;
