import Image from "next/image";
import React from "react";
import Scroll from "react-scroll";
const Link = Scroll.Link;

export const Navbar = () => {
  return (
    <header className="shadow-sm">
      <div className="max-w-screen-xl p-4 mx-auto">
        <div className="flex items-center justify-between space-x-4 lg:space-x-10">
          <div className="flex lg:w-0 lg:flex-1">
            <span className="rounded-lg">
              <img
                src="https://res.cloudinary.com/yektas/image/upload/v1584461901/Blog/static/logo/sylogo-light.png"
                alt="SY Logo"
                className="w-32 cursor-pointer"
              />
            </span>
          </div>

          <nav className="hidden space-x-8 font-medium text-white text-md md:flex">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-76}
              duration={500}
              className="border-b-2 border-transparent"
              activeClass="border-orange-500"
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="border-b-2 border-transparent"
              activeClass="border-orange-500"
            >
              About
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="border-b-2 border-transparent"
              activeClass="border-orange-500"
            >
              Projects
            </Link>
          </nav>

          <div className="items-center justify-end flex-1 hidden space-x-4 md:flex">
            <a
              href=""
              class="inline-block p-0.5 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
            >
              <span class="block px-4 py-2 text-md font-medium text-white bg-gray-900 rounded-full hover:bg-opacity-75">
                Let's Connect
              </span>
            </a>
          </div>

          <div className="md:hidden">
            <button
              className="p-2 text-white bg-gray-900 border-2 border-gray-500 rounded-lg shadow-sm shadow-gray-500/50"
              type="button"
            >
              <span className="sr-only">Open menu</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
