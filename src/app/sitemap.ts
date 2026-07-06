import type { MetadataRoute } from "next";

import { SITE } from "@/constants/site";
import { env } from "@/env";
import { allPaths } from "@/lib/routes";

const base = env.NEXT_PUBLIC_SITE_URL || SITE.url;

/** XML sitemap generated from the central route registry. */
export default function sitemap(): MetadataRoute.Sitemap {
  return allPaths().map((path) => ({
    url: new URL(path, base).toString(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : path.split("/").length > 2 ? 0.6 : 0.8,
  }));
}
