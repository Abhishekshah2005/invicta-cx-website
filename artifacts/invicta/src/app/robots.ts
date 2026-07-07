import type { MetadataRoute } from "next";

import { SITE } from "@/constants/site";
import { env } from "@/env";

const base = env.NEXT_PUBLIC_SITE_URL || SITE.url;

/** robots.txt directives + sitemap pointer. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("/sitemap.xml", base).toString(),
    host: base,
  };
}
