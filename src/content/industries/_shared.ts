/**
 * Helpers for building industry-page cross-links from the route registry, so
 * every "Relevant Services" and "Related Industries" card resolves to a real
 * page (labels + hrefs stay in sync with `@/lib/routes`). The descriptions are
 * industry-specific copy supplied at each call site.
 */
import { INDUSTRIES, ROUTES, SERVICES } from "@/lib/routes";
import type { RelatedItem } from "@/types/templates";

/** A "Relevant Services" card pointing at a real service page. */
export function serviceItem(slug: string, description: string, meta?: string): RelatedItem {
  const service = SERVICES.find((s) => s.slug === slug);
  return {
    href: `${ROUTES.services}/${slug}`,
    label: service?.label ?? slug,
    description,
    meta,
  };
}

/** A "Related Industries" card pointing at a real industry page. */
export function industryItem(slug: string, description: string, meta?: string): RelatedItem {
  const industry = INDUSTRIES.find((i) => i.slug === slug);
  return {
    href: `${ROUTES.industries}/${slug}`,
    label: industry?.label ?? slug,
    description,
    meta,
  };
}
