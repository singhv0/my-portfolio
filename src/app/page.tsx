import Image from "next/image";
import HeroSection from "./components/hero";
import Header from "./components/header";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";

export default function Home() {
  return (
    <div className="portfolio-container">
      {/* <Header /> */}
      <HeroSection />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
