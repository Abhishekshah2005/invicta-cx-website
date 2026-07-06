import { Section } from "@/layouts/section";
import { Container } from "@/layouts/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, RevealGroup } from "@/components/reveal";
import { PlayerEcosystemBackdrop } from "@/three/scenes/player-ecosystem-backdrop";
import { OPERATIONS } from "@/content/gaming";

/**
 * 24/7 Global Operations — the flagship's one immersive 3D moment: a living
 * player-support ecosystem globe fills the section behind the operating pillars.
 * Dark. Uses the proven full-section backdrop pattern (definite bounds +
 * overflow clip) so the WebGL canvas sizes correctly.
 */
export function GamingOperations() {
  return (
    <Section className="dark relative overflow-hidden bg-background text-foreground">
      <PlayerEcosystemBackdrop className="opacity-70" />

      <Container className="relative z-10 flex flex-col gap-16">
        <Reveal className="max-w-3xl">
          <SectionHeading
            eyebrow={OPERATIONS.eyebrow}
            title={OPERATIONS.title}
            lead={OPERATIONS.lead}
            as="h2"
          />
        </Reveal>

        {/* Spacer to let the globe breathe between heading and pillars */}
        <div className="h-[32svh] min-h-56" aria-hidden />

        <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {OPERATIONS.pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="flex flex-col gap-3 rounded-xl border-t border-foreground/15 bg-background/40 p-4 pt-5 backdrop-blur-sm"
            >
              <span className="font-mono text-xs text-brand">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display text-lg font-medium">{pillar.title}</h3>
              <p className="text-sm text-pretty text-muted-foreground">{pillar.body}</p>
            </div>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
