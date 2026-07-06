import { Section } from "@/layouts/section";
import { Container } from "@/layouts/container";
import { Reveal, TextReveal } from "@/components/reveal";
import { Eyebrow } from "@/components/eyebrow";
import type { CaseStudyContent } from "@/types/templates";

/**
 * Case Study "Lessons Learned" — a large serif pull-quote with a crimson rule.
 * A reflective beat between the (dark) results band and the closing CTA; the
 * masked reveal gives the words weight.
 */
export function PullQuote({ lessons }: { lessons: CaseStudyContent["lessons"] }) {
  return (
    <Section space="compact">
      <Container>
        <figure className="mx-auto flex max-w-4xl flex-col gap-6 border-l-2 border-brand pl-6 md:pl-10">
          <Reveal>
            <Eyebrow>{lessons.intro.eyebrow ?? "Lessons Learned"}</Eyebrow>
          </Reveal>
          <blockquote>
            <TextReveal as="p" className="font-display text-fluid-2xl font-medium text-balance">
              {lessons.quote}
            </TextReveal>
          </blockquote>
          {lessons.attribution ? (
            <Reveal>
              <figcaption className="font-mono text-sm tracking-wide text-muted-foreground">
                — {lessons.attribution}
              </figcaption>
            </Reveal>
          ) : null}
        </figure>
      </Container>
    </Section>
  );
}
