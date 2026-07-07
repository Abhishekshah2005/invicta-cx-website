"use client";

import { useRef } from "react";

import { useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import { CLIP_FROM, imageReveal, type RevealDirection } from "@/animations/imageReveal";

type ImageRevealProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Direction the mask wipes open from. */
  direction?: RevealDirection;
};

/**
 * Clip-path mask reveal for media. Wrap an `<Image>` (or any visual); the mask
 * wipes open on scroll while the inner element eases from a slight zoom. The
 * initial clip is set inline to avoid a flash before hydration.
 */
export function ImageReveal({
  direction = "up",
  className,
  children,
  style,
  ...props
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const handle = imageReveal(el);
      return () => handle.revert();
    },
    { dependencies: [direction], scope: ref },
  );

  return (
    <div
      ref={ref}
      className={cn("overflow-hidden", className)}
      style={{ clipPath: CLIP_FROM[direction], ...style }}
      {...props}
    >
      {children}
    </div>
  );
}
