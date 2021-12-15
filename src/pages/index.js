import Head from "next/head";
import Image from "next/image";
import About from "../components/about";
import { Hero } from "../components/hero";
import Navbar from "../components/navbar";
import { Element } from "react-scroll";
import { Projects } from "../components/projects";
import { Footer } from "../components/footer";
export default function Home() {
  return (
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
      <Footer />
    </div>
  );
}
