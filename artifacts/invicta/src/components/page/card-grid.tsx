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
  /** Hero image path shown on the front face of the flip card. */
  image?: string;
}

interface CardGridProps {
  items: CardItem[];
  className?: string;
  /** Columns at the `md` breakpoint. */
  columns?: 2 | 3;
}

/**
 * Editorial listing grid used by every index page (industries, services,
 * case studies, insights). Each card is a 3-D flip card — front shows
 * editorial photography with the title, back reveals the description and CTA.
 * Featured cards span full width with a landscape layout.
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
          {items.map((item) =>
            item.featured ? (
              <FeaturedFlipCard key={item.href} item={item} />
            ) : (
              <FlipCard key={item.href} item={item} />
            ),
          )}
        </RevealGroup>
      </Container>
    </Section>
  );
}

/** Standard flip card — portrait ratio, flips on hover. */
function FlipCard({ item }: { item: CardItem }) {
  return (
    <Link
      href={item.href}
      aria-label={item.label}
      className="flip-card group block h-72 sm:h-80"
      style={{ perspective: "1000px" }}
    >
      <div className="flip-card-inner relative h-full w-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* ── Front face ── */}
        <div className="flip-card-front absolute inset-0 rounded-xl overflow-hidden [backface-visibility:hidden]">
          {item.image ? (
            <img
              src={item.image}
              alt={item.label}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="h-full w-full bg-accent" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
            {item.meta && (
              <span className="font-mono text-[10px] tracking-[0.2em] text-brand uppercase">
                {item.meta}
              </span>
            )}
            <h2 className="mt-1 font-display text-xl font-medium text-white leading-snug">
              {item.label}
            </h2>
          </div>
          <div className="absolute top-4 right-4 opacity-60 text-white/70">
            <ArrowUpRight className="size-4 rotate-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* ── Back face ── */}
        <div className="flip-card-back absolute inset-0 rounded-xl overflow-hidden border border-brand/30 bg-card [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-between p-5 sm:p-6">
          <div className="flex flex-col gap-3">
            {item.meta && (
              <span className="font-mono text-[10px] tracking-[0.2em] text-brand uppercase">
                {item.meta}
              </span>
            )}
            <h2 className="font-display text-xl font-medium leading-snug">{item.label}</h2>
            <p className="text-sm text-pretty text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand">
            Learn more
            <ArrowUpRight className="size-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}

/** Featured (full-width) flip card — landscape hero that flips to reveal copy. */
function FeaturedFlipCard({ item }: { item: CardItem }) {
  return (
    <Link
      href={item.href}
      aria-label={item.label}
      className="flip-card group block md:col-span-full"
      style={{ perspective: "1400px" }}
    >
      <div
        className="flip-card-inner relative w-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
        style={{ height: "clamp(280px, 30vw, 420px)" }}
      >
        {/* ── Front face ── */}
        <div className="flip-card-front absolute inset-0 rounded-xl overflow-hidden [backface-visibility:hidden]">
          {item.image ? (
            <img
              src={item.image}
              alt={item.label}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="h-full w-full bg-accent" />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-end p-8 sm:p-10">
            <div className="flex flex-col gap-2 max-w-lg">
              {item.meta && (
                <span className="font-mono text-[10px] tracking-[0.2em] text-brand uppercase">
                  {item.meta}
                </span>
              )}
              <h2 className="font-display text-fluid-2xl font-medium text-white leading-tight">
                {item.label}
              </h2>
            </div>
          </div>
          <div className="absolute top-6 right-6 text-white/70">
            <ArrowUpRight className="size-5" />
          </div>
        </div>

        {/* ── Back face ── */}
        <div className="flip-card-back absolute inset-0 rounded-xl overflow-hidden border border-brand/30 bg-card [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center p-8 sm:p-10 md:p-14">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 w-full items-center">
            <div className="flex flex-col gap-4">
              {item.meta && (
                <span className="font-mono text-[10px] tracking-[0.2em] text-brand uppercase">
                  {item.meta}
                </span>
              )}
              <h2 className="font-display text-fluid-2xl font-medium leading-tight">{item.label}</h2>
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-lg text-pretty text-muted-foreground leading-relaxed">
                {item.description}
              </p>
              <span className="inline-flex items-center gap-2 text-base font-medium text-brand">
                Explore
                <ArrowUpRight className="size-5" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
