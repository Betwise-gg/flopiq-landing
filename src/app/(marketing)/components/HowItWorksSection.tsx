"use client";

import { motion } from "motion/react";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  details: string[];
}

const steps: Step[] = [
  {
    number: "01",
    title: "Input Your Hand",
    description: "Quickly log hands with our intuitive interface designed for speed.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
    color: "teal",
    details: ["Position & Stack Info", "Action Sequences", "Board Runouts"],
  },
  {
    number: "02",
    title: "Document Your Reasoning",
    description: "Capture your thought process at every decision point.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    color: "gold",
    details: ["Street-by-Street Notes", "Range Assumptions", "Strategic Intent"],
  },
  {
    number: "03",
    title: "Get Community Feedback",
    description: "Share with peers and get diverse perspectives on your plays.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    color: "purple",
    details: ["Threaded Discussions", "Peer Reviews", "Study Groups"],
  },
  {
    number: "04",
    title: "Refine & Improve",
    description: "Iterate on your strategy with AI-powered insights and community wisdom.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    color: "rose",
    details: ["Track Progress", "Identify Leaks", "Measurable Growth"],
  },
];

function StepCard({ step, index, totalSteps }: { step: Step; index: number; totalSteps: number }) {
  const colorMap = {
    teal: {
      bg: "from-brand-teal/20 to-brand-teal/5",
      border: "border-brand-teal/30",
      text: "text-brand-teal-bright",
      glow: "from-brand-teal/30",
      number: "text-brand-teal",
    },
    gold: {
      bg: "from-brand-gold/20 to-brand-gold/5",
      border: "border-brand-gold/30",
      text: "text-brand-gold",
      glow: "from-brand-gold/30",
      number: "text-brand-gold",
    },
    purple: {
      bg: "from-purple-500/20 to-purple-500/5",
      border: "border-purple-500/30",
      text: "text-purple-400",
      glow: "from-purple-500/30",
      number: "text-purple-400",
    },
    rose: {
      bg: "from-rose-500/20 to-rose-500/5",
      border: "border-rose-500/30",
      text: "text-rose-400",
      glow: "from-rose-500/30",
      number: "text-rose-400",
    },
  };

  const colors = colorMap[step.color as keyof typeof colorMap];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* Connector line */}
      {index < totalSteps - 1 && (
        <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-white/20 to-transparent z-10" />
      )}

      <div className="group relative h-full">
        {/* Glow effect */}
        <div className={`absolute -inset-1 bg-gradient-to-r ${colors.glow} to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

        <div className={`relative h-full p-8 rounded-2xl bg-gradient-to-b ${colors.bg} border ${colors.border} hover:border-opacity-60 transition-all duration-300`}>
          {/* Step number */}
          <div className={`absolute -top-4 -left-2 text-7xl font-black ${colors.number} opacity-20 select-none`}>
            {step.number}
          </div>

          {/* Icon */}
          <div className={`relative z-10 w-16 h-16 rounded-2xl bg-bg-elevated/50 border ${colors.border} flex items-center justify-center mb-6 ${colors.text} group-hover:scale-110 transition-transform`}>
            {step.icon}
          </div>

          {/* Content */}
          <h3 className="text-xl font-bold text-text-primary mb-3">{step.title}</h3>
          <p className="text-text-secondary mb-6 leading-relaxed">{step.description}</p>

          {/* Details */}
          <ul className="space-y-2">
            {step.details.map((detail, i) => (
              <motion.li
                key={detail}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.15 + i * 0.1 }}
                className="flex items-center gap-2 text-sm text-text-muted"
              >
                <div className={`w-1.5 h-1.5 rounded-full ${colors.text.replace('text-', 'bg-')}`} />
                {detail}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-deep to-bg-primary" />

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating poker chips */}
        <motion.div
          className="absolute top-[10%] right-[8%]"
          animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-gold/30 to-brand-gold/10 border-2 border-dashed border-brand-gold/30" />
        </motion.div>

        <motion.div
          className="absolute bottom-[15%] left-[5%]"
          animate={{ y: [0, 15, 0], rotate: [0, -180, -360] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-teal/30 to-brand-teal/10 border-2 border-dashed border-brand-teal/30" />
        </motion.div>

        {/* Subtle glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] opacity-20"
          style={{
            background: "radial-gradient(ellipse at center, rgba(13, 148, 136, 0.15) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative z-10 wrapper">
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="badge badge-teal mx-auto mb-6"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            How It Works
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="text-text-secondary">From Hand to</span>{" "}
            <span className="gradient-text">Mastery</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-text-secondary max-w-2xl mx-auto"
          >
            A structured approach to poker improvement that transforms how you study, discuss, and evolve your game.
          </motion.p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {steps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} totalSteps={steps.length} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-text-secondary mb-6">
            Ready to transform your study routine?
          </p>
          <a href="#early-access">
            <motion.button
              className="btn-primary text-lg px-10 py-5"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Start Your Journey
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
