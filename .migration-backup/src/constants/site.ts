/**
 * Global site configuration. Single source of truth for brand-level metadata
 * consumed by SEO helpers, layouts, and structured data.
 */
export const SITE = {
  name: "Invicta",
  shortName: "Invicta",
  description: "A premium, world-class experience.",
  /** Overridden by `NEXT_PUBLIC_SITE_URL` at runtime via `src/env.ts`. */
  url: "http://localhost:3000",
  locale: "en_US",
  themeColor: "#0a0a0a",
} as const;

export type SiteConfig = typeof SITE;
