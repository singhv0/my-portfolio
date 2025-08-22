"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-white dark:bg-[#171717]">
      <div className="flex flex-row items-end justify-center space-x-4 mb-4">
        <motion.span
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.2 }}
          className="text-7xl md:text-[13rem] font-extrabold text-[#ffffff]"
        >
          Creative
        </motion.span>
        <motion.button
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.6 }}
          className="playwrite-us-trad text-2xl md:text-xl font-light text-[#ffffff] bg-[#305ce1] rounded-full px-6 py-2"
        >
          Visual
        </motion.button>
      </div>
      <div className="flex flex-row items-center justify-center">
        <motion.span
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 15, delay: 1.2 }}
          className="redacted-script font-extrabold text-3xl md:text-7xl text-gray-600 mr-12 mb-10"
        >
          Graphic
        </motion.span>
        <motion.div
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 15, delay: 1.0 }}
          className="text-4xl md:text-[8rem] font-extrabold text-[#3ED2C3]"
        >
          Designer
        </motion.div>
      </div>
    </section>
  );
}