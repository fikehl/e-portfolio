"use client";

import { motion } from "framer-motion";
import Scene from "@/components/canvas/Scene";
import Hero from "@/components/canvas/Hero";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Scene>
          <Hero />
        </Scene>
      </div>

      {/* Text overlay */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.h1
          className="text-5xl font-bold tracking-tight text-white md:text-7xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Filip Kehl
        </motion.h1>
        <motion.p
          className="mt-4 font-mono text-lg text-nebula-400 md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Aspiring Student & Developer
        </motion.p>
        <motion.button
          onClick={() => scrollTo("projects")}
          className="glow-blue mt-8 rounded-full border border-nebula-500 px-8 py-3 font-mono text-sm text-white transition-all hover:bg-nebula-500/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Work
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="h-8 w-5 rounded-full border-2 border-nebula-500/50 p-1">
          <motion.div
            className="h-2 w-1.5 rounded-full bg-nebula-400 mx-auto"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
