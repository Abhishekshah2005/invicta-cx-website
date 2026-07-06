import { ArrowRight } from "lucide-react";

import { Section } from "@/layouts/section";
import { Container } from "@/layouts/container";
import { RevealGroup } from "@/components/reveal";
import { Intro } from "./parts";
import type { SectionIntro, TitledPoint } from "@/types/templates";

interface ValueListProps {
  intro: SectionIntro;
  items: TitledPoint[];
}

/**
 * A ledger of value propositions — a bordered list of title/body rows, each led
 * by a crimson marker. Shared by Industry "Why Invicta", Service "Our Approach",
 * and Service "Benefits". Editorial and scannable; distinct from the boxed
 * challenge cards so a page alternates texture as you scroll.
 */
export function ValueList({ intro, items }: ValueListProps) {
  return (
    <Section space="compact">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Intro intro={intro} />
        <RevealGroup className="border-t border-border">
          {items.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-2 border-b border-border py-6"
            >
              <ArrowRight className="mt-1 size-5 shrink-0 text-brand" aria-hidden />
              <h3 className="font-display text-xl font-medium">{item.title}</h3>
              <p className="col-start-2 text-pretty text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
