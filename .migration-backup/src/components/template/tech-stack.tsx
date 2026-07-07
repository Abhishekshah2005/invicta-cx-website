import { Section } from "@/layouts/section";
import { Container } from "@/layouts/container";
import { Pill } from "@/components/pill";
import { RevealGroup } from "@/components/reveal";
import { Intro } from "./parts";
import type { SectionIntro, TechGroup } from "@/types/templates";

interface TechStackProps {
  intro: SectionIntro;
  groups: TechGroup[];
}

/**
 * Technology & tooling — clustered capability chips. Shared by Industry,
 * Service, and Case Study "Technology" sections. Integrations are described
 * generally (capabilities, categories) rather than as claimed partnerships.
 */
export function TechStack({ intro, groups }: TechStackProps) {
  return (
    <Section space="compact" className="bg-muted/40">
      <Container className="flex flex-col gap-12">
        <Intro intro={intro} />
        <RevealGroup className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group, index) => (
            <div key={index} className="flex flex-col gap-4 border-t border-border pt-5">
              <h3 className="font-mono text-xs tracking-[0.18em] text-foreground uppercase">
                {group.name}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Pill>{item}</Pill>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
