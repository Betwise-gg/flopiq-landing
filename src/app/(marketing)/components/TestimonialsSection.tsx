"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar: string;
  stats?: string;
  gradient: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "FlopIQ completely changed how I approach hand review. The threaded discussions helped me identify leaks I never knew I had. My win rate increased 3bb/100 in just two months.",
    name: "Marcus Chen",
    title: "NL500 Regular",
    avatar: "MC",
    stats: "+3bb/100",
    gradient: "from-brand-teal to-teal-600",
  },
  {
    quote: "As a coach, managing student hands used to be chaos. Now I can organize, annotate, and provide feedback seamlessly. My students are improving faster than ever.",
    name: "Sarah Williams",
    title: "Professional Coach",
    avatar: "SW",
    stats: "50+ Students",
    gradient: "from-brand-gold to-amber-600",
  },
  {
    quote: "The AI insights caught a pattern in my river decisions that I'd been missing for years. Finally, a tool that explains the 'why' not just the 'what'.",
    name: "Jake Morrison",
    title: "MTT Grinder",
    avatar: "JM",
    stats: "$120K+ Won",
    gradient: "from-purple-500 to-purple-700",
  },
  {
    quote: "Building a study group on FlopIQ was seamless. We review hands daily and the quality of discussion is unmatched. This is the future of poker study.",
    name: "Elena Rodriguez",
    title: "NL1K Player",
    avatar: "ER",
    stats: "Top 5% on Stars",
    gradient: "from-rose-500 to-rose-700",
  },
];

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      {/* Glow effect on hover */}
      <div className="absolute -inset-1 bg-gradient-to-r from-brand-teal/20 via-brand-gold/10 to-brand-teal/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative h-full p-8 rounded-2xl bg-gradient-to-b from-bg-elevated to-bg-primary border border-white/10 hover:border-brand-teal/30 transition-all duration-300">
        {/* Quote icon */}
        <div className="absolute -top-3 -left-2 text-5xl text-brand-teal/20 font-serif select-none">"</div>

        {/* Stats badge */}
        {testimonial.stats && (
          <div className="absolute top-6 right-6">
            <span className="px-3 py-1.5 text-xs font-bold text-brand-gold bg-brand-gold/10 border border-brand-gold/20 rounded-full">
              {testimonial.stats}
            </span>
          </div>
        )}

        {/* Quote */}
        <p className="relative z-10 text-text-secondary leading-relaxed mb-8 pt-4 text-[15px]">
          {testimonial.quote}
        </p>

        {/* Author */}
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
            {testimonial.avatar}
          </div>
          <div>
            <div className="font-semibold text-text-primary">{testimonial.name}</div>
            <div className="text-sm text-text-muted">{testimonial.title}</div>
          </div>
        </div>

        {/* Decorative corner */}
        <div className="absolute bottom-0 right-0 w-24 h-24 opacity-5">
          <svg viewBox="0 0 100 100" fill="currentColor" className="text-brand-teal">
            <polygon points="100,0 100,100 0,100" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

function FloatingReviewCards() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating star ratings */}
      <motion.div
        className="absolute top-[15%] left-[8%] flex gap-1"
        animate={{ y: [0, -15, 0], rotate: [-5, 0, -5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-brand-gold/40" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </motion.div>

      <motion.div
        className="absolute top-[25%] right-[5%] flex gap-1"
        animate={{ y: [0, 10, 0], rotate: [8, 5, 8] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-3 h-3 text-brand-gold/30" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </motion.div>

      <motion.div
        className="absolute bottom-[20%] left-[12%] flex gap-1"
        animate={{ y: [0, -10, 0], rotate: [-3, 2, -3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-3 h-3 text-brand-teal/30" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </motion.div>
    </div>
  );
}

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-deep to-bg-primary" />

      {/* Glow accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(251, 191, 36, 0.15) 0%, transparent 60%)",
        }}
      />

      <FloatingReviewCards />

      <div className="relative z-10 wrapper">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="badge badge-gold mx-auto mb-6"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Trusted by Winners
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="text-text-secondary">Hear from</span>{" "}
            <span className="gradient-text">Real Players</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-text-secondary max-w-2xl mx-auto"
          >
            Join thousands of players who have transformed their game with FlopIQ's unique approach to poker study.
          </motion.p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Bottom stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-brand-teal-bright">4.9/5</div>
            <div className="text-sm text-text-muted mt-1">Average Rating</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-white/10" />
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-brand-gold">2,500+</div>
            <div className="text-sm text-text-muted mt-1">Active Members</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-white/10" />
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-text-primary">50K+</div>
            <div className="text-sm text-text-muted mt-1">Hands Analyzed</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-white/10" />
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-brand-teal-bright">98%</div>
            <div className="text-sm text-text-muted mt-1">Would Recommend</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
