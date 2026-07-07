import { useParams, Redirect } from "wouter";

import { ROUTES, CASE_STUDIES } from "@/lib/routes";
import { PagePlaceholder } from "@/components/page";

export default function CaseStudySlugPage() {
  const { slug } = useParams<{ slug: string }>();
  const study = CASE_STUDIES.find((c) => c.slug === slug);
  if (!study) return <Redirect to={ROUTES.caseStudies} />;

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
