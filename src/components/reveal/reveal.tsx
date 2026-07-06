"use client";

import { useRef } from "react";

import { cn } from "@/lib/utils";
import { useGSAP } from "@/lib/gsap";
import { fadeInStagger, fadeInUp } from "@/animations/fade";

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number;
  distance?: number;
  start?: string;
}

/**
 * GSAP scroll reveal for a single block (fade + rise). Per project convention
 * GSAP owns scroll storytelling; use this — not the Motion `Reveal` — for
 * section entrances. Reduced-motion is handled inside the recipe.
 */
export function Reveal({
  delay,
  distance = 28,
  start,
  className,
  children,
  ...props
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Subtler default rise for a more intentional, editorial feel.
      if (ref.current) fadeInUp(ref.current, { delay, distance, start });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={cn(className)} {...props}>
      {children}
    </div>
  );
}

/**
 * GSAP staggered reveal for a group — animates its direct children in sequence
 * as the group scrolls in.
 */
export function RevealGroup({
  delay,
  distance,
  start,
  className,
  children,
  ...props
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      fadeInStagger(Array.from(el.children) as HTMLElement[], { delay, distance, start });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={cn(className)} {...props}>
      {children}
    </div>
  );
}
