import type { Metadata } from "next";

import { ROUTES, INSIGHTS } from "@/lib/routes";
import { createMetadata } from "@/lib/seo";
import { PagePlaceholder } from "@/components/page";

export const dynamicParams = false;

export function generateStaticParams() {
  return INSIGHTS.map((insight) => ({ slug: insight.slug }));
}

function find(slug: string) {
  return INSIGHTS.find((i) => i.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const insight = find(slug);
  if (!insight) return {};
  return createMetadata({
    title: insight.label,
    description: insight.description,
    path: `${ROUTES.insights}/${insight.slug}`,
  });
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = find(slug);
  if (!insight) throw new Error("Not found");

  return (
    <PagePlaceholder
      crumbs={[{ label: "Insights", href: ROUTES.insights }, { label: insight.label }]}
      eyebrow="Insight"
      title={insight.label}
      lead={insight.description}
      parent={{ label: "Insights", href: ROUTES.insights }}
    />
  );
}
