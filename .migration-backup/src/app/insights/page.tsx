import type { Metadata } from "next";

import { ROUTES, INSIGHTS, PAGE_META } from "@/lib/routes";
import { createMetadata } from "@/lib/seo";
import { PageShell, PageHero, SharedCta, CardGrid, type CardItem } from "@/components/page";

const meta = PAGE_META.insights!;

export const metadata: Metadata = createMetadata({
  title: meta.title,
  description: meta.description,
  path: ROUTES.insights,
});

const items: CardItem[] = INSIGHTS.map((insight) => ({
  href: `${ROUTES.insights}/${insight.slug}`,
  label: insight.label,
  description: insight.description,
  meta: "Insight",
}));

export default function InsightsPage() {
  return (
    <PageShell>
      <PageHero
        crumbs={[{ label: "Insights" }]}
        eyebrow="Perspectives"
        title={meta.title}
        lead={meta.description}
      />
      <CardGrid items={items} columns={3} />
      <SharedCta />
    </PageShell>
  );
}
