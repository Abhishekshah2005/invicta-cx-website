/**
 * Master page-template system. Four composed templates every future page
 * inherits from, plus the reusable section library they share. Templates are
 * pure presentation driven by the content contracts in `@/types/templates`.
 */

// Templates
export { IndustryTemplate } from "./industry-template";
export { ServiceTemplate } from "./service-template";
export { CaseStudyTemplate } from "./case-study-template";
export { InsightTemplate } from "./insight-template";

// Shared section library
export { TemplateHero } from "./template-hero";
export { CinematicHero } from "./cinematic-hero";
export { Intro, Prose } from "./parts";
export { Overview } from "./overview";
export { ChallengeGrid } from "./challenge-grid";
export { ValueList } from "./value-list";
export { FeatureGrid } from "./feature-grid";
export { StatementBand } from "./statement-band";
export { ProcessSteps } from "./process-steps";
export { TechStack } from "./tech-stack";
export { KpiBand } from "./kpi-band";
export { FaqSection } from "./faq-section";
export { RelatedGrid } from "./related-grid";
export { CaseStudyTeaser } from "./case-study-teaser";
export { ClientCard } from "./client-card";
export { ObjectivesList } from "./objectives-list";
export { PullQuote } from "./pull-quote";
export { ArticleBody } from "./article-body";
export { AuthorCard } from "./author-card";
