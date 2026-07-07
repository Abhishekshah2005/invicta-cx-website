import { Section } from "@/layouts/section";
import { Container } from "@/layouts/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, RevealGroup } from "@/components/reveal";
import { Stat } from "@/components/stat";
import { VIP } from "@/content/gaming";

/** VIP Management — high-value player retention. Light register. */
export function GamingVip() {
  return (
    <Section>
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal className="flex flex-col gap-8 lg:sticky lg:top-28 lg:self-start">
            <SectionHeading eyebrow={VIP.eyebrow} title={VIP.title} lead={VIP.lead} as="h2" />
            <div className="border-t border-border pt-6">
              <Stat
                value={VIP.stat.value}
                suffix={VIP.stat.suffix}
                decimals={VIP.stat.decimals}
                label={VIP.stat.label}
              />
            </div>
          </Reveal>

          <RevealGroup className="grid gap-4 sm:grid-cols-2">
            {VIP.points.map((point) => (
              <article
                key={point.title}
                className="flex flex-col gap-3 rounded-2xl border border-border p-7 transition-colors duration-300 hover:border-foreground/20 hover:bg-muted/40"
              >
                <h3 className="font-display text-lg font-medium">{point.title}</h3>
                <p className="text-sm text-pretty text-muted-foreground">{point.body}</p>
              </article>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </Section>
  );
}
