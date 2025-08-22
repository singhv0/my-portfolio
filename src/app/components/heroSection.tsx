"use client";
export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-white dark:bg-[#171717]">
      <div className="flex flex-row items-end justify-center space-x-4 -mt-20">
        <span
          data-scroll
          data-scroll-speed="4"
          className="text-7xl md:text-[13rem] font-black bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text"
        >
          Creative
        </span>
        <button
          data-scroll
          data-scroll-speed="4"
          className="playwrite-us-trad text-2xl md:text-xl font-light text-[#ffffff] bg-[#305ce1] rounded-full px-8 py-4 mb-8 ml-2"
        >
          Visual
        </button>
      </div>
      <div className="flex flex-row items-center justify-center">
        <span
          data-scroll
          data-scroll-speed="5"
          className="redacted-script font-extrabold text-3xl md:text-[7rem] text-gray-600 mr-18 -mt-20"
        >
          Graphic
        </span>
        <div
          data-scroll
          data-scroll-speed="6"
          className="md:text-[9rem] align-text-top font-extrabold bg-gradient-to-r from-[#3ED2C3] to-[#209d91] text-transparent bg-clip-text -mt-22 mr-6"
        >
          Designer
        </div>
      </div>
    </section>
  );
}