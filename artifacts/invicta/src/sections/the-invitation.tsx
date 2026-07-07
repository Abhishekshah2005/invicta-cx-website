import { Link } from "wouter";

import { Container } from "@/layouts/container";
import { Reveal, TextReveal } from "@/components/reveal";
import { MagneticButton } from "@/components/magnetic-button";
import { Button } from "@/components/ui/button";
import { ConversationNetwork } from "@/components/effects/conversation-network";
import { INVITATION } from "@/content/home";

/**
 * Chapter VII — The Invitation. The documentary closes where it opened: on the
 * living network. Dark register, masked headline, magnetic primary CTA.
 */
export function TheInvitation() {
  return (
    <section className="dark relative overflow-hidden bg-background section-y-lg text-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_75%)] opacity-60"
      >
        <ConversationNetwork count={64} />
      </div>

      <Container className="relative z-10 flex flex-col items-center gap-8 text-center">
        <TextReveal as="h2" className="max-w-[18ch] font-display text-fluid-3xl font-medium">
          {INVITATION.title}
        </TextReveal>
        <Reveal>
          <p className="max-w-2xl text-lg text-pretty text-muted-foreground">{INVITATION.lead}</p>
        </Reveal>
        <Reveal className="flex flex-wrap items-center justify-center gap-3">
          <MagneticButton asChild variant="brand" size="xl">
            <Link href={INVITATION.primary.href}>{INVITATION.primary.label}</Link>
          </MagneticButton>
          <Button asChild variant="brandOutline" size="xl">
            <Link href={INVITATION.secondary.href}>{INVITATION.secondary.label}</Link>
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
