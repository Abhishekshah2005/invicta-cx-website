import { Section } from "@/layouts/section";
import { Container } from "@/layouts/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, RevealGroup } from "@/components/reveal";
import { WHY_CHOOSE } from "@/content/gaming";

/**
 * Why gaming operators choose Invicta — six reasons, editorial ledger style.
 * Light register for contrast after the dark open.
 */
export function GamingWhyChoose() {
  return (
    <Section>
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading
            eyebrow={WHY_CHOOSE.eyebrow}
            title={WHY_CHOOSE.title}
            lead={WHY_CHOOSE.lead}
            as="h2"
          />
        </Reveal>

        <RevealGroup className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE.reasons.map((reason) => (
            <div key={reason.no} className="flex flex-col gap-3 border-t border-foreground/15 pt-6">
              <span className="font-display text-4xl font-medium text-brand/40">{reason.no}</span>
              <h3 className="font-display text-xl font-medium">{reason.title}</h3>
              <p className="text-sm text-pretty text-muted-foreground">{reason.body}</p>
            </div>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
