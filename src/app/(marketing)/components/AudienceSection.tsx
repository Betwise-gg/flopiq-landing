"use client";

import { motion } from "motion/react";

function CheckItem({ children }: { children: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 w-5 h-5 rounded-full bg-brand-teal/15 border border-brand-teal/25 flex items-center justify-center flex-shrink-0">
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          className="text-brand-teal-bright"
        >
          <polyline
            points="20 6 9 17 4 12"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className="text-small text-text-secondary">{children}</span>
    </div>
  );
}

function AudienceCard({
  id,
  icon,
  title,
  subtitle,
  description,
  highlight,
  features,
  accentColor,
  index,
}: {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  highlight: string;
  features: string[];
  accentColor: "teal" | "gold";
  index: number;
}) {
  const colorClasses = {
    teal: {
      iconBg: "bg-brand-teal/10 border-brand-teal/20",
      iconText: "text-brand-teal-bright",
      highlight: "text-brand-teal-bright",
      border: "hover:border-brand-teal/30",
    },
    gold: {
      iconBg: "bg-brand-gold/10 border-brand-gold/20",
      iconText: "text-brand-gold",
      highlight: "text-brand-gold",
      border: "hover:border-brand-gold/30",
    },
  };

  const colors = colorClasses[accentColor];

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`card ${colors.border}`}
    >
      {/* Icon and title */}
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`w-12 h-12 rounded-xl ${colors.iconBg} border flex items-center justify-center ${colors.iconText}`}
        >
          {icon}
        </div>
        <div>
          <h3 className="text-card-title text-text-primary">{title}</h3>
          <p className="text-small text-text-muted">{subtitle}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-body mb-6">
        {description}{" "}
        <span className={`${colors.highlight} font-semibold`}>{highlight}</span>
      </p>

      {/* Features */}
      <div className="space-y-3">
        {features.map((feature) => (
          <CheckItem key={feature}>{feature}</CheckItem>
        ))}
      </div>
    </motion.div>
  );
}

export default function AudienceSection() {
  return (
    <section className="relative py-28 bg-bg-primary">
      <div className="wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AudienceCard
            id="players"
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="12" cy="8" r="5" />
                <path d="M20 21a8 8 0 1 0-16 0" />
              </svg>
            }
            title="For Players"
            subtitle="Who actually want to improve"
            description="If you'll actually review hands (or want to start), FlopIQ turns post-session notes into"
            highlight="a repeatable learning loop."
            features={[
              "Capture hands fast—even from live games with incomplete info",
              "Ask the chatbot: \"What went wrong? What's a better line?\"",
              "Build a library of hands tied to lessons learned",
            ]}
            accentColor="teal"
            index={0}
          />

          <AudienceCard
            id="coaches"
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            }
            title="For Coaches"
            subtitle="Who want clean shared artifacts"
            description="Review student hands without deciphering garbled notes. Get the actual hand plus"
            highlight="a consistent explanation model."
            features={[
              "Students share replayable hands—not vague recollections",
              "Annotate directly on the timeline with your feedback",
              "Create private study groups for your community",
            ]}
            accentColor="gold"
            index={1}
          />
        </div>
      </div>

      {/* Bottom gradient to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg-deep to-transparent pointer-events-none" />
    </section>
  );
}
