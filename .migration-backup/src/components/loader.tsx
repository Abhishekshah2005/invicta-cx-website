"use client";

import { useRef, useState } from "react";

import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/utils/dom";
import { MARK_PATH, MARK_VIEWBOX } from "./loader-mark";

const WORD = ["I", "N", "V", "I", "C", "T", "A"];

/**
 * Curved "conversation" trajectories — each particle emerges from the mark and
 * arcs outward (control point bent off the straight line), then dissolves.
 */
const PARTICLES = Array.from({ length: 22 }, (_, i) => {
  const angle = (i / 22) * Math.PI * 2 + (i % 2 ? 0.4 : -0.25);
  const dist = 96 + (i % 6) * 26;
  const ex = Math.cos(angle) * dist;
  const ey = Math.sin(angle) * dist * 0.62;
  const perp = angle + Math.PI / 2;
  const bend = (i % 2 ? 1 : -1) * (30 + (i % 3) * 14);
  return {
    ex,
    ey,
    cx: ex * 0.5 + Math.cos(perp) * bend,
    cy: ey * 0.5 + Math.sin(perp) * bend,
    size: 3 + (i % 3) * 1.5,
    dur: 0.9 + (i % 4) * 0.14,
    delay: (i % 7) * 0.03,
  };
});

/** Skip on back/forward cache restores — that's the "already cached" case. */
function isBackForward() {
  try {
    const nav = performance.getEntriesByType("navigation")[0] as
      PerformanceNavigationTiming | undefined;
    return nav?.type === "back_forward";
  } catch {
    return false;
  }
}

/**
 * The Invicta intro — a brand reveal, not a loading screen. On a warm-white
 * editorial canvas: the stallion is hand-drawn stroke-by-stroke from its real
 * vector, a crimson energy wave passes through and it glows, "conversation"
 * particles arc out and dissolve, the INVICTA wordmark builds letter by letter,
 * the logo breathes as light travels across it — then it scales and glides into
 * its exact place in the site header. The loader becomes the website, no cut.
 *
 * Plays on every full load (skips on reduced-motion and back/forward cache).
 */
