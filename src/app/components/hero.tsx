import Image from "next/image";

export default function HeroSection() {
  return (
    <main className="flex flex-row items-center gap-4 max-w-6xl w-full px-4">
      <div className="p-26 text-[#37BEB0] text-left">
        <div className="font-large text-2xl text-[#023047]">Hello! I'm Vikrant</div>
        <div className="font-light text-7xl text-[#023047]">Designer</div>
        <div className="font-light text-7xl text-[#023047]">Developer</div>
        <div className="font-bold text-8xl">Portfolio.</div>
        {/*    <div className="font-bold text-xl text-[#023047]">Minimalism : clean code, clear design, better results.</div> */}

      </div>
      <Image
        src="/teal-1.png"
        alt="Teal Image"
        width={400}
        height={400}
        className="object-contain"
      />
    </main>
  );
}
