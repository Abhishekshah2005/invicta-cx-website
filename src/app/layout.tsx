import type { Metadata, Viewport } from "next";

import { WebVitals } from "@/components/analytics";
import { Loader } from "@/components/loader";
import { Noise } from "@/components/effects/noise";
import { SITE } from "@/constants/site";
import { fontVariables } from "@/lib/fonts";
import { createMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";
import { AppProviders } from "@/providers";

import "./globals.css";

export const metadata: Metadata = createMetadata();

export const viewport: Viewport = {
  themeColor: SITE.themeColor,
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // `suppressHydrationWarning`: Lenis and theme logic mutate <html> classes
    // on the client, which is expected and safe to ignore during hydration.
    <html lang="en" className={cn(fontVariables)} suppressHydrationWarning>
      <body className="bg-background font-sans text-foreground antialiased">
        <WebVitals />
        <Loader />
        {/* Whisper-quiet film grain over the whole page for depth. */}
        <Noise opacity={0.025} />
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