export function Loader() {
  const root = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;

      if (prefersReducedMotion() || isBackForward()) {
        gsap.set(el, { autoAlpha: 0, display: "none" });
        setDone(true);
        return;
      }

      const html = document.documentElement;
      const prevOverflow = html.style.overflow;
      html.style.overflow = "hidden";

      const q = gsap.utils.selector(el);

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          html.style.overflow = prevOverflow;
          setDone(true);
        },
      });

      tl.set(el, { autoAlpha: 1 });
      tl.to(".ld-soft", { opacity: 1, duration: 0.4 }, 0);

      // STEP 1 — the mark is drawn, stroke by stroke, then inked in.
      tl.fromTo(
        ".ld-markgroup",
        { scale: 0.94 },
        { scale: 1, duration: 1.0, ease: "power2.out" },
        0.1,
      );
      tl.fromTo(
        ".mark-stroke",
        { strokeDashoffset: 1 },
        { strokeDashoffset: 0, duration: 0.9, ease: "power1.inOut" },
        0.15,
      );
      tl.to(".mark-fill", { opacity: 1, duration: 0.5, ease: "power2.out" }, 0.8);
      tl.to(".mark-stroke", { opacity: 0, duration: 0.4 }, 0.95);

      // STEP 2 — a crimson energy wave travels through; the mark glows.
      tl.fromTo(
        ".mark-shine",
        { attr: { x: -560 }, opacity: 0 },
        { attr: { x: 1400 }, opacity: 1, duration: 0.6, ease: "power2.inOut" },
        0.95,
      );
      tl.to(".mark-glow", { opacity: 0.65, duration: 0.32, ease: "power2.out" }, 1.0);
      tl.to(".mark-glow", { opacity: 0.16, duration: 0.6, ease: "power2.inOut" }, 1.35);

      // STEP 3 — conversation particles arc out along curved paths, then dissolve.
      PARTICLES.forEach((p, i) => {
        const node = q(".ld-particle")[i] as HTMLElement;
        const at = 1.05 + p.delay;
        tl.fromTo(
          node,
          { opacity: 0, scale: 0, x: 0, y: 0 },
          { opacity: 1, scale: 1, duration: 0.22, ease: "power2.out" },
          at,
        );
        tl.to(
          node,
          {
            duration: p.dur,
            ease: "power1.out",
            motionPath: {
              path: [
                { x: 0, y: 0 },
                { x: p.cx, y: p.cy },
                { x: p.ex, y: p.ey },
              ],
              curviness: 1.7,
            },
          },
          at,
        );
        tl.to(node, { opacity: 0, scale: 0.4, duration: 0.5, ease: "power1.in" }, at + p.dur * 0.5);
      });

      // STEP 4 — the wordmark builds: each letter slides up as it fades in.
      tl.fromTo(
        ".ld-letter",
        { yPercent: 70, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.5, stagger: 0.05, ease: "power3.out" },
        1.35,
      );
      tl.fromTo(
        ".ld-word-underline",
        { scaleX: 0 },
        { scaleX: 1, duration: 0.5, ease: "power2.out" },
        1.55,
      );

      // STEP 5 — the assembled logo breathes and floats; light travels across.
      tl.to(".ld-stage", { y: -6, duration: 0.9, ease: "sine.inOut", yoyo: true, repeat: 1 }, 1.6);
      tl.to(
        ".ld-markgroup",
        { scale: 1.02, duration: 0.5, ease: "sine.inOut", yoyo: true, repeat: 1 },
        1.7,
      );
      tl.fromTo(
        ".mark-shine",
        { attr: { x: -560 }, opacity: 0.75 },
        { attr: { x: 1400 }, opacity: 0, duration: 0.9, ease: "power1.inOut" },
        1.75,
      );

      // STEP 6 — the mark scales down and glides into the header; page reveals.
      tl.addLabel("handoff", 2.35);
      tl.to([".ld-soft", ".ld-word-underline"], { opacity: 0, duration: 0.3 }, "handoff");

      tl.add(() => {
        const target = document.querySelector<HTMLElement>("[data-header-logo]");
        const stage = q(".ld-stage")[0] as HTMLElement | undefined;
        if (target && stage) {
          const from = stage.getBoundingClientRect();
          const to = target.getBoundingClientRect();
          if (to.height > 4 && from.height > 4) {
            const scale = to.height / from.height;
            const dx = to.left + to.width / 2 - (from.left + from.width / 2);
            const dy = to.top + to.height / 2 - (from.top + from.height / 2);
            gsap.to(stage, { x: dx, y: dy, scale, duration: 0.8, ease: "power4.inOut" });
          }
        }
        const header = document.querySelector("header");
        const main = document.querySelector("#main");
        if (header) {
          gsap.fromTo(
            header,
            { yPercent: -16, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 0.75, ease: "power3.out" },
          );
        }
        if (main) {
          gsap.fromTo(
            main,
            { opacity: 0, y: 18 },
            { opacity: 1, y: 0, duration: 0.9, ease: "power2.out", delay: 0.1 },
          );
        }
      }, "handoff");

      tl.to(el, { autoAlpha: 0, duration: 0.55, ease: "power2.inOut" }, "handoff+=0.34");

      // Ambient soft-light drift (cleaned up on unmount by useGSAP).
      gsap.to(q(".ld-light"), {
        x: 26,
        y: -18,
        duration: 9,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    },
    { scope: root, dependencies: [] },
  );

  if (done) return null;

  return (
    <div
      ref={root}
      aria-hidden
      className="fixed inset-0 z-200 flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#FAFAF8" }}
    >
      {/* Paper texture + one almost-invisible drifting soft light */}
      <div className="ld-soft pointer-events-none absolute inset-0 opacity-0">
        <div className="absolute inset-0 noise-overlay opacity-[0.05]" />
        <div
          className="ld-light absolute top-1/2 left-1/2 h-[46vmax] w-[46vmax] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: "color-mix(in oklab, var(--color-brand) 9%, transparent)",
            filter: "blur(120px)",
            opacity: 0.5,
          }}
        />
      </div>

      <div className="ld-stage relative flex flex-col items-center gap-[clamp(1rem,2.2vw,1.6rem)]">
        {/* Mark + particle emitter */}
        <div className="relative w-[clamp(230px,50vw,440px)]">
          <svg viewBox={MARK_VIEWBOX} className="ld-markgroup w-full overflow-visible" aria-hidden>
            <defs>
              <clipPath id="ld-mark-clip" clipRule="evenodd">
                <path d={MARK_PATH} />
              </clipPath>
              <linearGradient id="ld-shine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="50%" stopColor="white" stopOpacity="0.9" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>

            <path
              className="mark-glow"
              d={MARK_PATH}
              fill="var(--color-brand)"
              fillRule="evenodd"
              style={{ filter: "blur(11px)", opacity: 0 }}
            />
            <path
              className="mark-fill"
              d={MARK_PATH}
              fill="var(--color-brand)"
              fillRule="evenodd"
              style={{ opacity: 0 }}
            />
            <path
              className="mark-stroke"
              d={MARK_PATH}
              fill="none"
              stroke="var(--color-brand)"
              strokeWidth={6}
              strokeLinejoin="round"
              strokeLinecap="round"
              pathLength={1}
              style={{ strokeDasharray: 1, strokeDashoffset: 1 }}
            />
            <g clipPath="url(#ld-mark-clip)">
              <rect
                className="mark-shine"
                x={-560}
                y={-40}
                width={380}
                height={640}
                fill="url(#ld-shine)"
                opacity={0}
              />
            </g>
          </svg>

          <div className="pointer-events-none absolute inset-0">
            {PARTICLES.map((p, i) => (
              <span
                key={i}
                className="ld-particle absolute top-1/2 left-1/2 rounded-full"
                style={{
                  width: p.size,
                  height: p.size,
                  marginLeft: -p.size / 2,
                  marginTop: -p.size / 2,
                  backgroundColor: "var(--color-brand)",
                  opacity: 0,
                }}
              />
            ))}
          </div>
        </div>

        {/* Wordmark — builds letter by letter */}
        <div className="flex flex-col items-center gap-[0.45em]">
          <div
            className="ld-word flex font-display font-semibold text-brand"
            style={{
              fontSize: "clamp(1.7rem, 6vw, 3.2rem)",
              letterSpacing: "0.34em",
              paddingLeft: "0.34em",
            }}
          >
            {WORD.map((ch, i) => (
              <span key={i} className="ld-letter inline-block" style={{ opacity: 0 }}>
                {ch}
              </span>
            ))}
          </div>
          <span
            className="ld-word-underline h-px w-[72%] origin-center bg-brand/25"
            style={{ transform: "scaleX(0)" }}
          />
        </div>
      </div>
    </div>
  );
}
