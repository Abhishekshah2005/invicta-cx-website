import { Container } from "@/layouts/container";
import { Eyebrow } from "@/components/eyebrow";
import { Reveal, TextReveal, ImageReveal } from "@/components/reveal";
import { Stat } from "@/components/stat";
import { ImagePlaceholder } from "@/components/media/image-placeholder";
import { CASE } from "@/content/gaming";

/** Featured case study — Lunaland, as Challenge → Solution → Results. Dark. */
export function GamingCaseStudy() {
  const blocks = [CASE.challenge, CASE.solution, CASE.result];

  return (
    <section id="case-study" className="dark bg-background section-y text-foreground">
      <Container className="flex flex-col gap-12">
        <Reveal className="flex flex-col gap-4">
          <Eyebrow>{CASE.eyebrow}</Eyebrow>
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <p className="font-mono text-sm tracking-wider text-brand">{CASE.client}</p>
            <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
              {CASE.vertical}
            </p>
          </div>
          <TextReveal as="h2" className="max-w-[20ch] font-display text-fluid-2xl font-medium">
            {CASE.title}
          </TextReveal>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
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
                tone="crimson"
                ratio="4 / 3"
                label="Lunaland operations — a VIP account manager reviewing player insights on a premium dashboard. Editorial, warm, real."
              />
            </ImageReveal>
            <Reveal>
              <dl className="grid grid-cols-2 gap-6 border-t border-border pt-6 sm:grid-cols-4">
                {CASE.metrics.map((metric) => (
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
          </div>
        </div>
      </Container>
    </section>
  );
}
