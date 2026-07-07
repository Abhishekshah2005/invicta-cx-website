import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

import { Section } from "@/layouts/section";
import { Container } from "@/layouts/container";
import { Stat } from "@/components/stat";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/eyebrow";
import type { CaseStudyTeaser as CaseStudyTeaserData } from "@/types/templates";

/**
 * Embedded proof callout — a compact case-study card inside an Industry page.
 * Links through to the full story. Metrics reuse the count-up `Stat`. Distinct,
 * bordered surface so it reads as a "receipt" mid-page.
 */
export function CaseStudyTeaser({ data }: { data: CaseStudyTeaserData }) {
  return (
    <Section space="compact">
      <Container>
        <Reveal className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 md:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex max-w-xl flex-col gap-4">
              <Eyebrow>{data.eyebrow ?? "Case Study"}</Eyebrow>
              <p className="font-mono text-sm tracking-[0.14em] text-brand uppercase">
                {data.client}
              </p>
              <h2 className="font-display text-fluid-xl font-medium text-balance">{data.title}</h2>
              <p className="text-pretty text-muted-foreground">{data.summary}</p>
              <Link
                href={data.href}
                className="group mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-brand"
              >
                {data.linkLabel ?? "Read the full story"}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            {data.metrics && data.metrics.length > 0 ? (
              <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-1">
                {data.metrics.map((metric, index) => (
                  <Stat
                    key={index}
                    value={metric.value}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                    decimals={metric.decimals}
                    label={metric.label}
                  />
                ))}
              </div>
            ) : null}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
