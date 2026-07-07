"use client";

import { Children } from "react";

import { cn } from "@/lib/utils";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Seconds for one full loop. Lower is faster. */
  speed?: number;
  /** Scroll direction. */
  direction?: "left" | "right";
  /** Pause while the pointer is over the marquee. */
  pauseOnHover?: boolean;
  /** Gap between repeated items (Tailwind gap value in px). */
  gap?: number;
}

/**
 * Seamless, infinite marquee. Renders two copies of its children and translates
 * the track by -50%, so the loop is gapless. GPU-accelerated CSS animation
 * (see `@keyframes marquee-x` in `styles/effects.css`); honors reduced motion.
 */
export function Marquee({
  speed = 30,
  direction = "left",
  pauseOnHover = false,
  gap = 48,
  className,
  children,
  ...props
}: MarqueeProps) {
  const items = Children.toArray(children);

  return (
    <div
      className={cn("group flex w-full overflow-hidden", className)}
      // Expose duration/direction to the animated track via CSS custom props.
      style={
        {
          "--marquee-duration": `${speed}s`,
          "--marquee-direction": direction === "left" ? "normal" : "reverse",
          "--marquee-gap": `${gap}px`,
        } as React.CSSProperties
      }
      {...props}
    >
      {[0, 1].map((copy) => (
        <div
          key={copy}
          aria-hidden={copy === 1}
          className={cn(
            "flex shrink-0 items-center [gap:var(--marquee-gap)] [padding-inline-end:var(--marquee-gap)]",
            "motion-safe:animate-[marquee-x_var(--marquee-duration)_linear_infinite]",
            "[animation-direction:var(--marquee-direction)]",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
          )}
        >
          {items.map((item, index) => (
            <div key={index} className="shrink-0">
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
