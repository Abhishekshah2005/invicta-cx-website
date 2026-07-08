"use client";

import { useState } from "react";
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { ImagePlaceholder } from "@/components/media/image-placeholder";

export interface IndexItem {
  name: string;
  meta: string;
  href: string;
  imageLabel: string;
  /** Real preview photo (public path). Falls back to the branded panel. */
  image?: string;
}

interface IndexListProps {
  kicker: string;
  heading: string;
  items: readonly IndexItem[];
}

/**
 * An editorial index — big type rows next to an always-visible image panel.
 * The panel defaults to the first item's photo and swaps on hover, so the
 * layout never shows a blank gap while scrolling (a desktop enhancement;
 * the image panel is hidden on touch/mobile where hover doesn't apply).
 */
export function IndexList({ kicker, heading, items }: IndexListProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = items[activeIndex] ?? items[0];

  return (
    <div className="grid gap-8 lg:grid-cols-[3fr_2fr] lg:items-start lg:gap-8">
      <div>
        <h3 className="mb-2 font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
          {kicker}
        </h3>
        <p className="mb-8 font-display text-2xl font-medium md:text-3xl">{heading}</p>

        <ul className="border-t border-border">
          {items.map((item, index) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onPointerEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                className={cn(
                  "group flex items-center justify-between gap-4 border-b border-border py-5 transition-all duration-300 md:py-6",
                  activeIndex === index ? "opacity-100" : "opacity-70 hover:opacity-100",
                )}
              >
                <span className="flex items-baseline gap-4">
                  <span className="font-display text-2xl font-medium transition-transform duration-300 group-hover:translate-x-2 md:text-4xl">
                    {item.name}
                  </span>
                </span>
                <span className="flex items-center gap-4">
                  <span className="hidden font-mono text-xs tracking-wider text-muted-foreground uppercase sm:inline">
                    {item.meta}
                  </span>
                  <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-brand" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Always-visible image panel (desktop only) */}
      <div className="sticky top-24 hidden lg:block">
        <Link href={current.href} aria-hidden={false} tabIndex={-1}>
          <ImagePlaceholder
            key={current.name}
            tone="ink"
            ratio="4 / 3"
            label={current.imageLabel}
            src={current.image}
            sizes="360px"
            className="w-full animate-in fade-in duration-300"
          />
        </Link>
      </div>
    </div>
  );
}
