`use client`

import HeroSection from "./components/heroSection";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Header from "./components/header";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
