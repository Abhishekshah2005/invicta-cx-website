"use client";

import { useRef } from "react";

import { useGSAP } from "@/lib/gsap";
import { progressLine } from "@/animations/progress";
import { fadeInStagger } from "@/animations/fade";
import { Section } from "@/layouts/section";
import { Container } from "@/layouts/container";
import { Intro } from "./parts";
import type { ProcessStep, SectionIntro } from "@/types/templates";

interface ProcessStepsProps {
  intro: SectionIntro;
  steps: ProcessStep[];
}

/**
 * The signature template motion: a vertical rail whose fill scrubs to scroll
 * position (shared `progressLine` recipe) while numbered steps stagger in. One
 * reusable pattern powers Industry "Process", Service "Workflow", and Case Study
 * "Implementation" — so every template speaks the same motion language.
 */
export function ProcessSteps({ intro, steps }: ProcessStepsProps) {
  const scope = useRef<HTMLDivElement>(null);
  const rail = useRef<HTMLDivElement>(null);
  const items = useRef<HTMLOListElement>(null);

  useGSAP(
    () => {
      if (rail.current) {
        progressLine(rail.current, { trigger: scope.current ?? undefined });
      }
      if (items.current) {
        fadeInStagger(Array.from(items.current.children) as HTMLElement[], {
          start: "top 80%",
        });
      }
    },
    { scope },
  );

  return (
    <Section space="compact">
      <Container className="flex flex-col gap-12">
        <Intro intro={intro} />

        <div ref={scope} className="relative">
          {/* Rail: full-height track + scrubbed crimson fill */}
          <div
            aria-hidden
            className="absolute top-2 bottom-2 left-[7px] w-px bg-border md:left-[calc(50%-0.5px)] lg:left-[7px]"
          >
            <div ref={rail} className="h-full w-full origin-top bg-brand" />
          </div>

          <ol ref={items} className="flex flex-col gap-10 md:gap-14">
            {steps.map((step, index) => (
              <li key={index} className="relative grid grid-cols-[auto_1fr] gap-x-6 pl-0">
                {/* Node */}
                <span
                  aria-hidden
                  className="relative z-10 mt-1 flex size-4 items-center justify-center rounded-full border-2 border-brand bg-background"
                />
                <div className="flex flex-col gap-2">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs tracking-[0.16em] text-muted-foreground">
                      {step.marker ?? String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-xl font-medium md:text-2xl">{step.title}</h3>
                  </div>
                  <p className="max-w-2xl text-pretty text-muted-foreground">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
