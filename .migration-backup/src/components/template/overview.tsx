import { Section } from "@/layouts/section";
import { Container } from "@/layouts/container";
import { Intro, Prose } from "./parts";
import type { SectionIntro } from "@/types/templates";

interface OverviewProps {
  intro: SectionIntro;
  paragraphs: string[];
}

/**
 * Editorial overview — a split intro/body. Used for Industry & Service
 * "Overview", and adaptable to any lead-in prose section. The intro column
 * anchors on the left; the body reads on the right at a comfortable measure.
 */
export function Overview({ intro, paragraphs }: OverviewProps) {
  return (
    <Section space="compact">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Intro intro={intro} />
          <Prose paragraphs={paragraphs} className="max-w-none" />
        </div>
      </Container>
    </Section>
  );
}
