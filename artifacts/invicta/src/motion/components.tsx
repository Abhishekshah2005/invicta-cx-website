"use client";

import { motion, type HTMLMotionProps } from "motion/react";

import { cn } from "@/lib/utils";
import { REVEAL_VARIANTS, staggerContainer, staggerItem, type RevealVariant } from "./variants";

interface RevealProps extends Omit<HTMLMotionProps<"div">, "variants"> {
  /** Which entrance preset to use. */
  variant?: RevealVariant;
  /** Extra delay before the reveal, in seconds. */
  delay?: number;
  /** Only animate the first time it enters the viewport. */
  once?: boolean;
  /** Fraction of the element that must be visible to trigger (0–1). */
  amount?: number;
}

/**
 * Reveal a single element when it scrolls into view. Uses the shared brand
 * variants; reduced motion is handled globally by `MotionConfig`.
 */
export function Reveal({
  variant = "fade-up",
  delay = 0,
  once = true,
  amount = 0.3,
  className,
  children,
  ...props
}: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={REVEAL_VARIANTS[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={{ delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps extends Omit<HTMLMotionProps<"div">, "variants"> {
  once?: boolean;
  amount?: number;
}

/**
 * Orchestrating parent for staggered reveals. Wrap `<StaggerItem>` children (or
 * any `motion.*` element using the `staggerItem` variant).
 */
export function Stagger({
  once = true,
  amount = 0.2,
  className,
  children,
  ...props
}: StaggerProps) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps extends Omit<HTMLMotionProps<"div">, "variants"> {
  variant?: RevealVariant;
}

/** A single item within a `<Stagger>` group. */
export function StaggerItem({ variant, className, children, ...props }: StaggerItemProps) {
  return (
    <motion.div
      className={cn(className)}
      variants={variant ? REVEAL_VARIANTS[variant] : staggerItem}
      {...props}
    >
      {children}
    </motion.div>
  );
}
