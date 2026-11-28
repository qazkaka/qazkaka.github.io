import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("static page hydrates without errors and every image loads", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  await page.goto("/monoklog/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "好きなものと、",
  );
  await page.getByRole("tab", { name: "欲しい物", exact: true }).click();
  await expect(page.getByRole("tabpanel")).toContainText(
    "次に迎えたいものも、",
  );
  const images = page.locator("img");
  for (const img of await images.all()) {
    await img.scrollIntoViewIfNeeded();
    await expect
      .poll(() =>
        img.evaluate(
          (el) =>
            (el as HTMLImageElement).complete &&
            (el as HTMLImageElement).naturalWidth > 0,
        ),
      )
      .toBe(true);
  }
  expect(errors).toEqual([]);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
});

test("screen explorer supports arrow keys and every feature", async ({
  page,
}) => {
  await page.goto("/monoklog/");
  const first = page.getByRole("tab", { name: "持ち物", exact: true });
  await first.focus();
  await first.press("ArrowRight");
  await expect(
    page.getByRole("tab", { name: "使った記録", exact: true }),
  ).toBeFocused();
  await expect(page.getByRole("tabpanel")).toContainText("思い出になる。");
  const tabs = page
    .getByRole("tablist", { name: "紹介するアプリの画面" })
    .getByRole("tab");
  for (const tab of await tabs.all()) {
    await tab.click();
    await expect(tab).toHaveAttribute("aria-selected", "true");
    await expect(page.getByRole("tabpanel")).toBeVisible();
    await expect(page.getByRole("tabpanel").getByRole("img")).toHaveAttribute(
      "alt",
      /.+/,
    );
  }
});

test("sample statistics change with the period and remain accessible", async ({
  page,
}) => {
  await page.goto("/monoklog/");
  const chart = page.getByRole("group", { name: "サンプルグラフの期間" });
  await expect(
    page.getByRole("table", { name: "1週間の使用回数（サンプル）" }),
  ).toHaveCount(1);
  await chart.getByRole("button", { name: "月", exact: true }).click();
  await expect(
    chart.getByRole("button", { name: "月", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
  await expect(
    page.getByRole("table", { name: "1か月の使用回数（サンプル）" }),
  ).toContainText("32回");
  await expect(page.locator(".chart-total")).toContainText("94");
});

test("FAQ opens and closes using the keyboard", async ({ page }) => {
  await page.goto("/monoklog/");
  const question = page.getByRole("button", {
    name: "Proは月額ですか？",
    exact: true,
  });
  await question.focus();
  await question.press("Enter");
  await expect(question).toHaveAttribute("aria-expanded", "true");
  await expect(
    page.getByText("Proは一度の購入で使える買い切りです。", { exact: false }),
  ).toBeVisible();
  await question.press("Enter");
  await expect(question).toHaveAttribute("aria-expanded", "false");
});

test("navigation, legacy deep links and store URLs work", async ({
  page,
  request,
  isMobile,
}) => {
  await page.goto("/monoklog/");
  if (isMobile) {
    const toggle = page.getByRole("button", {
      name: /メニューを(開く|閉じる)/,
    });
    await toggle.click();
    await expect(toggle).toHaveAttribute("aria-expanded", "true");
    await page
      .getByRole("navigation", { name: "モバイルナビゲーション" })
      .getByRole("link", { name: "無料とPro" })
      .click();
    await expect(
      page.getByRole("navigation", { name: "モバイルナビゲーション" }),
    ).toBeHidden();
    await expect(page).toHaveURL(/#plans$/);
  } else {
    await page
      .getByRole("navigation", { name: "メインナビゲーション" })
      .getByRole("link", { name: "無料とPro" })
      .click();
    await expect(page).toHaveURL(/#plans$/);
  }
  for (const path of [
    "support.html",
    "PrivacyPolicy.html",
    "join/",
    "images/ogp.png",
    "app-ads.txt",
  ]) {
    const response = await request.get(`/monoklog/${path}`);
    expect(response.ok(), path).toBe(true);
  }
  for (const id of ["groups", "sync", "usage", "widget", "care", "share"])
    await expect(page.locator(`#${id}`)).toHaveCount(1);
  for (const link of await page.locator('a[href*="apps.apple.com"]').all())
    expect(await link.getAttribute("href")).toBe(
      "https://apps.apple.com/jp/app/id6833710021",
    );
});

for (const colorScheme of ["light", "dark"] as const) {
  test(`WCAG automated checks pass in ${colorScheme} mode, including open controls`, async ({
    page,
  }) => {
    await page.emulateMedia({ colorScheme });
    await page.goto("/monoklog/");
    await page.getByRole("tab", { name: "使用回数", exact: true }).click();
    await page
      .getByRole("button", { name: "無料でどこまで使えますか？", exact: true })
      .click();
    await expect(page.locator(".chart-plot svg")).toBeVisible();
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(results.violations).toEqual([]);
  });
}

test("main content and download remain available without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:3000/monoklog/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: /まずは無料で。/ }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "App Storeでダウンロード" }).first(),
  ).toBeVisible();
  await expect(page.locator(".hero-device")).toBeVisible();
  await context.close();
});

test("narrow viewport has no horizontal overflow", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 720 });
  await page.goto("/monoklog/");
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});
