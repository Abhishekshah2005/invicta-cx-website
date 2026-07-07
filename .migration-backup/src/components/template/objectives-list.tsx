import { Section } from "@/layouts/section";
import { Container } from "@/layouts/container";
import { RevealGroup } from "@/components/reveal";
import { Intro } from "./parts";
import type { SectionIntro } from "@/types/templates";

interface ObjectivesListProps {
  intro: SectionIntro;
  items: string[];
}

/**
 * Case Study "Objectives" — a numbered ledger of the goals the engagement was
 * measured against. Large index numerals give it an editorial, checklist feel.
 */
export function ObjectivesList({ intro, items }: ObjectivesListProps) {
  return (
    <Section space="compact" className="bg-muted/40">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Intro intro={intro} />
        <RevealGroup className="flex flex-col">
          {items.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[auto_1fr] items-baseline gap-5 border-b border-border py-5 first:border-t"
            >
              <span className="font-display text-2xl font-medium text-brand tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-lg text-pretty">{item}</p>
            </div>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
