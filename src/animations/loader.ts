/**
 * Intro loader. Runs a counter to 100 then lifts the curtain off the page.
 * Convention-driven markup inside the loader root:
 *   [data-loader-count]   — element whose text is set to the 0→100 counter
 * On reduced motion the loader is removed instantly.
 */
import { gsap } from "@/lib/gsap";
import { DURATION, GSAP_EASE } from "@/constants/animation";
import { prefersReducedMotion } from "@/utils/dom";

export interface LoaderOptions {
  /** Counter duration in seconds. */
  duration?: number;
  /** Called once the curtain has fully lifted. */
  onComplete?: () => void;
}

/**
 * Play the intro loader on `root` (a full-screen overlay). Returns the timeline
 * so callers can pause/kill it.
 */
export function pageLoader(root: HTMLElement, options: LoaderOptions = {}): gsap.core.Timeline {
  if (prefersReducedMotion()) {
    gsap.set(root, { autoAlpha: 0, display: "none" });
    options.onComplete?.();
    return gsap.timeline();
  }

  const countEl = root.querySelector<HTMLElement>("[data-loader-count]");
  const counter = { value: 0 };

  const timeline = gsap.timeline({ onComplete: options.onComplete });

  timeline.to(counter, {
    value: 100,
    duration: options.duration ?? 1.6,
    ease: "power2.inOut",
    onUpdate: () => {
      if (countEl) countEl.textContent = String(Math.round(counter.value));
    },
  });

  timeline.to(root, { yPercent: -100, duration: DURATION.slow, ease: GSAP_EASE.expo }, "+=0.15");
  timeline.set(root, { display: "none" });

  return timeline;
}
