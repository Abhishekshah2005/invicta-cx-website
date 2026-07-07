import { SiteFooter, SiteHeader } from "@/layouts";

/**
 * Standard page chrome: fixed header, main landmark (with horizontal-overflow
 * clip for cinematic decorative layers), and footer. Wrap every page's content
 * in this so header/footer/routing stay consistent.
 */
export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main id="main" className="overflow-x-clip">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
