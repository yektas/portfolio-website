import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import Scroll from "react-scroll";
import clsx from "clsx";
const ScrollLink = Scroll.Link;

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "About", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <Disclosure
      as="nav"
      className={clsx("fixed z-50 w-full transition-all ease-in-out duration-200", {
        "bg-gray-800 shadow-xl": scrolled,
      })}
    >
      {({ open }) => (
        <>
          <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                <div className="flex items-center flex-shrink-0">
                  <img
                    className="block w-auto h-8 cursor-pointer lg:hidden"
                    src="https://res.cloudinary.com/yektas/image/upload/v1584461901/Blog/static/logo/sylogo-light.png"
                    alt="Workflow"
                  />
                  <img
                    className="hidden w-auto h-8 cursor-pointer lg:block"
                    src="https://res.cloudinary.com/yektas/image/upload/v1584461901/Blog/static/logo/sylogo-light.png"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <ScrollLink
                        to={item.name.toLowerCase()}
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="px-3 py-2 text-sm font-medium text-white border-b-2 border-transparent cursor-pointer"
                        activeClass="border-orange-500"
                        key={item.name}
                        href={item.href}
                      >
                        {item.name}
                      </ScrollLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 items-center hidden pr-2 sm:flex sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <a
                  href="https://linktr.ee/syektas"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Linktree"
                  className="inline-block p-0.5 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
                >
                  <span className="block px-2 py-1 text-sm text-white bg-gray-900 rounded-full lg:px-4 lg:py-2 lg:text-md lg:font-medium hover:bg-opacity-75">
                    Let's Connect
                  </span>
                </a>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="bg-gray-700 sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <>
                {navigation.map((item) => (
                  <ScrollLink
                    to={item.name.toLowerCase()}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-800 hover:text-white"
                    activeClass="bg-gray-900 text-white"
                    key={item.name}
                    href={item.href}
                  >
                    {item.name}
                  </ScrollLink>
                ))}
                <a
                  href="https://www.linkedin.com/in/sercanyektas/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="inline-block p-0.5 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
                >
                  <span className="block px-2 py-1 text-sm text-white bg-gray-900 rounded-full lg:px-4 lg:py-2 lg:text-md lg:font-medium hover:bg-opacity-75">
                    Let's Connect
                  </span>
                </a>
              </>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
