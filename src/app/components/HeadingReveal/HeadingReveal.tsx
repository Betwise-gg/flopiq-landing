"use client";

import { animate, stagger } from "motion";
import { useInView } from "motion/react";
import { splitText } from "motion-plus";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";

// Safe locale hook that works outside of locale context
function useSafeLocaleSegmentation(): "words" | "chars" {
  const [segmentation, setSegmentation] = useState<"words" | "chars">("words");

  useEffect(() => {
    // Check if we're in a Chinese locale by looking at the URL
    const path = window.location.pathname;
    const locale = path.split("/")[1];
    if (["zh-hant", "zh-hans"].includes(locale)) {
      setSegmentation("chars");
    }
  }, []);

  return segmentation;
}

export default function HeadingReveal({
  text,
  headingLevel,
  className,
  color = "#EFF1F6",
  cursorColor = "#14b8a6",
  baseDelay = 0,
  splitBy,
  speed = 0.4,
  triggerOnView = false,
}: {
  text: string;
  headingLevel: "h1" | "h2" | "h3";
  className?: string;
  color?: string;
  cursorColor?: string;
  baseDelay?: number;
  splitBy?: "words" | "chars";
  speed?: number;
  triggerOnView?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const localeSegmentation = useSafeLocaleSegmentation();
  const effectiveSplitBy = splitBy ?? localeSegmentation;

  // Determine if we should trigger the animation
  const shouldAnimate = triggerOnView
    ? isInView && !hasAnimated
    : !hasAnimated;

  useEffect(() => {
    if (!shouldAnimate) return;

    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      setIsReady(true);

      const { words, chars } = splitText(
        containerRef.current.querySelector(headingLevel)!
      );

      const elements = effectiveSplitBy === "words" ? words : chars;

      // Smoother animation - fade up and in
      animate(
        elements,
        {
          opacity: [0, 1],
          y: [8, 0],
          filter: ["blur(4px)", "blur(0px)"],
        },
        {
          duration: speed,
          delay: stagger(speed * 0.15, { startDelay: baseDelay }),
          ease: [0.22, 1, 0.36, 1],
        }
      );

      setHasAnimated(true);
    });
  }, [
    shouldAnimate,
    headingLevel,
    effectiveSplitBy,
    cursorColor,
    color,
    speed,
    baseDelay,
  ]);

  const HeadingTag = headingLevel;

  return (
    <div
      ref={containerRef}
      style={{ opacity: isReady ? 1 : 0, transition: "opacity 0.1s" }}
    >
      <HeadingTag className={classNames(className)}>{text}</HeadingTag>
    </div>
  );
}
