"use client";

import { useRef } from "react";
import Image from "next/image";

import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/utils/dom";
import { MOMENT } from "@/content/home";
import { TextReveal } from "@/components/reveal";
import { LazyMount } from "@/components/utility";

/**
 * Chapter I — The Human Conversation. A 55/45 editorial split: a cinematic
 * conversation film anchors the media column; the copy builds to the crimson
 * punch beside it. The film settles (scale 1.08 → 1.00) and drifts on a gentle
 * ~10% parallax as it scrolls in (GSAP, Lenis-synced); the headline reveals
 * from behind a mask and the copy fades up. The video lazy-mounts near the
 * viewport with a poster painting first — full quality, no placeholders.
 */
export function TheMoment() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return;

      if (prefersReducedMotion()) {
        gsap.set(".hc-media-inner", { scale: 1, yPercent: 0 });
        gsap.set(".hc-fade", { opacity: 1, y: 0 });
        return;
      }

      // Slow scale settle (1.08 → 1.00) + ~10% parallax drift, scrubbed to scroll.
      gsap.fromTo(
        ".hc-media-inner",
        { scale: 1.08, yPercent: -5 },
        {
          scale: 1,
          yPercent: 5,
          ease: "none",
          scrollTrigger: { trigger: root, start: "top bottom", end: "bottom top", scrub: 1 },
        },
      );

      // Editorial column fades up as it enters.
      gsap.from(".hc-fade", {
        opacity: 0,
        y: 26,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: ".hc-copy", start: "top 82%", once: true },
      });
    },
    { scope },
  );

  return (
    <section id="moment" ref={scope} className="relative overflow-hidden py-20 md:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-[100rem] px-5 sm:px-6 md:px-8 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[55fr_45fr] lg:gap-16">
          {/* Media 55% — first in the DOM so tablet/mobile stack media-first. On
              mobile it keeps the natural 16:9 frame (no face cropping); the
              desktop column takes a cinematic 4:3 crop. */}
          <div className="hc-media relative aspect-video overflow-hidden rounded-2xl border border-border/60 shadow-lg lg:aspect-[4/3]">
            <div className="hc-media-inner absolute -inset-[12%] will-change-transform">
              <Image
                src="/human-conversation-poster.jpg"
                alt=""
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center"
              />
              <LazyMount rootMargin="500px" className="absolute inset-0">
                <video
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-hidden
                  preload="none"
                  poster="/human-conversation-poster.jpg"
                >
                  <source src="/human-conversation.mp4" type="video/mp4" />
                </video>
              </LazyMount>
            </div>
            {/* Micro-detail: a whisper of grain to unify with the site's film look. */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 noise-overlay opacity-[0.05]"
            />
          </div>

          {/* Editorial 45% */}
          <div className="hc-copy flex flex-col gap-5 lg:gap-6">
            <span className="hc-fade font-mono text-xs tracking-[0.25em] text-muted-foreground uppercase">
              {MOMENT.chapter}
            </span>
            <TextReveal as="h2" className="font-display text-fluid-2xl font-medium text-balance">
              {MOMENT.title}
            </TextReveal>
            <div className="hc-fade flex max-w-md flex-col gap-1.5 text-lg leading-relaxed text-muted-foreground">
              {MOMENT.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <p className="hc-fade font-display text-fluid-xl font-medium text-brand">
              {MOMENT.punch}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
