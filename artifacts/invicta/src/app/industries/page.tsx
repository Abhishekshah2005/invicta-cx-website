import type { Metadata } from "next";

import { ROUTES, INDUSTRIES, PAGE_META } from "@/lib/routes";
import { createMetadata } from "@/lib/seo";
import { PageShell, PageHero, SharedCta, CardGrid, type CardItem } from "@/components/page";

const meta = PAGE_META.industries!;

export const metadata: Metadata = createMetadata({
  title: meta.title,
  description: meta.description,
  path: ROUTES.industries,
});

const items: CardItem[] = INDUSTRIES.map((industry) => ({
  href: `${ROUTES.industries}/${industry.slug}`,
  label: industry.label,
  description: industry.description,
  meta: industry.slug === "gaming" ? "Flagship" : undefined,
  featured: industry.slug === "gaming",
  image: `/assets/industries/${industry.slug}/hero/hero.png`,
}));

export default function IndustriesPage() {
  return (
    <PageShell>
      <PageHero
        crumbs={[{ label: "Industries" }]}
        eyebrow="Where we work"
        title={meta.title}
        lead={meta.description}
      />
      <CardGrid items={items} />
      <SharedCta />
    </PageShell>
  );
}
