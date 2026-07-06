import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ROUTES, INDUSTRIES } from "@/lib/routes";
import { createMetadata } from "@/lib/seo";
import { INDUSTRY_CONTENT, INDUSTRY_SLUGS } from "@/content/industries";
import { IndustryTemplate } from "@/components/template";

// `/industries/gaming` is served by its own bespoke flagship route, so it is
// absent from `INDUSTRY_CONTENT` — the static segment takes precedence anyway.
export const dynamicParams = false;

export function generateStaticParams() {
  return INDUSTRY_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = INDUSTRY_CONTENT[slug];
  if (!content) return {};
  const label = INDUSTRIES.find((i) => i.slug === slug)?.label ?? "Industry";
  return createMetadata({
    title: `${label} Customer Experience`,
    description: content.hero.lead,
    path: `${ROUTES.industries}/${slug}`,
  });
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const content = INDUSTRY_CONTENT[slug];
  if (!content) notFound();

  const label = INDUSTRIES.find((i) => i.slug === slug)?.label ?? content.hero.title;

  return (
    <IndustryTemplate
      content={content}
      crumbs={[{ label: "Industries", href: ROUTES.industries }, { label }]}
    />
  );
}
