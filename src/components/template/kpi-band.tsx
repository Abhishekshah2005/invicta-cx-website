import { Section } from "@/layouts/section";
import { Container } from "@/layouts/container";
import { Stat } from "@/components/stat";
import { RevealGroup } from "@/components/reveal";
import { Intro } from "./parts";
import type { Metric, SectionIntro } from "@/types/templates";

interface KpiBandProps {
  intro?: SectionIntro;
  metrics: Metric[];
}

/**
 * A dark proof band of count-up metrics. Shared by Industry "KPIs" and Case
 * Study "Results". The immersive (dark) register gives the numbers weight and
 * breaks up the light editorial flow. Metrics count up on scroll (`Stat`).
 */
export function KpiBand({ intro, metrics }: KpiBandProps) {
  return (
    <Section space="compact" className="dark overflow-hidden bg-background text-foreground">
      {/* Micro-detail: film grain + a faint crimson glow to give the dark band depth. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 noise-overlay opacity-[0.04]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent"
      />
      <Container className="relative flex flex-col gap-12">
        {intro ? <Intro intro={intro} /> : null}
        <RevealGroup className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
          {metrics.map((metric, index) => (
            <Stat
              key={index}
              value={metric.value}
              prefix={metric.prefix}
              suffix={metric.suffix}
              decimals={metric.decimals}
              label={metric.label}
            />
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
