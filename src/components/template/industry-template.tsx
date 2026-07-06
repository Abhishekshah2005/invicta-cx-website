import { PageShell } from "@/components/page/page-shell";
import { SharedCta } from "@/components/page/shared-cta";
import type { Crumb } from "@/components/page/breadcrumbs";
import type { IndustryContent } from "@/types/templates";

import { CinematicHero } from "./cinematic-hero";
import { Overview } from "./overview";
import { ChallengeGrid } from "./challenge-grid";
import { ValueList } from "./value-list";
import { RelatedGrid } from "./related-grid";
import { TechStack } from "./tech-stack";
import { ProcessSteps } from "./process-steps";
import { KpiBand } from "./kpi-band";
import { CaseStudyTeaser } from "./case-study-teaser";
import { FaqSection } from "./faq-section";

/**
 * MASTER INDUSTRY TEMPLATE.
 * Section order: Hero → Overview → Challenges → Why Invicta → Services Used →
 * Technology → Process → KPIs → Case Study → FAQ → Related Industries → CTA →
 * Footer. Background register alternates (light / muted / dark) so the page has
 * rhythm; motion is shared across every section.
 */
export function IndustryTemplate({
  content,
  crumbs,
}: {
  content: IndustryContent;
  crumbs: Crumb[];
}) {
  return (
    <PageShell>
      <CinematicHero crumbs={crumbs} hero={content.hero} />
      <Overview intro={content.overview.intro} paragraphs={content.overview.paragraphs} />
      <ChallengeGrid intro={content.challenges.intro} items={content.challenges.items} />
      <ValueList intro={content.whyInvicta.intro} items={content.whyInvicta.points} />
      <RelatedGrid
        intro={content.servicesUsed.intro}
        items={content.servicesUsed.items}
        tone="plain"
      />
      <TechStack intro={content.technology.intro} groups={content.technology.groups} />
      <ProcessSteps intro={content.process.intro} steps={content.process.steps} />
      <KpiBand intro={content.kpis.intro} metrics={content.kpis.metrics} />
      {content.caseStudy ? <CaseStudyTeaser data={content.caseStudy} /> : null}
      <FaqSection intro={{ title: "Frequently asked" }} items={content.faqs} />
      <RelatedGrid intro={content.related.intro} items={content.related.items} />
      <SharedCta {...content.cta} />
    </PageShell>
  );
}
