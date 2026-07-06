import Link from "next/link";

import { Container } from "@/layouts/container";
import { Reveal, TextReveal } from "@/components/reveal";
import { MagneticButton } from "@/components/magnetic-button";
import { Button } from "@/components/ui/button";
import { ConversationNetwork } from "@/components/effects/conversation-network";

interface CtaLink {
  label: string;
  href: string;
}

interface SharedCtaProps {
  title?: string;
  lead?: string;
  primary?: CtaLink;
  secondary?: CtaLink;
}

const DEFAULTS = {
  title: "Become the brand your customers refuse to leave.",
  lead: "Let's build the human operation behind your customer experience — starting with a conversation, not a contract.",
  primary: { label: "Talk to an Expert", href: "/contact" },
  secondary: { label: "Explore the Method", href: "/method" },
} as const;

/**
 * The site-wide closing CTA, over the living network. Used at the foot of every
 * page; copy is overridable per page.
 */
export function SharedCta({ title, lead, primary, secondary }: SharedCtaProps) {
  const cta = {
    title: title ?? DEFAULTS.title,
    lead: lead ?? DEFAULTS.lead,
    primary: primary ?? DEFAULTS.primary,
    secondary: secondary ?? DEFAULTS.secondary,
  };

  return (
    <section className="dark relative overflow-hidden bg-background py-28 text-foreground md:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_75%)] opacity-50"
      >
        <ConversationNetwork count={54} />
      </div>

      <Container className="relative z-10 flex flex-col items-center gap-8 text-center">
        <TextReveal as="h2" className="max-w-[18ch] font-display text-fluid-3xl font-medium">
          {cta.title}
        </TextReveal>
        <Reveal>
          <p className="max-w-2xl text-lg text-pretty text-muted-foreground">{cta.lead}</p>
        </Reveal>
        <Reveal className="flex flex-wrap items-center justify-center gap-3">
          <MagneticButton asChild variant="brand" size="xl">
            <Link href={cta.primary.href}>{cta.primary.label}</Link>
          </MagneticButton>
          <Button asChild variant="brandOutline" size="xl">
            <Link href={cta.secondary.href}>{cta.secondary.label}</Link>
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
