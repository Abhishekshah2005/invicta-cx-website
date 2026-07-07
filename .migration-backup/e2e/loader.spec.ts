import { test, expect } from "@playwright/test";

/** Console errors that are environmental noise, not app faults. */
const isBenign = (t: string) => /favicon|Failed to load resource|net::ERR|ResizeObserver/i.test(t);

test.describe("intro loader", () => {
  test("plays, hands off to the header, and reveals the page", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (m) => {
      if (m.type() === "error" && !isBenign(m.text())) errors.push(m.text());
    });
    page.on("pageerror", (e) => errors.push(String(e)));

    await page.goto("/", { waitUntil: "commit" });

    // The intro genuinely renders (the drawn mark appears), then completes and
    // unmounts — proving it played rather than being skipped.
    await expect(page.locator(".ld-markgroup")).toBeVisible({ timeout: 5000 });
    await expect(page.locator(".ld-stage")).toHaveCount(0, { timeout: 10000 });

    // The mark has handed off to the real header logo.
    await expect(page.locator("[data-header-logo] img").first()).toBeVisible();

    // Scroll lock is released.
    const overflow = await page.evaluate(() => getComputedStyle(document.documentElement).overflow);
    expect(overflow).not.toBe("hidden");

    expect(errors, errors.join("\n")).toEqual([]);
  });

  test("skips entirely under reduced motion", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");
    // No overlay, no scroll lock — the loader is bypassed.
    await expect(page.locator(".ld-stage")).toHaveCount(0, { timeout: 4000 });
    const overflow = await page.evaluate(() => getComputedStyle(document.documentElement).overflow);
    expect(overflow).not.toBe("hidden");
  });
});
