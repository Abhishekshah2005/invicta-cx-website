"use client";

import { useRef, useState } from "react";

import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/utils/dom";
import { Logo } from "@/components/logo";

/**
 * Premium intro loader. The official logo settles in, a hairline crimson bar
 * fills, then the curtain lifts to reveal the site. Fast (~1.5s), and skipped
 * entirely under reduced motion. Mounted once at the root; only shows on a full
 * page load, not on client-side navigation.
 */
export function Loader() {
  const ref = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;

      if (prefersReducedMotion()) {
        setDone(true);
        return;
      }

      const tl = gsap.timeline({ onComplete: () => setDone(true) });
      tl.from(".loader-logo", {
        opacity: 0,
        scale: 0.94,
        filter: "blur(6px)",
        duration: 0.6,
        ease: "power3.out",
      });
      tl.fromTo(
        ".loader-bar",
        { scaleX: 0 },
        { scaleX: 1, duration: 0.7, ease: "power2.inOut" },
        "<0.1",
      );
      tl.to(".loader-logo", { opacity: 0, y: -8, duration: 0.4, ease: "power2.in" }, "+=0.15");
      tl.to(root, { yPercent: -100, duration: 0.7, ease: "power4.inOut" }, "<0.05");
    },
    { dependencies: [] },
  );

  if (done) return null;

  return (
    <div
      ref={ref}
      className="dark fixed inset-0 z-200 flex flex-col items-center justify-center gap-7 bg-background"
    >
      <Logo className="loader-logo h-20 md:h-24" priority />
      <div className="h-px w-40 overflow-hidden bg-foreground/10">
        <div className="loader-bar h-full w-full origin-left bg-brand" />
      </div>
    </div>
  );
}
