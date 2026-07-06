import Link from "next/link";

import { ROUTES } from "@/lib/routes";
import { Section } from "@/layouts/section";
import { Container } from "@/layouts/container";
import { Eyebrow } from "@/components/eyebrow";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/page";

export default function NotFound() {
  return (
    <PageShell>
      <Section className="pt-32 md:pt-40">
        <Container className="flex max-w-2xl flex-col items-start gap-6">
          <Eyebrow>404</Eyebrow>
          <h1 className="font-display text-fluid-3xl font-medium">This page went off-script.</h1>
          <p className="text-lg text-pretty text-muted-foreground">
            The page you requested could not be found, or it has moved. Let us get you back to a
            person who can help.
          </p>
          <div className="mt-2 flex flex-wrap gap-3">
            <Button asChild variant="brand" size="lg">
              <Link href={ROUTES.home}>Back to home</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={ROUTES.contact}>Talk to an Expert</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}
