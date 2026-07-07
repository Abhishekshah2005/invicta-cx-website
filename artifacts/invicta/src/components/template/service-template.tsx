import { PageShell } from "@/components/page/page-shell";
import { SharedCta } from "@/components/page/shared-cta";
import type { Crumb } from "@/components/page/breadcrumbs";
import type { ServiceContent } from "@/types/templates";

import { CinematicHero } from "./cinematic-hero";
import { Overview } from "./overview";
import { ChallengeGrid } from "./challenge-grid";
import { ValueList } from "./value-list";
import { ProcessSteps } from "./process-steps";
import { TechStack } from "./tech-stack";
import { FeatureGrid } from "./feature-grid";
import { StatementBand } from "./statement-band";
import { RelatedGrid } from "./related-grid";
import { KpiBand } from "./kpi-band";
import { FaqSection } from "./faq-section";

/**
 * MASTER SERVICE TEMPLATE.
 * Section order (Phase 7 spec): Hero → Why this matters → Business Challenges →
 * How Invicta solves them → Workflow → Technology → Benefits → [statement] →
 * Industries using it → KPIs → FAQ → Related Services → CTA → Footer.
 *
 * Shares the Industry template's section library but arranges a distinct rhythm:
 * "Benefits" render as a check-grid (not the bordered ValueList used for the
 * approach), and an optional large-typography statement breaks the mid-scroll —
 * so a service page never reads like an industry page.
 */
export function ServiceTemplate({ content, crumbs }: { content: ServiceContent; crumbs: Crumb[] }) {
  return (
    <PageShell>
      <CinematicHero crumbs={crumbs} hero={content.hero} />
      <Overview intro={content.overview.intro} paragraphs={content.overview.paragraphs} />
      <ChallengeGrid intro={content.challenges.intro} items={content.challenges.items} />
      <ValueList intro={content.approach.intro} items={content.approach.points} />
      <ProcessSteps intro={content.workflow.intro} steps={content.workflow.steps} />
      <TechStack intro={content.technology.intro} groups={content.technology.groups} />
      <FeatureGrid intro={content.benefits.intro} items={content.benefits.items} />
      {content.statement ? (
        <StatementBand
          statement={content.statement.statement}
          context={content.statement.context}
        />
      ) : null}
      <RelatedGrid
        intro={content.industriesUsing.intro}
        items={content.industriesUsing.items}
        tone="plain"
      />
      <KpiBand intro={content.kpis.intro} metrics={content.kpis.metrics} />
      <FaqSection intro={{ title: "Frequently asked" }} items={content.faqs} />
      <RelatedGrid intro={content.related.intro} items={content.related.items} />
      <SharedCta {...content.cta} />
    </PageShell>
  );
}
