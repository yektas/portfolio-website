import Head from "next/head";
import Image from "next/image";
import About from "../components/about";
import { Hero } from "../components/hero";
import { Navbar } from "../components/navbar";

export default function Home() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}
