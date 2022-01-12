import path from "path";
import fs from "fs";
import About from "../components/about";
import { Hero } from "../components/hero";
import Navbar from "../components/navbar";
import { Element } from "react-scroll";
import { Projects } from "../components/projects";
import { Footer } from "../components/footer";

export async function getStaticProps() {
  const dataFilePath = path.join(process.cwd(), "src/data", "projects.json");

  const fileContents = fs.readFileSync(dataFilePath, "utf8");
  const projects = JSON.parse(fileContents);
  console.log(projects);
  return { props: { projects } };
}

export default function Home({ projects }) {
  return (
    <div className="bg-gray-900 ">
      <Navbar />
      <main>
        <Element id="home" name="home">
          <Hero />
        </Element>
        <Element id="about" name="about">
          <About />
        </Element>
        <Element id="projects" name="projects">
          <Projects projects={projects} />
        </Element>
      </main>
      <Footer />
    </div>
  );
}
