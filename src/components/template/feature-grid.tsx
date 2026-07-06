import { Check } from "lucide-react";

import { Section } from "@/layouts/section";
import { Container } from "@/layouts/container";
import { RevealGroup } from "@/components/reveal";
import { Intro } from "./parts";
import type { SectionIntro, TitledPoint } from "@/types/templates";

interface FeatureGridProps {
  intro: SectionIntro;
  items: TitledPoint[];
  columns?: 2 | 3;
}

/**
 * Benefit / outcome grid — check-led cards on the base canvas. Deliberately
 * distinct from the bordered `ValueList` and the numbered `ChallengeGrid` so a
 * page that uses more than one "list" section never repeats a layout.
 */
export function FeatureGrid({ intro, items, columns = 2 }: FeatureGridProps) {
  return (
    <Section space="compact">
      <Container className="flex flex-col gap-12">
        <Intro intro={intro} />
        <RevealGroup
          className={
            columns === 3
              ? "grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3"
              : "grid gap-x-12 gap-y-8 md:grid-cols-2"
          }
        >
          {items.map((item, index) => (
            <div key={index} className="flex gap-4">
              <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                <Check className="size-4" />
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-display text-lg font-medium">{item.title}</h3>
                <p className="text-pretty text-muted-foreground">{item.body}</p>
              </div>
            </div>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
