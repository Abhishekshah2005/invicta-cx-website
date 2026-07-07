import { useParams, Redirect } from "wouter";

import { ROUTES, INSIGHTS } from "@/lib/routes";
import { PagePlaceholder } from "@/components/page";

export default function InsightSlugPage() {
  const { slug } = useParams<{ slug: string }>();
  const insight = INSIGHTS.find((i) => i.slug === slug);
  if (!insight) return <Redirect to={ROUTES.insights} />;

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
