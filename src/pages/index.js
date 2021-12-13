import Head from "next/head";
import Image from "next/image";
import About from "../components/about";
import { Hero } from "../components/hero";
import { Navbar } from "../components/navbar";
import { Element } from "react-scroll";
import SmoothScroll from "../utils/SmoothScroll";
import { Projects } from "../components/projects";
export default function Home() {
  return (
    <SmoothScroll>
      <div className="bg-gray-900">
        <Navbar />
        <main>
          <Element id="home" name="home">
            <Hero />
          </Element>
          <Element id="about" name="about">
            <About />
          </Element>
          <Element id="projects" name="projects">
            <Projects />
          </Element>
        </main>
      </div>
    </SmoothScroll>
  );
}
