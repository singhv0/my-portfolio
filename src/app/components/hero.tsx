import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="section flex flex-col border-b-2 items-center justify-center px-4">
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="flex-1 text-center md:text-left space-y-2">
          <div className="text-lg md:text-2xl font-semibold text-[#023047]">
            Hello! I'm Wayne
          </div>
          <div className="font-light text-4xl md:text-6xl text-[#023047]">
            Designer
          </div>
          <div className="font-light text-4xl md:text-6xl text-[#023047]">
            Developer
          </div>
          <div className="font-extrabold text-5xl md:text-7xl text-[#37BEB0]">
            Portfolio.
          </div>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/teal-1.png"
            alt="Teal Image"
            width={800}
            height={800}
            className="object-contain rounded-xl w-48 h-48 md:w-80 md:h-80 mx-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
