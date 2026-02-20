"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/lib/data";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col items-center justify-center py-24 px-6"
    >
      {/* Section header */}
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-sm uppercase tracking-widest text-nebula-400">
          Skills
        </p>
        <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
          Technical Skills
        </h2>
        <div className="mt-2 mx-auto h-1 w-16 rounded bg-nebula-500" />
      </motion.div>

      {/* Skill bars */}
      <div className="w-full max-w-xl space-y-8">
        {SKILLS.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <p className="mb-2 text-lg font-semibold text-white">
              {skill.name}
            </p>
            <div className="h-2.5 w-full rounded-full bg-gray-700">
              <motion.div
                className="h-2.5 rounded-full bg-nebula-500"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1 + 0.3,
                  duration: 0.8,
                  ease: "easeOut" as const,
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mx-auto max-w-3xl text-center">
        <p className="mt-8 text-lg leading-relaxed text-gray-300">
          Equipped with a versatile technical toolkit, I bridge the gap between robust systems architecture and dynamic web experiences. My programming foundation spans from the low-level mechanics of C and the object-oriented rigor of Java, to the agile, data-driven capabilities of Python. In the web development sphere, I leverage JavaScript to build engaging, interactive applications from the ground up. Supported by practical proficiency in Git for seamless version control and collaboration, I am highly adaptable, comfortable navigating complex codebases, and driven to engineer well-rounded technical solutions.
        </p>
      </div>
    </section>
  );
}
