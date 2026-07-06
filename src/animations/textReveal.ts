/**
 * Masked text reveal via GSAP SplitText — the signature editorial headline
 * entrance. Splits into lines/words/chars and slides each up from behind a clip
 * mask. Always reverts the split on disposal so text stays accessible.
 */
import { gsap, SplitText } from "@/lib/gsap";
import { DURATION, GSAP_EASE, STAGGER } from "@/constants/animation";
import { prefersReducedMotion } from "@/utils/dom";
import type { Revertible, ScrollOptions, TimingOptions } from "./types";

export interface TextRevealOptions extends TimingOptions, ScrollOptions {
  /** Split granularity. */
  splitBy?: "lines" | "words" | "chars";
}

export interface TextRevealHandle extends Revertible {
  timeline: gsap.core.Timeline | null;
  split: SplitText | null;
}

/**
 * Reveal an element's text. The caller is responsible for hiding the element
 * pre-animation (e.g. `opacity-0`) to avoid a flash; this recipe sets it visible
 * as it animates. Returns a handle whose `revert()` kills the tween and restores
 * the original markup.
 */
export function textReveal(target: Element, options: TextRevealOptions = {}): TextRevealHandle {
  const el = target as HTMLElement;
  const splitBy = options.splitBy ?? "lines";

  if (prefersReducedMotion()) {
    gsap.set(el, { autoAlpha: 1 });
    return { timeline: null, split: null, revert: () => {} };
  }

  const split = new SplitText(el, {
    type: splitBy,
    linesClass: "overflow-hidden",
    autoSplit: true,
  });

  const targets =
    splitBy === "lines" ? split.lines : splitBy === "words" ? split.words : split.chars;

  gsap.set(el, { autoAlpha: 1 });

  const timeline = gsap.timeline({
    ...(options.start === null
      ? {}
      : {
          scrollTrigger: {
            trigger: el,
            start: options.start ?? "top 85%",
            once: options.once ?? true,
          },
        }),
  });

  timeline.from(targets, {
    yPercent: 120,
    duration: options.duration ?? DURATION.base,
    ease: options.ease ?? GSAP_EASE.out,
    stagger: options.stagger ?? STAGGER.base,
    delay: options.delay ?? 0,
  });

  return {
    timeline,
    split,
    revert: () => {
      timeline.kill();
      split.revert();
    },
  };
}
