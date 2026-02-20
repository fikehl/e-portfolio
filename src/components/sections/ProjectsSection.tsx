"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Scene from "@/components/canvas/Scene";
import ProjectsCarousel from "@/components/canvas/Projects";
import { PROJECTS } from "@/lib/data";

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () =>
    setActiveIndex((i) => (i - 1 + PROJECTS.length) % PROJECTS.length);
  const next = () =>
    setActiveIndex((i) => (i + 1) % PROJECTS.length);

  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col items-center justify-center py-24 px-6"
    >
      {/* Section header */}
      <motion.div
        className="mb-8 text-center z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-sm uppercase tracking-widest text-nebula-400">
          Portfolio
        </p>
        <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
          Featured Projects
        </h2>
        <div className="mt-2 mx-auto h-1 w-16 rounded bg-nebula-500" />
      </motion.div>

      {/* 3D Carousel */}
      <div className="w-full h-[500px] md:h-[550px]">
        <Scene>
          <ProjectsCarousel
            projects={PROJECTS}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </Scene>
      </div>

      {/* Navigation */}
      <motion.div
        className="z-10 flex items-center gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <button
          onClick={prev}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-nebula-500/30 text-nebula-400 transition-colors hover:border-nebula-500 hover:bg-nebula-500/10"
          aria-label="Previous project"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {PROJECTS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === activeIndex
                  ? "w-6 bg-nebula-500"
                  : "w-2 bg-gray-600 hover:bg-gray-400"
              }`}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-nebula-500/30 text-nebula-400 transition-colors hover:border-nebula-500 hover:bg-nebula-500/10"
          aria-label="Next project"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </motion.div>
    </section>
  );
}
