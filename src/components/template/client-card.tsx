import { Section } from "@/layouts/section";
import { Container } from "@/layouts/container";
import { Reveal } from "@/components/reveal";
import type { CaseStudyContent } from "@/types/templates";

/**
 * Case Study "Client" block — a fact sheet (industry, region, scale) beside a
 * short descriptor. Sets the stage before the challenge. Factual fields only.
 */
export function ClientCard({ client }: { client: CaseStudyContent["client"] }) {
  return (
    <Section space="compact">
      <Container>
        <Reveal className="grid gap-10 rounded-2xl border border-border p-8 md:grid-cols-[1fr_1.4fr] md:p-12">
          <div className="flex flex-col gap-6">
            <h2 className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
              The Client
            </h2>
            <p className="font-display text-fluid-lg font-medium">{client.name}</p>
            <dl className="flex flex-col gap-3">
              {client.facts.map((fact, index) => (
                <div key={index} className="flex justify-between gap-4 border-t border-border pt-3">
                  <dt className="text-sm text-muted-foreground">{fact.label}</dt>
                  <dd className="text-sm font-medium">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <p className="self-center text-lg leading-relaxed text-pretty text-muted-foreground">
            {client.summary}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
