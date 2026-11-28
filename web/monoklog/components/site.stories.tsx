import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ScreenExplorer } from "./screen-explorer";
import { FAQ } from "./faq";
import { UsageChart } from "./usage-chart";
import { Button } from "./ui/button";
const meta: Meta = {
  title: "ものクログ/Website",
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj;
export const Screens: Story = {
  render: () => (
    <main>
      <h1 className="sr-only">アプリの画面</h1>
      <ScreenExplorer />
    </main>
  ),
};
export const Questions: Story = {
  render: () => (
    <main style={{ maxWidth: 650 }}>
      <h1 className="sr-only">よくある質問</h1>
      <FAQ />
    </main>
  ),
};
export const Statistics: Story = {
  render: () => (
    <main style={{ maxWidth: 480 }}>
      <h1 className="sr-only">使用回数のサンプル</h1>
      <UsageChart />
    </main>
  ),
};
export const DownloadButton: Story = {
  render: () => <Button className="store-button">無料で使ってみる</Button>,
};
