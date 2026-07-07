import type { Metadata } from "next";

import { SITE } from "@/constants/site";
import { env } from "@/env";

const baseUrl = env.NEXT_PUBLIC_SITE_URL || SITE.url;

type CreateMetadataOptions = Metadata & {
  /** Absolute path (e.g. "/services/kyc"). Sets the canonical URL + og:url. */
  path?: string;
};

/**
 * Build a complete, SEO-ready `Metadata` object with sensible OpenGraph /
 * Twitter defaults and a canonical URL. Pass per-page overrides; anything
 * omitted inherits the site-wide defaults. Nested `openGraph` / `twitter` /
 * `robots` overrides are shallow-merged onto the defaults.
 */
export function createMetadata(overrides: CreateMetadataOptions = {}): Metadata {
  const { title, description, openGraph, twitter, robots, alternates, path, ...rest } = overrides;

  const resolvedTitle = typeof title === "string" ? title : SITE.name;
  const resolvedDescription = typeof description === "string" ? description : SITE.description;
  const canonical = path ? new URL(path, baseUrl).toString() : baseUrl;

  return {
    metadataBase: new URL(baseUrl),
    title: title ?? {
      default: SITE.name,
      template: `%s · ${SITE.name}`,
    },
    description: description ?? SITE.description,
    applicationName: SITE.name,
    alternates: { canonical, ...alternates },
    openGraph: {
      type: "website",
      locale: SITE.locale,
      url: canonical,
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
