import type { Metadata } from "next";

import { SITE } from "@/constants/site";
import { env } from "@/env";

const baseUrl = env.NEXT_PUBLIC_SITE_URL || SITE.url;

/**
 * Build a complete, SEO-ready `Metadata` object with sensible OpenGraph /
 * Twitter defaults. Pass per-page overrides; anything omitted inherits the
 * site-wide defaults. Nested `openGraph` / `twitter` / `robots` overrides are
 * shallow-merged onto the defaults rather than replacing them.
 */
export function createMetadata(overrides: Metadata = {}): Metadata {
  const { title, description, openGraph, twitter, robots, ...rest } = overrides;

  const resolvedTitle = typeof title === "string" ? title : SITE.name;
  const resolvedDescription = typeof description === "string" ? description : SITE.description;

  return {
    metadataBase: new URL(baseUrl),
    title: title ?? {
      default: SITE.name,
      template: `%s · ${SITE.name}`,
    },
    description: description ?? SITE.description,
    applicationName: SITE.name,
    openGraph: {
      type: "website",
      locale: SITE.locale,
      url: baseUrl,
      siteName: SITE.name,
      title: resolvedTitle,
      description: resolvedDescription,
      ...openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription,
      ...twitter,
    },
    robots: {
      index: true,
      follow: true,
      ...(robots && typeof robots === "object" ? robots : {}),
    },
    ...rest,
  };
}
