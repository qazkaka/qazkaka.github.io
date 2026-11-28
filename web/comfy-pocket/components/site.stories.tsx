import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ScreenExplorer } from "./screen-explorer";
import { FAQ } from "./faq";
import { SiteHeader } from "./site-header";
import { Button } from "./ui/button";
const meta = {
  title: "Comfy Pocket/Screen explorer",
  component: ScreenExplorer,
  parameters: { layout: "padded" },
  args: { locale: "ja" },
} satisfies Meta<typeof ScreenExplorer>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Japanese: Story = {};
export const English: Story = { args: { locale: "en" } };
export const Questions: Story = { render: () => <FAQ locale="ja" /> };
export const Navigation: Story = { render: () => <SiteHeader locale="ja" /> };
export const Buttons: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button>アプリの画面を見る</Button>
      <Button variant="outline">接続手順を見る</Button>
    </div>
  ),
};
