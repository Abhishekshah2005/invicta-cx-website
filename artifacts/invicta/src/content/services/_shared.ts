/**
 * Cross-link helpers for service pages — build "Industries using this service"
 * and "Related Services" cards from the route registry so every link resolves.
 * Descriptions are service-specific copy supplied at each call site.
 */
import { INDUSTRIES, ROUTES, SERVICES } from "@/lib/routes";
import type { RelatedItem } from "@/types/templates";

export function industryItem(slug: string, description: string, meta?: string): RelatedItem {
  const industry = INDUSTRIES.find((i) => i.slug === slug);
  return {
    href: `${ROUTES.industries}/${slug}`,
    label: industry?.label ?? slug,
    description,
    meta,
  };
}

export function serviceItem(slug: string, description: string, meta?: string): RelatedItem {
  const service = SERVICES.find((s) => s.slug === slug);
  return { href: `${ROUTES.services}/${slug}`, label: service?.label ?? slug, description, meta };
}
