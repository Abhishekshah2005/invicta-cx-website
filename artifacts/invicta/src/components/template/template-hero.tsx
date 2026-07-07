import { Link } from "wouter";

import { cn } from "@/lib/utils";
import { Container } from "@/layouts/container";
import { Eyebrow } from "@/components/eyebrow";
import { Reveal, TextReveal } from "@/components/reveal";
import { MagneticButton } from "@/components/magnetic-button";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/media/image-placeholder";
import { Breadcrumbs, type Crumb } from "@/components/page/breadcrumbs";
import type { TemplateHero as TemplateHeroData } from "@/types/templates";

interface TemplateHeroProps {
  crumbs: Crumb[];
  hero: TemplateHeroData;
  /** Optional meta row rendered under the lead (dates, category, reading time). */
  meta?: React.ReactNode;
}

/**
 * The shared masthead for every template. Light editorial register (the fixed
 * header adapts to stay legible). When the hero carries an `imageLabel` it
 * becomes a two-column split; otherwise it's a single editorial column.
 */
export function TemplateHero({ crumbs, hero, meta }: TemplateHeroProps) {
  const hasImage = Boolean(hero.imageLabel);

  return (
    <section className="relative overflow-hidden border-b border-border pt-28 pb-14 md:pt-36 md:pb-16">
      {/* Micro-detail: a whisper of grain over the editorial masthead. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 noise-overlay opacity-[0.03]"
      />
      <Container>
        <Breadcrumbs items={crumbs} />
        <div
          className={cn(
            "mt-7 grid gap-10 lg:gap-14",
            hasImage && "lg:grid-cols-[1.05fr_0.95fr] lg:items-center",
          )}
        >
          <div className={cn("flex flex-col gap-5", !hasImage && "max-w-4xl")}>
            {hero.eyebrow ? (
              <Reveal>
                <Eyebrow>{hero.eyebrow}</Eyebrow>
              </Reveal>
            ) : null}
            <TextReveal as="h1" start={null} className="font-display text-fluid-3xl font-medium">
              {hero.title}
            </TextReveal>
            {hero.lead ? (
              <Reveal>
                <p className="max-w-2xl text-lg text-pretty text-muted-foreground">{hero.lead}</p>
              </Reveal>
            ) : null}
            {meta ? <Reveal>{meta}</Reveal> : null}
            {hero.cta || hero.secondaryCta ? (
              <Reveal className="mt-2 flex flex-wrap items-center gap-3">
                {hero.cta ? (
                  <MagneticButton asChild variant="brand" size="lg">
                    <Link href={hero.cta.href}>{hero.cta.label}</Link>
                  </MagneticButton>
                ) : null}
                {hero.secondaryCta ? (
                  <Button asChild variant="outline" size="lg">
                    <Link href={hero.secondaryCta.href}>{hero.secondaryCta.label}</Link>
                  </Button>
                ) : null}
              </Reveal>
            ) : null}
          </div>

          {hasImage ? (
            <Reveal delay={0.1}>
              <ImagePlaceholder
                tone="ink"
                ratio="4 / 3"
                label={hero.imageLabel!}
                src={hero.image}
                focus={hero.imageFocus}
              />
            </Reveal>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
