import type { Metadata } from "next";

import { createMetadata } from "@/lib/seo";
import { SiteHeader, SiteFooter } from "@/layouts";
import {
  ColdOpen,
  TheArena,
  TheIndex,
  TheInvitation,
  TheLayer,
  TheMoment,
  ThePeople,
  TheProof,
  TheWorld,
} from "@/sections";

export const metadata: Metadata = createMetadata({
  title: "Invicta — The Human Layer Behind Customer Experience",
  description:
    "Invicta is a human customer experience partner — not a BPO. Elite, trained specialists who become an extension of your brand, protect every relationship, and turn conversations into loyalty. Proven in high-stakes iGaming.",
});

/**
 * The homepage — a documentary in chapters ("One Conversation"). Each chapter is
 * a distinct register connected by meaning, not a repeating section rhythm.
 */
export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        {/* TEMP-AUDIT-REORDER */}
        <TheProof />
        <ThePeople />
        <TheArena />
        <ColdOpen />
        <TheMoment />
        <TheLayer />
        <TheWorld />
        <TheIndex />
        <TheInvitation />
      </main>
      <SiteFooter />
    </>
  );
}
