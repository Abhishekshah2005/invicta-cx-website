import type { Metadata } from "next";

import { ROUTES, CASE_STUDIES } from "@/lib/routes";
import { createMetadata } from "@/lib/seo";
import { PagePlaceholder } from "@/components/page";

export const dynamicParams = false;

export function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({ slug: study.slug }));
}

function find(slug: string) {
  return CASE_STUDIES.find((c) => c.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = find(slug);
  if (!study) return {};
  return createMetadata({
    title: study.label,
    description: study.description,
    path: `${ROUTES.caseStudies}/${study.slug}`,
  });
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = find(slug);
  if (!study) throw new Error("Not found");

  return (
    <PagePlaceholder
      crumbs={[{ label: "Case Studies", href: ROUTES.caseStudies }, { label: study.label }]}
      eyebrow="Case Study"
      title={study.label}
      lead={study.description}
      parent={{ label: "Case Studies", href: ROUTES.caseStudies }}
    />
  );
}
