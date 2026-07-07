import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

import { Section } from "@/layouts/section";
import { Container } from "@/layouts/container";
import { Eyebrow } from "@/components/eyebrow";
import { Reveal, TextReveal, ImageReveal } from "@/components/reveal";
import { Stat } from "@/components/stat";
import { ImagePlaceholder } from "@/components/media/image-placeholder";
import { Button } from "@/components/ui/button";
import { PROOF } from "@/content/home";

/**
 * Chapter VI — The Proof. The documented Lunaland relationship as Challenge →
 * Solution → Results with real metrics, routing to the full story.
 */
export function TheProof() {
  const blocks = [PROOF.challenge, PROOF.solution, PROOF.result];

  return (
    <Section id="proof" className="bg-muted/40">
      <Container className="flex flex-col gap-12">
        <Reveal className="flex flex-col gap-4">
          <Eyebrow>
            {PROOF.chapter} · {PROOF.eyebrow}
          </Eyebrow>
          <p className="font-mono text-sm tracking-wider text-brand">{PROOF.client}</p>
          <TextReveal as="h2" className="max-w-[22ch] font-display text-fluid-2xl font-medium">
            {PROOF.title}
          </TextReveal>
        </Reveal>

        <div className="mx-auto grid max-w-[94rem] gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="flex flex-col">
            {blocks.map((block) => (
              <div
                key={block.label}
                className="flex flex-col gap-2 border-t border-border py-6 first:border-t-0 first:pt-0"
              >
                <span className="font-mono text-xs tracking-[0.18em] text-brand uppercase">
                  {block.label}
                </span>
                <p className="text-lg text-pretty text-foreground/90">{block.body}</p>
              </div>
            ))}
          </Reveal>

          <div className="flex flex-col gap-8">
            <ImageReveal direction="up">
              <ImagePlaceholder
                tone="ink"
                ratio="4 / 3"
                label="Lunaland operations — a VIP account manager reviewing player insights on a premium dashboard. Editorial, warm, real."
                src="/assets/home/proof/lunaland.png"
              />
            </ImageReveal>
            <Reveal>
              <dl className="grid grid-cols-3 gap-6 border-t border-border pt-6">
                {PROOF.metrics.map((metric) => (
                  <Stat
                    key={metric.label}
                    value={metric.value}
                    prefix={"prefix" in metric ? metric.prefix : undefined}
                    suffix={metric.suffix}
                    decimals={"decimals" in metric ? metric.decimals : 0}
                    label={metric.label}
                  />
                ))}
              </dl>
            </Reveal>
            <Reveal>
              <Button asChild variant="brandOutline" size="lg">
                <Link href={PROOF.cta.href}>
                  {PROOF.cta.label}
                  <ArrowRight />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
