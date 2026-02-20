"use client";

import { motion } from "framer-motion";
import { TIMELINE } from "@/lib/data";

export default function TimelineSection() {
  return (
    <section
      id="timeline"
      className="relative min-h-screen flex flex-col items-center justify-center py-24 px-6"
    >
      {/* Section header */}
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-sm uppercase tracking-widest text-nebula-400">
          Journey
        </p>
        <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
          Career & Education
        </h2>
        <div className="mt-2 mx-auto h-1 w-16 rounded bg-nebula-500" />
      </motion.div>

      {/* Timeline */}
      <div className="relative mx-auto max-w-2xl">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-nebula-500/30" />

        {TIMELINE.map((entry, index) => (
          <motion.div
            key={entry.id}
            className="relative mb-12 pl-16"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
          >
            {/* Dot */}
            <div className="absolute left-4 top-1 h-4 w-4 rounded-full border-2 border-nebula-500 bg-abyss-900">
              <div className="absolute inset-1 rounded-full bg-nebula-500" />
            </div>

            {/* Period badge */}
            <span className="inline-block rounded-full border border-nebula-500/30 px-3 py-1 font-mono text-xs text-nebula-400">
              {entry.period}
            </span>

            {/* Content */}
            <div className="mt-3 glass rounded-xl p-5">
              <div className="flex items-center gap-2">
                <span
                  className={`rounded px-2 py-0.5 text-xs font-mono ${
                    entry.type === "work"
                      ? "bg-nebula-500/20 text-nebula-400"
                      : "bg-cyan-500/20 text-cyan-400"
                  }`}
                >
                  {entry.type === "work" ? "Work" : "Education"}
                </span>
              </div>
              <h3 className="mt-2 text-lg font-semibold text-white">
                {entry.title}
              </h3>
              <p className="text-sm text-nebula-400">{entry.subtitle}</p>
              <p className="mt-2 text-sm text-gray-400">{entry.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
