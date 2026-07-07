import { test } from "@playwright/test";

/** Responsive audit — key pages across the full supported viewport range. */
const PAGES: [string, string][] = [
  ["home", "/"],
  ["industries", "/industries"],
  ["industry-fintech", "/industries/fintech"],
  ["gaming", "/industries/gaming"],
  ["services", "/services"],
  ["service-cs", "/services/customer-support"],
  ["case-studies", "/case-studies"],
  ["insights", "/insights"],
  ["about", "/about"],
  ["contact", "/contact"],
];
const VIEWPORTS: [string, number, number][] = [
  ["320", 320, 720],
  ["390", 390, 844],
  ["768", 768, 1024],
  ["1024", 1024, 768],
  ["1440", 1440, 900],
  ["1728", 1728, 1117],
  ["1920", 1920, 1080],
  ["2560", 2560, 1440],
  ["3440", 3440, 1440],
];

for (const [name, path] of PAGES) {
  for (const [vn, width, height] of VIEWPORTS) {
    test(`${name}-${vn}`, async ({ browser }) => {
      const ctx = await browser.newContext({
        viewport: { width, height },
        reducedMotion: "reduce",
        deviceScaleFactor: 1,
      });
      const page = await ctx.newPage();
      await page.goto(path, { waitUntil: "load" });
      await page.evaluate(async () => {
        await new Promise<void>((resolve) => {
          let y = 0;
          const step = setInterval(() => {
            window.scrollTo(0, y);
            y += 800;
            if (y > document.body.scrollHeight + 1200) {
              clearInterval(step);
              resolve();
            }
          }, 22);
        });
        window.scrollTo(0, 0);
      });
      await page.waitForTimeout(650);
      await page.screenshot({ path: `e2e/audit/${name}-${vn}.png`, fullPage: true });
      await ctx.close();
    });
  }
}
