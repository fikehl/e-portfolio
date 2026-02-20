"use client";

import { OverlayContainer, OverlayItem } from "@/components/ui/Overlay";
import { ABOUT_TEXT } from "@/lib/data";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center py-24 px-6"
    >
      <OverlayContainer className="mx-auto max-w-3xl text-center">
        <OverlayItem>
          <p className="font-mono text-sm uppercase tracking-widest text-nebula-400">
            About Me
          </p>
        </OverlayItem>
        <OverlayItem>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
            Who I Am
          </h2>
        </OverlayItem>
        <OverlayItem>
          <div className="mt-2 mx-auto h-1 w-16 rounded bg-nebula-500" />
        </OverlayItem>
        <OverlayItem>
          <p className="mt-8 text-lg leading-relaxed text-gray-300">
            I'm a 20 year old student from Germany, currently studying IT at KTH (Kungliga Tekniska högskolan) in Stockholm, Sweden. I have a big passion for technology and I'm always looking for new challenges. In my free time I enjoy learning new things, play football, and spending time with my friends. Beyond my technical skills, my diverse background—ranging from data annotation and strategic marketing in Berlin to high-paced restaurant service, has shaped me into an analytical, stress-resilient, and collaborative team player. Furthermore, I thrive in dynamic environments, utilizing my fluency in Swedish, German, and English to communicate effectively and adapt to new challenges.
          </p>
        </OverlayItem>
      </OverlayContainer>
    </section>
  );
}
