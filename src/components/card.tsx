"use client";

import { motion, type HTMLMotionProps } from "motion/react";

import { cn } from "@/lib/utils";
import { SPRING } from "@/constants/animation";

type CardProps = HTMLMotionProps<"div"> & {
  /** Lift the card on hover (Motion interaction). Defaults to true. */
  interactive?: boolean;
};

/**
 * Branded surface card. Motion powers the hover interaction (a subtle lift +
 * border warm-up); GSAP is reserved for scroll storytelling. Compose freely —
 * this is the container; put your own content inside.
 */
export function Card({ interactive = true, className, ...props }: CardProps) {
  return (
    <motion.div
      className={cn(
        "rounded-2xl border border-border bg-card p-6 md:p-8",
        "transition-colors duration-300",
        interactive && "hover:border-foreground/20",
        className,
      )}
      whileHover={interactive ? { y: -4 } : undefined}
      transition={SPRING.snappy}
      {...props}
    />
  );
}
