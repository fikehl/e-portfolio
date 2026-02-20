"use client";

import { motion } from "framer-motion";
import { OverlayContainer, OverlayItem } from "@/components/ui/Overlay";
import { CONTACT } from "@/lib/data";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center py-24 px-6"
    >
      <OverlayContainer className="mx-auto max-w-xl text-center">
        <OverlayItem>
          <p className="font-mono text-sm uppercase tracking-widest text-nebula-400">
            Contact
          </p>
        </OverlayItem>
        <OverlayItem>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
            Get in Touch
          </h2>
        </OverlayItem>
        <OverlayItem>
          <div className="mt-2 mx-auto h-1 w-16 rounded bg-nebula-500" />
        </OverlayItem>
        <OverlayItem>
          <p className="mt-8 text-gray-400">
            Interested in working together? Feel free to reach out.
          </p>
        </OverlayItem>

        {/* Email button */}
        <OverlayItem>
          <motion.a
            href={`mailto:${CONTACT.email}`}
            className="glow-blue mt-8 inline-block rounded-full border border-nebula-500 px-8 py-3 font-mono text-sm text-white transition-all hover:bg-nebula-500/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {CONTACT.email}
          </motion.a>
        </OverlayItem>

        {/* Social links */}
        <OverlayItem>
          <div className="mt-8 flex justify-center gap-6">
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-nebula-400"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </OverlayItem>
      </OverlayContainer>
    </section>
  );
}
