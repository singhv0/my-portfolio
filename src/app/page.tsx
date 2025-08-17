import Image from "next/image";
import HeroSection from "./components/hero";
import Header from "./components/header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 space-y-12">
      <div className="bg-hero-pattern w-full m-10 h-10"><Header /></div>
      <div className="flex-grow"><HeroSection /></div>
    </div>
  );
}
