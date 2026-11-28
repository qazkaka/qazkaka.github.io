import type { Preview } from "@storybook/nextjs-vite";
import "../app/globals.css";
const preview: Preview = {
  parameters: {
    layout: "padded",
    a11y: { test: "error" },
    nextjs: { appDirectory: true },
  },
};
export default preview;
