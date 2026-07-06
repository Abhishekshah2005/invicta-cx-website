import { Section } from "@/layouts/section";
import { Container } from "@/layouts/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, RevealGroup } from "@/components/reveal";
import { Pill } from "@/components/pill";
import { TECHNOLOGY } from "@/content/gaming";

/** Technology integration. Light register; honest, category-led. */
export function GamingTechnology() {
  return (
    <Section className="bg-muted/40">
      <Container className="flex flex-col gap-12">
        <Reveal>
          <SectionHeading
            eyebrow={TECHNOLOGY.eyebrow}
            title={TECHNOLOGY.title}
            lead={TECHNOLOGY.lead}
            as="h2"
          />
        </Reveal>

        <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TECHNOLOGY.groups.map((group) => (
            <div
              key={group.label}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-background p-6"
            >
              <h3 className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <Pill key={tool}>{tool}</Pill>
                ))}
              </div>
            </div>
          ))}
        </RevealGroup>

        <Reveal>
          <p className="max-w-3xl text-xs text-muted-foreground">{TECHNOLOGY.note}</p>
        </Reveal>
      </Container>
    </Section>
  );
}
