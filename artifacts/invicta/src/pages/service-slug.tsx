import { useParams, Redirect } from "wouter";

import { ROUTES, SERVICES } from "@/lib/routes";
import { SERVICE_CONTENT, SERVICE_SLUGS } from "@/content/services";
import { ServiceTemplate } from "@/components/template";

export default function ServiceSlugPage() {
  const { slug } = useParams<{ slug: string }>();
  if (!slug || !SERVICE_SLUGS.includes(slug as (typeof SERVICE_SLUGS)[number])) {
    return <Redirect to={ROUTES.services} />;
  }
  const content = SERVICE_CONTENT[slug as (typeof SERVICE_SLUGS)[number]];
  if (!content) return <Redirect to={ROUTES.services} />;

  const label = SERVICES.find((s) => s.slug === slug)?.label ?? content.hero.title;

  return (
    <ServiceTemplate
      content={content}
      crumbs={[{ label: "Services", href: ROUTES.services }, { label }]}
    />
  );
}
