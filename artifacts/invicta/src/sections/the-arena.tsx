import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";

import { Container } from "@/layouts/container";
import { Eyebrow } from "@/components/eyebrow";
import { Reveal, TextReveal, ImageReveal } from "@/components/reveal";
import { Parallax } from "@/components/effects/parallax";
import { ImagePlaceholder } from "@/components/media/image-placeholder";
import { Button } from "@/components/ui/button";
import { ARENA } from "@/content/home";

/**
 * Chapter III — The Arena. A register shift into the intensity of 24/7 gaming.
 * Dark, cinematic, parallax media. Establishes credibility and routes to the
 * flagship Gaming page (where the immersive Three.js experience lives).
 */
export function TheArena() {
  return (
    <section className="dark relative overflow-hidden bg-background section-y-lg text-foreground">
      <Container>
        <div className="mx-auto grid max-w-[94rem] items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col items-start gap-7">
            <Reveal>
              <Eyebrow>{ARENA.chapter}</Eyebrow>
            </Reveal>
            <Reveal>
              <p className="font-mono text-sm tracking-wider text-brand">{ARENA.eyebrow}</p>
            </Reveal>
            <TextReveal as="h2" className="max-w-[18ch] font-display text-fluid-2xl font-medium">
              {ARENA.title}
            </TextReveal>
            <Reveal>
              <p className="max-w-xl text-lg text-pretty text-muted-foreground">{ARENA.lead}</p>
            </Reveal>

            <ul className="flex flex-col gap-3">
              {ARENA.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                    <Check className="size-3" />
                  </span>
                  <span className="text-foreground/85">{point}</span>
                </li>
              ))}
            </ul>

            <Button asChild variant="brand" size="lg" className="mt-2">
              <Link href={ARENA.cta.href}>
                {ARENA.cta.label}
                <ArrowRight />
              </Link>
            </Button>
          </div>

          <ImageReveal direction="up">
            <Parallax speed={0.16}>
              <ImagePlaceholder
                tone="crimson"
                ratio="4 / 5"
                label={ARENA.imageLabel}
                src={ARENA.image}
              />
            </Parallax>
          </ImageReveal>
        </div>
      </Container>
    </section>
  );
}
