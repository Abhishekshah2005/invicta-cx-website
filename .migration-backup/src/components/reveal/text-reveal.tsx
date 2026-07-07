"use client";

import { createElement } from "react";

import { cn } from "@/lib/utils";
import { useTextReveal } from "@/hooks/use-text-reveal";
import type { TextRevealOptions } from "@/animations/textReveal";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";

type TextRevealProps = React.HTMLAttributes<HTMLElement> &
  TextRevealOptions & {
    /** Element to render. */
    as?: HeadingTag;
  };

/**
 * Masked, staggered text reveal (GSAP SplitText). Starts at `opacity-0` (still
 * in the accessibility tree) and reveals each line/word from behind a clip mask
 * on scroll, reverting the split afterwards so text stays selectable.
 */
export function TextReveal({
  as = "p",
  splitBy = "lines",
  stagger,
  delay,
  start,
  duration,
  ease,
  once,
  className,
  children,
  ...props
}: TextRevealProps) {
  const ref = useTextReveal<HTMLElement>({ splitBy, stagger, delay, start, duration, ease, once });

  return createElement(as, { ref, className: cn("opacity-0", className), ...props }, children);
}
