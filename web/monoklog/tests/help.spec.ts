import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.use({ javaScriptEnabled: false });

test("support links to FAQ topics and opens answers with the keyboard", async ({
  page,
}) => {
  await page.goto("/monoklog/support.html");
  const topics = page.getByRole("navigation", { name: "サポートの項目" });
  await topics.getByRole("link", { name: "同期・データ移行" }).click();
  await expect(page).toHaveURL(/#faq-data$/);

  const question = page
    .locator("summary")
    .filter({ hasText: "機種変更のとき、データを移すには？" });
  const syncHelp = page.getByText(
    /iCloud同期を利用している場合は、新しい端末で/,
  );
  await expect(syncHelp).toBeHidden();
  await question.press("Enter");
  await expect(syncHelp).toBeVisible();

  await topics.getByRole("link", { name: "お問い合わせ", exact: true }).click();
  await expect(page).toHaveURL(/#contact$/);
  await expect(
    page.getByRole("link", { name: "メールで問い合わせる" }),
  ).toHaveAttribute("href", "mailto:qazappinfo@gmail.com");
  const adReport = await page
    .getByRole("link", { name: "メールで広告を報告する" })
    .getAttribute("href");
  expect(decodeURIComponent(adReport ?? "")).toContain(
    "subject=不適切な広告の報告",
  );
});

test("policy contents link to the original sections and to support", async ({
  page,
}) => {
  await page.goto("/monoklog/PrivacyPolicy.html");
  await expect(page.locator("time")).toHaveAttribute("datetime", "2026-11-23");
  const contents = page.getByRole("navigation", { name: "目次" });
  await expect(contents.getByRole("link")).toHaveCount(10);
  await contents.getByRole("link", { name: "8. 保存期間と削除" }).click();
  await expect(page).toHaveURL(/#retention$/);
  await expect(
    page.getByRole("heading", { name: "8. 保存期間と削除" }),
  ).toBeInViewport();
  await page
    .getByRole("link", { name: "ものクログのお問い合わせ窓口を開く" })
    .click();
  await expect(page).toHaveURL(/support\.html#contact$/);
});

test("invite fallback preserves the link and works without JavaScript", async ({
  page,
}) => {
  const response = await page.goto("/monoklog/join#MK1-test");
  expect(response?.ok()).toBe(true);
  await expect(page).toHaveURL(/#MK1-test$/);
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    "noindex",
  );
  await expect(page.locator('meta[name="referrer"]')).toHaveAttribute(
    "content",
    "no-referrer",
  );
  await expect(
    page.getByRole("link", { name: "App Storeで見る" }),
  ).toHaveAttribute("href", "https://apps.apple.com/app/id6833710021");
  await page
    .getByRole("link", { name: "グループのよくある質問を見る" })
    .click();
  await expect(page).toHaveURL(/support\.html#faq-group$/);
  await expect(
    page.getByRole("heading", { name: "グループ・招待" }),
  ).toBeInViewport();
});

test.describe("secondary page accessibility", () => {
  test.use({ javaScriptEnabled: true });

  for (const colorScheme of ["light", "dark"] as const) {
    test(`FAQ, policy and invitation in ${colorScheme} mode`, async ({
      page,
    }) => {
      await page.emulateMedia({ colorScheme });
      for (const path of ["support.html", "PrivacyPolicy.html", "join/"]) {
        const css = page.waitForResponse((response) =>
          response.url().endsWith("/monoklog/help.css"),
        );
        await page.goto(`/monoklog/${path}`);
        expect((await css).ok()).toBe(true);
        if (path === "support.html")
          await page.locator("summary").first().click();
        expect(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= window.innerWidth,
          ),
          path,
        ).toBe(true);
        const { violations } = await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
          .analyze();
        expect(
          violations.map(({ id, nodes }) => ({
            id,
            nodes: nodes.map(({ target }) => target),
          })),
          path,
        ).toEqual([]);
      }
    });
  }
});
