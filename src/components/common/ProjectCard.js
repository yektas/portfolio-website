import React from "react";

export const ProjectCard = () => {
  return (
    <div class="relative">
      <img
        class="object-cover w-full h-64 rounded-lg"
        src="https://www.hyperui.dev/photos/shoe-1.jpeg"
        alt=""
      />

      <div class="relative z-10 p-8 mx-6 -mt-2 text-center text-white bg-gray-700 shadow-xl  rounded-lg">
        <h5 class="text-2xl font-medium ">
          Navigate to the future, don't get lost in the past
        </h5>
        <p className="pt-4 text-gray-300">
          Enim id sit velit voluptate irure fugiat. Ea pariatur cillum voluptate
          deserunt officia aute. Commodo nostrud ad enim ipsum dolore anim
          consectetur eiusmod do consectetur tempor deserunt. Irure sint qui eu
          deserunt magna exercitation sit laboris.
        </p>

        <div className="flex mt-4 justify-evenly">
          <a
            href=""
            class="px-5 py-3 font-medium text-white bg-purple-600 rounded-lg transition transform inline-bloc hover:scale-110 hover:shadow-xl"
          >
            View Code
          </a>

          <a
            href=""
            class="px-5 py-3 font-medium text-white bg-purple-600 rounded-lg transition transform inline-bloc hover:scale-110 hover:shadow-xl"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};
