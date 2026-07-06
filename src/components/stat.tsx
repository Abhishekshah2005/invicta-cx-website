"use client";

import { useRef } from "react";

import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Target number to count up to. */
  value: number;
  /** Text before the number (e.g. "<", "$"). */
  prefix?: string;
  /** Text after the number (e.g. "+", "%", "★", "s"). */
  suffix?: string;
  /** Decimal places to display. */
  decimals?: number;
  /** Caption below the figure. */
  label: React.ReactNode;
}

function format(value: number, decimals: number): string {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

/**
 * A proof-band metric: a large serif figure that counts up when scrolled into
 * view, with a mono caption. Respects reduced motion (renders the final value
 * immediately).
 */
export function Stat({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  label,
  className,
  ...props
}: StatProps) {
  const numberRef = useRef<HTMLSpanElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      const el = numberRef.current;
      if (!el) return;

      if (reducedMotion) {
        el.textContent = format(value, decimals);
        return;
      }

      const counter = { value: 0 };
      gsap.to(counter, {
        value,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
        onUpdate: () => {
          el.textContent = format(counter.value, decimals);
        },
      });
    },
    { dependencies: [value, decimals, reducedMotion], scope: numberRef },
  );

  return (
    <div className={cn("flex flex-col gap-2", className)} {...props}>
      <div className="font-display text-fluid-xl font-medium tracking-tight text-foreground tabular-nums">
        {prefix}
        <span ref={numberRef}>{format(0, decimals)}</span>
        {suffix}
      </div>
      <div className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
        {label}
      </div>
    </div>
  );
}
