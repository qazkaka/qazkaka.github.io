import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AppCard } from "./app-card";
import { Support } from "./support";
import Home from "@/app/page";
import { apps } from "@/lib/content";
const meta = {
  title: "Homepage/AppCard",
  component: AppCard,
  parameters: { layout: "padded" },
} satisfies Meta<typeof AppCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Monoklog: Story = { args: { app: apps[0] } };
export const ComfyPocket: Story = { args: { app: apps[1] } };
export const SupportLinks = { render: () => <Support /> };
export const FullPage = {
  parameters: { layout: "fullscreen" },
  render: () => <Home />,
};
