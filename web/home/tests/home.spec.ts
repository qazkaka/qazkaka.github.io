import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
const existing = [
  "/monoklog/",
  "/monoklog/support.html",
  "/monoklog/PrivacyPolicy.html",
  "/comfy-pocket/",
  "/comfy-pocket/support.html",
  "/comfy-pocket/PrivacyPolicy.html",
];
test("homepage links, hydration, images and legacy pages work", async ({
  page,
  request,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "小さな心地よさ",
  );
  await expect(
    page.getByRole("link", { name: "ものクログを詳しく見る" }),
  ).toHaveAttribute("href", "/monoklog/");
  await expect(
    page.getByRole("link", { name: "Comfy Pocketを詳しく見る" }),
  ).toHaveAttribute("href", "/comfy-pocket/");
  await page.getByRole("button", { name: "ものクログ", exact: true }).click();
  await expect(
    page.getByRole("link", { name: "使い方・お問い合わせ" }),
  ).toHaveAttribute("href", "/monoklog/support.html");
  await page.getByRole("button", { name: "Comfy Pocket", exact: true }).click();
  await expect(
    page.getByRole("link", { name: "使い方・お問い合わせ" }),
  ).toHaveAttribute("href", "/comfy-pocket/support.html");
  await page.locator(".site-footer").scrollIntoViewIfNeeded();
  await expect
    .poll(() =>
      page
        .locator("img")
        .evaluateAll((imgs) =>
          imgs.every(
            (img) =>
              (img as HTMLImageElement).complete &&
              (img as HTMLImageElement).naturalWidth > 0,
          ),
        ),
    )
    .toBe(true);
  for (const path of existing)
    expect((await request.get(path)).status()).toBe(200);
  expect(errors).toEqual([]);
});
test("support is keyboard accessible", async ({ page }) => {
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "ものクログ", exact: true });
  await trigger.focus();
  await page.keyboard.press("Enter");
  await expect(trigger).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "使い方・お問い合わせ" }),
  ).toBeFocused();
});
for (const colorScheme of ["light", "dark"] as const)
  test(`axe checks ${colorScheme} with support expanded`, async ({ page }) => {
    await page.emulateMedia({ colorScheme });
    await page.goto("/");
    await page.getByRole("button", { name: "ものクログ", exact: true }).click();
    const result = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(result.violations).toEqual([]);
  });
test("narrow screens have no horizontal overflow", async ({ page }) => {
  for (const width of [320, 375, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
  }
});
test("page and app navigation remain usable without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:3100/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(
    page.getByRole("link", { name: "ものクログを詳しく見る" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Comfy Pocketのサポート", exact: true }),
  ).toBeVisible();
  await context.close();
});
