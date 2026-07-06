import { Section } from "@/layouts/section";
import { Container } from "@/layouts/container";
import { Card } from "@/components/card";
import { RevealGroup } from "@/components/reveal";
import { Intro } from "./parts";
import type { SectionIntro, TitledPoint } from "@/types/templates";

interface ChallengeGridProps {
  intro: SectionIntro;
  items: TitledPoint[];
  /** Columns at `md`. Defaults to 3; use 2 for longer bodies. */
  columns?: 2 | 3;
}

/**
 * Problem-framing grid — the "here's what's hard" section. Numbered cards that
 * lift on hover (Motion). Shared by Industry "Challenges" and Service "Business
 * Challenges". Naming the pain earns the right to the solution that follows.
 */
export function ChallengeGrid({ intro, items, columns = 3 }: ChallengeGridProps) {
  return (
    <Section space="compact" className="bg-muted/40">
      <Container className="flex flex-col gap-12">
        <Intro intro={intro} />
        <RevealGroup
          className={
            columns === 3 ? "grid gap-4 sm:grid-cols-2 lg:grid-cols-3" : "grid gap-4 md:grid-cols-2"
          }
        >
          {items.map((item, index) => (
            <Card key={index} className="flex flex-col gap-4">
              <span className="font-mono text-sm tracking-[0.14em] text-brand">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xl font-medium">{item.title}</h3>
              <p className="text-pretty text-muted-foreground">{item.body}</p>
            </Card>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
