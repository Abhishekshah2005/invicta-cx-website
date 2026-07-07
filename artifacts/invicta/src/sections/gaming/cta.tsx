import { Link } from "wouter";

import { Container } from "@/layouts/container";
import { Reveal, TextReveal } from "@/components/reveal";
import { MagneticButton } from "@/components/magnetic-button";
import { Button } from "@/components/ui/button";
import { ConversationNetwork } from "@/components/effects/conversation-network";
import { GAMING_CTA } from "@/content/gaming";

/** Premium CTA — the invitation, over the living network. Dark. */
export function GamingCta() {
  return (
    <section className="dark relative overflow-hidden bg-background section-y-lg text-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_75%)] opacity-60"
      >
        <ConversationNetwork count={60} />
      </div>

      <Container className="relative z-10 flex flex-col items-center gap-8 text-center">
        <TextReveal as="h2" className="max-w-[18ch] font-display text-fluid-3xl font-medium">
          {GAMING_CTA.title}
        </TextReveal>
        <Reveal>
          <p className="max-w-2xl text-lg text-pretty text-muted-foreground">{GAMING_CTA.lead}</p>
        </Reveal>
        <Reveal className="flex flex-wrap items-center justify-center gap-3">
          <MagneticButton asChild variant="brand" size="xl">
            <Link href={GAMING_CTA.primary.href}>{GAMING_CTA.primary.label}</Link>
          </MagneticButton>
          <Button asChild variant="brandOutline" size="xl">
            <Link href={GAMING_CTA.secondary.href}>{GAMING_CTA.secondary.label}</Link>
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
