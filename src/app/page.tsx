`use client`

import Image from "next/image";
// import HeroSection from "./components/hero";
// import Header from "./components/header";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";
import HeroSection from "./components/heroSection";
import { use } from "react";

export default function Home() {
  return (
    <div className="portfolio-container">
      <HeroSection />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
