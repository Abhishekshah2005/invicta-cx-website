import { PageShell } from "@/components/page/page-shell";
import { SharedCta } from "@/components/page/shared-cta";
import type { Crumb } from "@/components/page/breadcrumbs";
import type { CaseStudyContent } from "@/types/templates";

import { TemplateHero } from "./template-hero";
import { ClientCard } from "./client-card";
import { Overview } from "./overview";
import { ObjectivesList } from "./objectives-list";
import { ProcessSteps } from "./process-steps";
import { TechStack } from "./tech-stack";
import { KpiBand } from "./kpi-band";
import { PullQuote } from "./pull-quote";
import { RelatedGrid } from "./related-grid";

/**
 * MASTER CASE STUDY TEMPLATE.
 * Section order: Hero → Client → Challenge → Objectives → Discovery →
 * Implementation → Technology → Results → Lessons Learned → Related Services →
 * CTA → Footer. "Challenge" and "Discovery" reuse the editorial Overview split;
 * "Implementation" reuses the shared process timeline; "Results" the KPI band.
 */
export function CaseStudyTemplate({
  content,
  crumbs,
}: {
  content: CaseStudyContent;
  crumbs: Crumb[];
}) {
  return (
    <PageShell>
      <TemplateHero crumbs={crumbs} hero={content.hero} />
      <ClientCard client={content.client} />
      <Overview intro={content.challenge.intro} paragraphs={content.challenge.paragraphs} />
      <ObjectivesList intro={content.objectives.intro} items={content.objectives.items} />
      <Overview intro={content.discovery.intro} paragraphs={content.discovery.paragraphs} />
      <ProcessSteps intro={content.implementation.intro} steps={content.implementation.steps} />
      <TechStack intro={content.technology.intro} groups={content.technology.groups} />
      <KpiBand intro={content.results.intro} metrics={content.results.metrics} />
      <PullQuote lessons={content.lessons} />
      <RelatedGrid intro={content.relatedServices.intro} items={content.relatedServices.items} />
      <SharedCta {...content.cta} />
    </PageShell>
  );
}
