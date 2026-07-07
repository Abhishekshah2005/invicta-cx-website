import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ROUTES, SERVICES } from "@/lib/routes";
import { createMetadata } from "@/lib/seo";
import { SERVICE_CONTENT, SERVICE_SLUGS } from "@/content/services";
import { ServiceTemplate } from "@/components/template";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = SERVICE_CONTENT[slug];
  if (!content) return {};
  const label = SERVICES.find((s) => s.slug === slug)?.label ?? "Service";
  return createMetadata({
    title: label,
    description: content.hero.lead,
    path: `${ROUTES.services}/${slug}`,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const content = SERVICE_CONTENT[slug];
  if (!content) notFound();

  const label = SERVICES.find((s) => s.slug === slug)?.label ?? content.hero.title;

  return (
    <ServiceTemplate
      content={content}
      crumbs={[{ label: "Services", href: ROUTES.services }, { label }]}
    />
  );
}
