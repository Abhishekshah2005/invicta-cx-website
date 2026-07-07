import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Section } from "@/layouts/section";
import { Container } from "@/layouts/container";
import { RevealGroup } from "@/components/reveal";
import { Intro } from "./parts";
import type { RelatedItem, SectionIntro } from "@/types/templates";

interface RelatedGridProps {
  intro: SectionIntro;
  items: RelatedItem[];
  columns?: 2 | 3;
  /** Section background — "muted" tints, "plain" stays on the base canvas.
   *  Used to keep adjacent sections from sharing a register. */
  tone?: "muted" | "plain";
}

/**
 * Cross-linking grid — "Related Industries / Services / Articles". Keeps a page
 * inside the journey by pointing to its neighbours. Cards match the index-page
 * card language (hover warm-up + arrow) and stagger in on scroll.
 */
export function RelatedGrid({ intro, items, columns = 3, tone = "muted" }: RelatedGridProps) {
  return (
    <Section space="compact" className={tone === "muted" ? "bg-muted/40" : undefined}>
      <Container className="flex flex-col gap-12">
        <Intro intro={intro} />
        <RevealGroup
          className={
            columns === 3 ? "grid gap-4 sm:grid-cols-2 lg:grid-cols-3" : "grid gap-4 md:grid-cols-2"
          }
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col justify-between gap-8 rounded-xl border border-border bg-card p-6 transition-colors hover:border-brand/50 hover:bg-accent/40 md:p-7"
            >
              <div className="flex flex-col gap-2.5">
                {item.meta ? (
                  <span className="font-mono text-xs tracking-[0.18em] text-brand uppercase">
                    {item.meta}
                  </span>
                ) : null}
                <h3 className="font-display text-xl font-medium">{item.label}</h3>
                <p className="text-sm text-pretty text-muted-foreground">{item.description}</p>
              </div>
              <ArrowUpRight className="size-5 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand" />
            </Link>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
