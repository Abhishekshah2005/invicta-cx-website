import { Section } from "@/layouts/section";
import { Container } from "@/layouts/container";
import { Eyebrow } from "@/components/eyebrow";
import { Reveal, TextReveal } from "@/components/reveal";
import { IndexList } from "@/components/index-list";
import { INDEX } from "@/content/home";

/**
 * Chapter V — The Index. Industries and Services presented as an interactive
 * editorial index (cursor-following image previews), not card grids. Explore by
 * curiosity; every row routes to its dedicated page.
 */
export function TheIndex() {
  return (
    <Section id="explore">
      <Container className="flex flex-col gap-16">
        <Reveal className="flex flex-col gap-4">
          <Eyebrow>{INDEX.chapter}</Eyebrow>
          <TextReveal as="h2" className="max-w-[20ch] font-display text-fluid-2xl font-medium">
            Everything a relationship needs. Wherever trust is the business.
          </TextReveal>
        </Reveal>

        <div className="mx-auto grid max-w-[104rem] gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <IndexList
              kicker={INDEX.services.kicker}
              heading={INDEX.services.heading}
              items={INDEX.services.items}
            />
          </Reveal>
          <Reveal>
            <IndexList
              kicker={INDEX.industries.kicker}
              heading={INDEX.industries.heading}
              items={INDEX.industries.items}
            />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
