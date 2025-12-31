"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-bg-deep">
        {/* Teal glow at top */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] opacity-25"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(13, 148, 136, 0.25) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 wrapper py-32 text-center">
        {/* Alpha badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <div className="badge badge-gold">
            <span className="w-2 h-2 rounded-full bg-brand-gold" />
            Now in Private Alpha
          </div>
        </motion.div>

        {/* Main headline */}
        <div className="mb-8 overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-display text-text-secondary"
          >
            Capture. Replay. Understand.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-display text-text-primary mt-2"
          >
            Finally, Hand Review That Works.
          </motion.p>
        </div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lead max-w-2xl mx-auto mb-12"
        >
          FlopIQ makes hand capture{" "}
          <span className="text-brand-teal-bright font-semibold">
            fast enough that you&apos;ll actually do it
          </span>
          . Replay hands visually, ask &quot;what did I do wrong?&quot;, and get{" "}
          <span className="text-brand-gold font-semibold">
            clear explanations—not just numbers
          </span>
          .
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="#early-access">
            <motion.button
              className="btn-primary text-base px-8 py-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Get Early Access
            </motion.button>
          </Link>
          <Link href="#features">
            <motion.button
              className="btn-secondary text-base px-8 py-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg
                className="w-5 h-5 text-brand-teal"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              See How It Works
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-bg-primary to-transparent pointer-events-none" />
    </section>
  );
}
