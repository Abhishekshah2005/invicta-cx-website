import { Section } from "@/layouts/section";
import { Container } from "@/layouts/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, RevealGroup } from "@/components/reveal";
import { CHALLENGES } from "@/content/gaming";

/**
 * The Arena — the pressures a gaming CX operation lives under. Dark register,
 * an editorial grid of pain points that shows we understand the business.
 */
export function GamingChallenges() {
  return (
    <Section className="dark bg-background text-foreground">
      <Container className="flex flex-col gap-12">
        <Reveal>
          <SectionHeading
            eyebrow={CHALLENGES.eyebrow}
            title={CHALLENGES.title}
            lead={CHALLENGES.lead}
            as="h2"
          />
        </Reveal>

        <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CHALLENGES.items.map((item, i) => (
            <article
              key={item.title}
              className="flex flex-col gap-3 rounded-2xl border border-border bg-card/40 p-6 transition-colors duration-300 hover:border-brand/30"
            >
              <span className="font-mono text-xs text-brand">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display text-lg font-medium">{item.title}</h3>
              <p className="text-sm text-pretty text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
