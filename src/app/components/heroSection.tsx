"use client";
export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-white dark:bg-[#171717]">
      <div className="flex flex-row items-end justify-center space-x-4 mb-4">
        <span
          data-scroll
          data-scroll-speed="2"
          className="text-7xl md:text-[13rem] font-extrabold text-[#ffffff]"
        >
          Creative
        </span>
        <button
          data-scroll
          data-scroll-speed="2.5"
          className="playwrite-us-trad text-2xl md:text-xl font-light text-[#ffffff] bg-[#305ce1] rounded-full px-6 py-2"
        >
          Visual
        </button>
      </div>
      <div className="flex flex-row items-center justify-center">
        <span
          data-scroll
          data-scroll-speed="5"
          className="redacted-script font-extrabold text-3xl md:text-7xl text-gray-600 mr-12 mb-10"
        >
          Graphic
        </span>
        <div
          data-scroll
          data-scroll-speed="6"
          className="text-4xl md:text-[8rem] font-extrabold text-[#3ED2C3] -mt-24"
        >
          Designer
        </div>
      </div>
    </section>
  );
}