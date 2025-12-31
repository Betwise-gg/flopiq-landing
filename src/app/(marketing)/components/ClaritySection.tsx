"use client";

import { motion } from "motion/react";

function CrossedItem({ children, index }: { children: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="flex items-center gap-3"
    >
      <div className="w-6 h-6 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          className="text-red-400"
        >
          <path
            d="M18 6L6 18M6 6l12 12"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <span className="text-body line-through decoration-red-500/50 decoration-2">
        {children}
      </span>
    </motion.div>
  );
}

export default function ClaritySection() {
  const items = [
    "Not a solver replacement",
    "Not real-time assistance (use post-session only)",
    "Not \"GTO certified\" or claiming perfection",
    "Not a shortcut for people who won't review",
  ];

  return (
    <section className="relative py-28 bg-bg-deep">
      {/* Subtle background glow */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] opacity-15 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(13, 148, 136, 0.2) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="badge badge-teal mb-6"
            >
              What We&apos;re Not
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-section text-text-primary mb-8"
            >
              Clear About Our Limits
            </motion.h2>

            {/* Crossed items */}
            <div className="space-y-4">
              {items.map((item, index) => (
                <CrossedItem key={item} index={index}>
                  {item}
                </CrossedItem>
              ))}
            </div>
          </div>

          {/* Right: Quote card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="card"
          >
            <p className="text-lead">
              FlopIQ&apos;s chatbot is built on{" "}
              <span className="text-brand-teal-bright font-semibold">
                one coherent framework
              </span>
              —structured baseline play preflop through flop, plus exploitative adjustments on turn and river.{" "}
              <span className="text-brand-gold font-semibold">
                It&apos;s teachable and consistent
              </span>
              , not &quot;maximum accuracy per node.&quot;
            </p>

            {/* Decorative line */}
            <div className="mt-6 h-1 w-16 bg-gradient-to-r from-brand-teal to-brand-gold rounded-full" />
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg-primary to-transparent pointer-events-none" />
    </section>
  );
}
