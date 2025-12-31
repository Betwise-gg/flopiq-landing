"use client";

import { motion } from "motion/react";

interface Problem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const problems: Problem[] = [
  {
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        <path d="M12 12v4M12 12l-2 2M12 12l2 2" />
      </svg>
    ),
    title: "Hands Vanish Into Thin Air",
    description:
      "You play a tricky spot, think about it for a second after… then it's gone. No record, no review, no improvement. The hand review bottleneck starts before you even open a tool.",
  },
  {
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 3v18" />
        <path d="M15 3v18" />
        <path d="M3 15h18" />
      </svg>
    ),
    title: "Solvers Don't Explain Why",
    description:
      "EV grids tell you what's optimal—but not why. When you face a new spot, you can't extrapolate from numbers you memorized. You need reasoning, not just frequencies.",
  },
];

function ProblemCard({ problem, index }: { problem: Problem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="card group"
    >
      <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-5 text-red-400">
        {problem.icon}
      </div>

      <h3 className="text-card-title text-text-primary mb-3">
        {problem.title}
      </h3>
      <p className="text-body">
        {problem.description}
      </p>
    </motion.div>
  );
}

export default function ProblemSection() {
  return (
    <section className="relative py-28 bg-bg-primary">
      <div className="wrapper">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="badge badge-teal mx-auto mb-6"
          >
            The Problem
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-section text-text-primary"
          >
            The Hand Review Bottleneck
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lead max-w-xl mx-auto mt-6"
          >
            You don&apos;t improve because hands don&apos;t get captured, don&apos;t get revisited, and don&apos;t get explained. FlopIQ fixes the loop.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {problems.map((problem, index) => (
            <ProblemCard key={problem.title} problem={problem} index={index} />
          ))}
        </div>
      </div>

      {/* Bottom gradient to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg-deep to-transparent pointer-events-none" />
    </section>
  );
}
