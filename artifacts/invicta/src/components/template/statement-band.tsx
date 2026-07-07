import { Section } from "@/layouts/section";
import { Container } from "@/layouts/container";
import { Reveal, TextReveal } from "@/components/reveal";

interface StatementBandProps {
  /** The large centred line — a single, confident sentence. */
  statement: string;
  /** Optional small context label beneath it. */
  context?: string;
}

/**
 * A large-typography moment — one centred serif sentence in the immersive
 * register. Breaks the scroll rhythm between denser sections and gives each page
 * a distinctive editorial beat. Masked reveal (GSAP) on the line.
 */
export function StatementBand({ statement, context }: StatementBandProps) {
  return (
    <Section space="compact" className="dark overflow-hidden bg-background text-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 noise-overlay opacity-[0.04]"
      />
      <Container className="relative flex flex-col items-center gap-6 text-center">
        <TextReveal
          as="p"
          splitBy="words"
          className="max-w-[20ch] font-display text-fluid-2xl font-medium text-balance"
        >
          {statement}
        </TextReveal>
        {context ? (
          <Reveal>
            <p className="max-w-xl font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
              {context}
            </p>
          </Reveal>
        ) : null}
      </Container>
    </Section>
  );
}
