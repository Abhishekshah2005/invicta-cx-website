"use client";

import { useRef } from "react";

import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import { prefersReducedMotion } from "@/utils/dom";
import { ConversationNetwork } from "@/components/effects/conversation-network";
import { CONVERSATIONS, COLD_OPEN } from "@/content/home";

/**
 * The Cold Open — the homepage's living hero. Real customer-support moments from
 * across every industry we serve type themselves in and cross-fade, one after
 * another, over a living network of conversations. Gaming appears — but as one
 * voice among many. It says, instantly: human support, everywhere.
 */
export function ColdOpen() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return;
      const q = (sel: string) => gsap.utils.toArray<HTMLElement>(sel, root);

      const network = q(".co-network");
      const convos = q(".co-convo");

      // Brand framing reveals once.
      gsap.from(q(".co-frame"), { opacity: 0, y: 14, duration: 0.9, stagger: 0.12, delay: 0.2 });

      if (prefersReducedMotion()) {
        gsap.set(network, { opacity: 0.4 });
        gsap.set(convos, { opacity: 0 });
        if (convos[0]) gsap.set(convos[0], { opacity: 1 });
        gsap.set(q(".co-text"), { clipPath: "inset(0 0 0 0)" });
        gsap.set(q(".co-bubble"), { opacity: 1, y: 0 });
        gsap.set(q(".co-tag"), { opacity: 1, y: 0 });
        return;
      }

      gsap.to(network, { opacity: 0.36, duration: 1.6 });
      gsap.set(convos, { opacity: 0 });

      const tl = gsap.timeline({ repeat: -1, delay: 0.5 });

      convos.forEach((convo) => {
        const tag = convo.querySelector<HTMLElement>(".co-tag");
        const bubbles = gsap.utils.toArray<HTMLElement>(".co-bubble", convo);
        const texts = gsap.utils.toArray<HTMLElement>(".co-text", convo);

        tl.set(convo, { opacity: 1, zIndex: 2 });
        tl.set(bubbles, { opacity: 0, y: 12 });
        tl.set(texts, { clipPath: "inset(0 100% 0 0)" });
        tl.fromTo(
          tag,
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
        );

        bubbles.forEach((bubble, bi) => {
          const text = texts[bi];
          const len = text?.textContent?.length ?? 40;
          tl.to(
            bubble,
            { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" },
            bi === 0 ? "<0.1" : ">0.15",
          );
          if (text) {
            tl.to(
              text,
              {
                clipPath: "inset(0 0% 0 0)",
                duration: Math.min(1.1, 0.4 + len * 0.011),
                ease: "none",
              },
              "<0.05",
            );
          }
        });

        tl.to({}, { duration: 1.7 }); // hold to let it land
        tl.to(convo, { opacity: 0, duration: 0.5, ease: "power2.in" });
        tl.set(convo, { zIndex: 0 });
      });
    },
    { scope },
  );

  return (
    <section
      ref={scope}
      className="dark relative min-h-svh overflow-hidden bg-background text-foreground"
    >
      <div className="co-network pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_82%)]">
        <ConversationNetwork />
      </div>

      <div className="relative z-10 mx-auto flex min-h-svh max-w-lg flex-col items-center justify-center gap-10 px-6">
        <p className="co-frame font-mono text-xs tracking-[0.25em] text-foreground/50 uppercase">
          {COLD_OPEN.kicker}
        </p>

        {/* Cycling conversation stage */}
        <div className="relative min-h-[19rem] w-full sm:min-h-[16rem]">
          {CONVERSATIONS.map((convo, i) => (
            <div key={i} className="co-convo absolute inset-0 flex flex-col justify-center gap-3">
              <span className="co-tag mb-1 self-center font-mono text-[0.7rem] tracking-[0.2em] text-brand uppercase">
                {convo.industry} support
              </span>
              <Bubble role="customer" who={convo.who} text={convo.customer} />
              <Bubble role="invicta" who="Invicta specialist" text={convo.invicta} />
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-5 text-center">
          <p className="co-frame font-display text-lg text-balance text-brand italic md:text-xl">
            {COLD_OPEN.promise}
          </p>
          <a
            href="#moment"
            className="co-frame inline-flex flex-col items-center gap-2 text-xs tracking-[0.2em] text-foreground/50 uppercase transition-colors hover:text-foreground"
          >
            {COLD_OPEN.scrollCue}
            <span aria-hidden className="animate-bounce">
              ↓
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Bubble({ role, who, text }: { role: "customer" | "invicta"; who: string; text: string }) {
  const isInvicta = role === "invicta";
  return (
    <div
      className={cn(
        "co-bubble flex max-w-[85%] flex-col gap-1.5",
        isInvicta ? "items-end self-end" : "items-start self-start",
      )}
    >
      <span className="px-1 font-mono text-[0.6rem] tracking-[0.15em] text-foreground/40 uppercase">
        {who}
      </span>
      <div
        className={cn(
          "rounded-2xl border px-4 py-2.5 text-sm leading-relaxed backdrop-blur-sm",
          isInvicta
            ? "rounded-br-md border-brand/40 bg-brand/15"
            : "rounded-bl-md border-border/60 bg-card/40",
        )}
      >
        <span className="co-text inline-block">{text}</span>
      </div>
    </div>
  );
}
