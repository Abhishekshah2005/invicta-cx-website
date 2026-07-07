/**
 * Registry of production industry-page content, keyed by slug. The
 * `/industries/[slug]` route reads from here — adding an industry means adding
 * a content file and one entry. Gaming is intentionally absent: it has a
 * bespoke, flagship page at `/industries/gaming`.
 */
import type { IndustryContent } from "@/types/templates";

import { fintech } from "./fintech";
import { healthcare } from "./healthcare";
import { recruitment } from "./recruitment";
import { saas } from "./saas";
import { technology } from "./technology";
import { travel } from "./travel";
import { ecommerce } from "./ecommerce";
import { professionalServices } from "./professional-services";

export const INDUSTRY_CONTENT: Record<string, IndustryContent> = {
  fintech,
  healthcare,
  recruitment,
  saas,
  technology,
  travel,
  ecommerce,
  "professional-services": professionalServices,
};

export const INDUSTRY_SLUGS = Object.keys(INDUSTRY_CONTENT);
