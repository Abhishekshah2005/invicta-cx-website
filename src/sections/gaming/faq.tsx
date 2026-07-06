import { Section } from "@/layouts/section";
import { Container } from "@/layouts/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Faq } from "@/components/faq";
import { FAQ_ITEMS } from "@/content/gaming";

/** FAQ — objection handling for gaming operators. Light register. */
export function GamingFaq() {
  return (
    <Section>
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading eyebrow="Questions" title="What gaming operators ask us first." as="h2" />
        </Reveal>
        <Reveal>
          <Faq
            items={FAQ_ITEMS.map((item) => ({ question: item.question, answer: item.answer }))}
          />
        </Reveal>
      </Container>
    </Section>
  );
}
