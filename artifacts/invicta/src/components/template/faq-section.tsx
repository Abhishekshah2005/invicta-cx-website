import { Section } from "@/layouts/section";
import { Container } from "@/layouts/container";
import { Faq } from "@/components/faq";
import { Intro } from "./parts";
import type { FaqEntry, SectionIntro } from "@/types/templates";

interface FaqSectionProps {
  intro: SectionIntro;
  items: FaqEntry[];
}

/**
 * FAQ section — the Radix accordion plus `FAQPage` structured data emitted from
 * the same source. Shared by Industry & Service templates. Doubles as objection
 * handling and as a rich-result surface for search.
 */
export function FaqSection({ intro, items }: FaqSectionProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <Section space="compact">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Intro intro={intro} />
        <div>
          <Faq items={items.map((item) => ({ question: item.question, answer: item.answer }))} />
        </div>
      </Container>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Section>
  );
}
