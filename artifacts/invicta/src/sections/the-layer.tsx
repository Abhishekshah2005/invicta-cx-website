import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

import { Section } from "@/layouts/section";
import { Container } from "@/layouts/container";
import { Eyebrow } from "@/components/eyebrow";
import { Reveal, RevealGroup, TextReveal } from "@/components/reveal";
import { Stat } from "@/components/stat";
import { Button } from "@/components/ui/button";
import { LAYER } from "@/content/home";

/**
 * Chapter IV — The Human Layer. Reframes the operation as an operating system
 * for human trust: recruited → trained → measured → scheduled, evidenced by
 * count-up proof. The "hundreds become one" idea, made concrete.
 */
export function TheLayer() {
  return (
    <Section id="layer" className="bg-muted/40">
      <Container className="flex flex-col gap-16">
        <Reveal className="flex max-w-3xl flex-col gap-5">
          <Eyebrow>{LAYER.chapter}</Eyebrow>
          <TextReveal as="h2" className="max-w-[18ch] font-display text-fluid-3xl font-medium">
            {LAYER.title}
          </TextReveal>
          <p className="max-w-2xl text-lg text-pretty text-muted-foreground">{LAYER.lead}</p>
        </Reveal>

        <Reveal>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-10 border-y border-border py-10 md:grid-cols-4">
            {LAYER.proof.map((item) => (
              <Stat
                key={item.label}
                value={item.value}
                prefix={"prefix" in item ? item.prefix : undefined}
                suffix={item.suffix}
                decimals={"decimals" in item ? item.decimals : 0}
                label={item.label}
              />
            ))}
          </dl>
        </Reveal>

        <RevealGroup className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {LAYER.pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="flex flex-col gap-3 border-t border-foreground/15 pt-5"
            >
              <span className="font-mono text-xs text-brand">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display text-xl font-medium">{pillar.title}</h3>
              <p className="text-sm text-pretty text-muted-foreground">{pillar.body}</p>
            </div>
          ))}
        </RevealGroup>

        <Reveal>
          <Button asChild variant="brandOutline" size="lg">
            <Link href={LAYER.cta.href}>
              {LAYER.cta.label}
              <ArrowRight />
            </Link>
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
