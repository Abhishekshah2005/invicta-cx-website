import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { SITE } from "@/constants/site";
import { env } from "@/env";

export interface Crumb {
  label: string;
  /** Omit on the current (last) crumb. */
  href?: string;
}

const base = env.NEXT_PUBLIC_SITE_URL || SITE.url;

/**
 * Breadcrumb trail with BreadcrumbList structured data for SEO. The final crumb
 * is the current page (unlinked, `aria-current`).
 */
export function Breadcrumbs({ items, className }: { items: Crumb[]; className?: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.label,
      ...(crumb.href ? { item: new URL(crumb.href, base).toString() } : {}),
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className={cn("w-full", className)}>
      <ol className="flex flex-wrap items-center gap-1.5 font-mono text-xs tracking-wide text-muted-foreground">
        {items.map((crumb, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={`${crumb.label}-${i}`} className="flex items-center gap-1.5">
              {crumb.href && !isLast ? (
                <Link href={crumb.href} className="transition-colors hover:text-foreground">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-foreground/80" aria-current="page">
                  {crumb.label}
                </span>
              )}
              {!isLast && <ChevronRight className="size-3 text-muted-foreground/40" aria-hidden />}
            </li>
          );
        })}
      </ol>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </nav>
  );
}
