import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import {
  copy,
  devices,
  deviceNames,
  screens,
  sitePath,
  type Locale,
} from "../lib/content";
for (const locale of ["en", "ja"] as Locale[]) {
  const t = copy[locale];
  test(`${locale}: all device screenshots and next/previous controls work`, async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    await page.goto(sitePath(locale));
    await expect(page.locator("html")).toHaveAttribute("lang", locale);
    await expect(page).toHaveTitle(t.title);
    await expect(page.locator("h1")).toContainText(t.heading[0]);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      `https://qazkaka.github.io${sitePath(locale)}`,
    );
    for (const device of devices) {
      await page
        .getByRole("tab", { name: deviceNames[device], exact: true })
        .click();
      const panel = page.getByRole("tabpanel");
      for (let i = 0; i < screens[device].length; i++) {
        const screen = screens[device][i];
        await panel
          .getByRole("button", {
            name: new RegExp(
              screen.title[locale].replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
            ),
          })
          .click();
        await expect(panel.getByRole("heading", { level: 3 })).toHaveText(
          screen.title[locale],
        );
        await expect(panel.locator(".explorer-screenshot")).toHaveAttribute(
          "src",
          `/comfy-pocket/images/screens/${locale}/${screen.file}.jpg`,
        );
        await expect
          .poll(() =>
            panel
              .locator(".explorer-screenshot")
              .evaluate(
                (img: HTMLImageElement) => img.complete && img.naturalWidth > 0,
              ),
          )
          .toBe(true);
      }
      await page.getByRole("button", { name: t.next, exact: true }).click();
      await expect(panel.getByRole("heading", { level: 3 })).toHaveText(
        screens[device][0].title[locale],
      );
      await page.getByRole("button", { name: t.previous, exact: true }).click();
      await expect(panel.getByRole("heading", { level: 3 })).toHaveText(
        screens[device].at(-1)!.title[locale],
      );
    }
    expect(errors).toEqual([]);
  });
  test(`${locale}: keyboard tabs, FAQ and language links work`, async ({
    page,
  }) => {
    await page.goto(sitePath(locale));
    await page.getByRole("tab", { name: "iPhone", exact: true }).focus();
    await page.keyboard.press("ArrowRight");
    await expect(
      page.getByRole("tab", { name: "iPad", exact: true }),
    ).toBeFocused();
    await expect(
      page.getByRole("tab", { name: "iPad", exact: true }),
    ).toHaveAttribute("aria-selected", "true");
    const faq = page.getByRole("button", { name: t.faq[0].question });
    await faq.focus();
    await page.keyboard.press("Enter");
    await expect(faq).toHaveAttribute("aria-expanded", "true");
    await expect(
      page.getByText(t.faq[0].answer, { exact: true }),
    ).toBeVisible();
    await faq.click();
    await expect(faq).toHaveAttribute("aria-expanded", "false");
    await page
      .getByRole("navigation", { name: t.language })
      .getByRole("link")
      .click();
    await expect(page.locator("html")).toHaveAttribute(
      "lang",
      locale === "ja" ? "en" : "ja",
    );
  });
  test(`${locale}: mobile menu closes on navigation and Escape`, async ({
    page,
    isMobile,
  }) => {
    test.skip(!isMobile);
    await page.goto(sitePath(locale));
    const menu = page.getByRole("button", { name: t.menu, exact: true });
    await menu.click();
    const navigation = page.locator("#mobile-navigation");
    await expect(navigation).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(navigation).toBeHidden();
    await expect(menu).toBeFocused();
    await menu.click();
    await navigation.getByRole("link", { name: t.nav[0] }).click();
    await expect(navigation).toBeHidden();
    await expect(page).toHaveURL(/#features$/);
  });
  test(`${locale}: narrow layouts stay within the viewport`, async ({
    page,
  }) => {
    await page.goto(sitePath(locale));
    for (const width of [320, 375, 768, 1024, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      await expect
        .poll(() =>
          page.evaluate(
            () => document.documentElement.scrollWidth <= window.innerWidth + 1,
          ),
        )
        .toBe(true);
    }
  });
  test(`${locale}: light and dark pages pass automated accessibility checks`, async ({
    page,
  }) => {
    for (const colorScheme of ["light", "dark"] as const) {
      await page.emulateMedia({ colorScheme });
      await page.goto(sitePath(locale));
      await page.getByRole("button", { name: t.faq[0].question }).click();
      const result = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();
      expect(result.violations).toEqual([]);
    }
  });
  test(`${locale}: text and legacy help remain available without JavaScript`, async ({
    browser,
  }) => {
    const context = await browser.newContext({ javaScriptEnabled: false });
    const page = await context.newPage();
    await page.goto(`http://127.0.0.1:3011${sitePath(locale)}`);
    await expect(page.locator("h1")).toContainText(t.heading[0]);
    await expect(
      page.getByText(t.features[0].text, { exact: true }),
    ).toBeVisible();
    await expect(
      page.locator("noscript").getByText(t.faq[0].answer, { exact: true }),
    ).toBeVisible();
    for (const file of ["support.html", "PrivacyPolicy.html"]) {
      const response = await page.goto(
        `http://127.0.0.1:3011${sitePath(locale)}${file}`,
      );
      expect(response?.status()).toBe(200);
      await expect(page.locator("h1")).not.toBeEmpty();
    }
    await context.close();
  });
}
