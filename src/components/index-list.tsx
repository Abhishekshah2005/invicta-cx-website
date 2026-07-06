"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { gsap, useGSAP } from "@/lib/gsap";
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
 * An editorial index — big type rows that dim their neighbours on hover while a
 * cursor-following image preview reveals the destination. A premium alternative
 * to a card grid; the preview is a desktop enhancement (absent on touch).
 */
export function IndexList({ kicker, heading, items }: IndexListProps) {
  const scope = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const xTo = useRef<((v: number) => void) | null>(null);
  const yTo = useRef<((v: number) => void) | null>(null);

  const [active, setActive] = useState<number | null>(null);
  const [preview, setPreview] = useState<IndexItem | null>(null);

  useGSAP(
    () => {
      if (!previewRef.current) return;
      xTo.current = gsap.quickTo(previewRef.current, "x", { duration: 0.5, ease: "power3.out" });
      yTo.current = gsap.quickTo(previewRef.current, "y", { duration: 0.5, ease: "power3.out" });
    },
    { scope },
  );

  const handleMove = (event: React.PointerEvent) => {
    xTo.current?.(event.clientX);
    yTo.current?.(event.clientY);
  };

  const handleEnter = (index: number) => {
    setActive(index);
    const item = items[index];
    if (item) setPreview(item);
  };

  return (
    <div ref={scope} onPointerMove={handleMove} className="relative">
      <h3 className="mb-2 font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
        {kicker}
      </h3>
      <p className="mb-8 font-display text-2xl font-medium md:text-3xl">{heading}</p>

      <ul className="border-t border-border" onPointerLeave={() => setActive(null)}>
        {items.map((item, index) => (
          <li key={item.name}>
            <Link
              href={item.href}
              onPointerEnter={() => handleEnter(index)}
              className={cn(
                "group flex items-center justify-between gap-4 border-b border-border py-5 transition-all duration-300 md:py-6",
                active !== null && active !== index ? "opacity-35" : "opacity-100",
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

      {/* Cursor-following preview (desktop only) */}
      <div
        ref={previewRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-40 hidden will-change-transform lg:block"
      >
        <div
          className={cn(
            "-translate-x-1/2 -translate-y-1/2 transition-opacity duration-300",
            active !== null ? "opacity-100" : "opacity-0",
          )}
        >
          {preview ? (
            <ImagePlaceholder
              tone="ink"
              ratio="4 / 3"
              label={preview.imageLabel}
              src={preview.image}
              sizes="288px"
              className="w-72"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
