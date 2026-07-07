import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Container } from "@/layouts/container";
import { Section } from "@/layouts/section";
import { RevealGroup } from "@/components/reveal";

export interface CardItem {
  href: string;
  label: string;
  description: string;
  /** Optional small tag shown above the label (e.g. "Flagship"). */
  meta?: string;
  /** Render this card larger / highlighted at the top of the grid. */
  featured?: boolean;
}

interface CardGridProps {
  items: CardItem[];
  className?: string;
  /** Columns at the `md` breakpoint. */
  columns?: 2 | 3;
}

/**
 * Editorial listing grid used by every index page (industries, services,
 * case studies, insights). Each card links to its detail route and lifts on
 * hover; the group staggers in on scroll (GSAP). Featured cards span full width.
 */
export function CardGrid({ items, className, columns = 3 }: CardGridProps) {
  return (
    <Section space="compact">
      <Container>
        <RevealGroup
          className={cn(
            "grid grid-cols-1 gap-4",
            columns === 3
              ? "sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
              : "md:grid-cols-2 2xl:grid-cols-3",
            className,
          )}
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group relative flex flex-col justify-between gap-8 rounded-xl border border-border bg-card p-6 transition-colors hover:border-brand/50 hover:bg-accent/40 md:p-8",
                item.featured && "md:col-span-full md:flex-row md:items-end",
              )}
            >
              <div className="flex flex-col gap-3">
                {item.meta ? (
                  <span className="font-mono text-xs tracking-[0.18em] text-brand uppercase">
                    {item.meta}
                  </span>
                ) : null}
                <h2
                  className={cn(
                    "font-display font-medium",
                    item.featured ? "text-fluid-2xl" : "text-2xl",
                  )}
                >
                  {item.label}
                </h2>
                <p className="max-w-prose text-pretty text-muted-foreground">{item.description}</p>
              </div>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors group-hover:text-brand">
                <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
