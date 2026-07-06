import { Container } from "@/layouts/container";
import { Eyebrow } from "@/components/eyebrow";
import { Reveal, TextReveal } from "@/components/reveal";
import { Breadcrumbs, type Crumb } from "./breadcrumbs";

interface PageHeroProps {
  crumbs: Crumb[];
  eyebrow?: string;
  title: string;
  lead?: string;
  children?: React.ReactNode;
}

/**
 * Shared page header — breadcrumb + eyebrow + masked title + lead. The editorial
 * top of every non-home page. Light register; the fixed header adapts.
 */
export function PageHero({ crumbs, eyebrow, title, lead, children }: PageHeroProps) {
  return (
    <section className="relative border-b border-border pt-28 pb-14 md:pt-36 md:pb-16">
      <Container className="flex flex-col gap-7">
        <Breadcrumbs items={crumbs} />
        <div className="flex max-w-4xl flex-col gap-5">
          {eyebrow ? (
            <Reveal>
              <Eyebrow>{eyebrow}</Eyebrow>
            </Reveal>
          ) : null}
          <TextReveal as="h1" start={null} className="font-display text-fluid-3xl font-medium">
            {title}
          </TextReveal>
          {lead ? (
            <Reveal>
              <p className="max-w-2xl text-lg text-pretty text-muted-foreground">{lead}</p>
            </Reveal>
          ) : null}
          {children ? <Reveal>{children}</Reveal> : null}
        </div>
      </Container>
    </section>
  );
}
