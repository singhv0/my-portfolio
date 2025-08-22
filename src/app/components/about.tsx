"use client";
import React, { useRef, useEffect, useState } from "react";

const cardImages = [
  "/vs1.jpg", // replace with your actual images
  "/vs2.jpg",
  "/dyk.jpg",
];

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section flex flex-row justify-between items-center h-screen pl-52 pr-20"
      data-scroll
      data-scroll-speed="5"
    >
      {/* Left: About Text */}
      <div className="flex flex-col items-start space-y-6 w-1/2">
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <div className="text-6xl font-black text-[#e1e1e1]">About Me</div>
        </div>
        <div
          className={`transition-all duration-700 delay-150 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <div className="text-[#1adfcb] text-2xl font-semibold max-w-xl">
            Vikrant Singh <br /> 25 yrs
          </div>
        </div>
        <div
          className={`transition-all duration-700 delay-300 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <div className="text-[#ffffff] text-2xl max-w-xl">
            I create unconventional yet functional & visually pleasing interfaces
            for mobile and web
          </div>
        </div>
      </div>

      {/* Right: Animated Cards */}
      <div
        className="relative w-[340px] h-[440px] flex items-center justify-center"
        data-scroll
        data-scroll-speed="7" // Parallax on the whole card stack, not individual cards
      >
        {cardImages.map((img, idx) => (
          <div
            key={img}
            className={`
              absolute left-0 top-0 w-[260px] h-[360px] rounded-3xl shadow-2xl bg-cover bg-center border-0 border-white
              transition-all duration-700
              ${visible ? "opacity-100 scale-100" : "opacity-0 scale-75"}
              ${idx === 0 ? "z-30 rotate-0 translate-x-0 translate-y-0" : ""}
              ${idx === 1 ? "z-20 -rotate-6 -translate-x-8 translate-y-8" : ""}
              ${idx === 2 ? "z-10 -rotate-12 -translate-x-16 translate-y-16" : ""}
            `}
            style={{
              backgroundImage: `url(${img})`,
              transitionDelay: `${350 + idx * 120}ms`,
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default About;