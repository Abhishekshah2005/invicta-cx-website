"use client";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import { ease } from "@/constants/animation";

interface AnimatedUnderlineProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Wrap link/nav text to give it a Motion-driven underline that wipes in from the
 * left on hover/focus. A reusable interaction primitive for navigation and
 * inline links (Motion for micro-interactions; GSAP stays on scroll work).
 */
export function AnimatedUnderline({ className, children }: AnimatedUnderlineProps) {
  return (
    <motion.span
      initial="rest"
      animate="rest"
      whileHover="hover"
      whileFocus="hover"
      className={cn("relative inline-block", className)}
    >
      {children}
      <motion.span
        aria-hidden
        className="absolute -bottom-0.5 left-0 h-px w-full origin-left bg-brand"
        variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
        transition={{ duration: 0.4, ease: ease("out") }}
      />
    </motion.span>
  );
}
