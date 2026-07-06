import type { Metadata } from "next";

import { createMetadata } from "@/lib/seo";
import { SiteFooter, SiteHeader } from "@/layouts";
import {
  GamingCaseStudy,
  GamingChallenges,
  GamingCta,
  GamingFaq,
  GamingHero,
  GamingJourney,
  GamingOperations,
  GamingSupport,
  GamingTechnology,
  GamingTrust,
  GamingVip,
  GamingWhyChoose,
} from "@/sections/gaming";

export const metadata: Metadata = createMetadata({
  title: "Gaming & iGaming Player Support",
  description:
    "Invicta runs the end-to-end player support, trust & safety, and VIP operation for iGaming and sweepstakes platforms — human specialists, 24/7 global coverage, KYC and fraud defense. Proven on a 700+ title casino at a sustained 4.5★.",
});

/**
 * The flagship Gaming & iGaming industry page — the most cinematic page on the
 * site. Darker and deeper than the homepage, built to convince gaming operators
 * to trust Invicta with their entire player-support operation.
 */
export default function GamingPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="overflow-x-clip">
        <GamingHero />
        <GamingChallenges />
        <GamingWhyChoose />
        <GamingJourney />
        <GamingSupport />
        <GamingTrust />
        <GamingVip />
        <GamingOperations />
        <GamingTechnology />
        <GamingCaseStudy />
        <GamingFaq />
        <GamingCta />
      </main>
      <SiteFooter />
    </>
  );
}
