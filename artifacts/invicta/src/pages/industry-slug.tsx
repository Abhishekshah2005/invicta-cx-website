import { useParams, Redirect } from "wouter";

import { ROUTES, INDUSTRIES } from "@/lib/routes";
import { INDUSTRY_CONTENT, INDUSTRY_SLUGS } from "@/content/industries";
import { IndustryTemplate } from "@/components/template";

export default function IndustrySlugPage() {
  const { slug } = useParams<{ slug: string }>();
  if (!slug || !INDUSTRY_SLUGS.includes(slug as (typeof INDUSTRY_SLUGS)[number])) {
    return <Redirect to={ROUTES.industries} />;
  }
  const content = INDUSTRY_CONTENT[slug as (typeof INDUSTRY_SLUGS)[number]];
  if (!content) return <Redirect to={ROUTES.industries} />;

  const label = INDUSTRIES.find((i) => i.slug === slug)?.label ?? content.hero.title;

  return (
    <IndustryTemplate
      content={content}
      crumbs={[{ label: "Industries", href: ROUTES.industries }, { label }]}
    />
  );
}
