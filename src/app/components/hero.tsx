import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="section flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl flex flex-row items-center gap-4">
        <div className="p-6 text-[#37BEB0] text-left flex-1">
          <div className="font-large text-2xl text-[#023047]">Hello! I'm Vikrant</div>
          <div className="font-light text-7xl text-[#023047]">Designer</div>
          <div className="font-light text-7xl text-[#023047]">Developer</div>
          <div className="font-bold text-8xl">Portfolio.</div>
        </div>
        <Image
          src="/teal-1.png"
          alt="Teal Image"
          width={400}
          height={400}
          className="object-contain"
        />
      </div>
    </section>
  );
}
