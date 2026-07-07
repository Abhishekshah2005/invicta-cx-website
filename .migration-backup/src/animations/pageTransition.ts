/**
 * GSAP page-transition curtains. A crimson/ink panel wipes over the viewport on
 * exit and away on enter. Pair with the Next.js router; Motion handles small
 * component interactions, GSAP owns full-screen transitions.
 *
 * Convention: a fixed, full-screen `[data-transition-curtain]` element,
 * initially `inset(0 0 100% 0)` (off-screen bottom).
 */
import { gsap } from "@/lib/gsap";
import { DURATION, GSAP_EASE } from "@/constants/animation";
import { prefersReducedMotion } from "@/utils/dom";

/** Cover the screen (call before navigating away). */
export function pageTransitionOut(curtain: HTMLElement): gsap.core.Tween {
  if (prefersReducedMotion()) return gsap.set(curtain, { clipPath: "inset(0% 0% 0% 0%)" });
  return gsap.fromTo(
    curtain,
    { clipPath: "inset(0% 0% 100% 0%)" },
    { clipPath: "inset(0% 0% 0% 0%)", duration: DURATION.base, ease: GSAP_EASE.inOut },
  );
}

/** Uncover the screen (call after the new route mounts). */
export function pageTransitionIn(curtain: HTMLElement): gsap.core.Tween {
  if (prefersReducedMotion()) return gsap.set(curtain, { clipPath: "inset(100% 0% 0% 0%)" });
  return gsap.fromTo(
    curtain,
    { clipPath: "inset(0% 0% 0% 0%)" },
    { clipPath: "inset(100% 0% 0% 0%)", duration: DURATION.base, ease: GSAP_EASE.inOut },
  );
}
