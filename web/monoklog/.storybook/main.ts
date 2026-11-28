import type { StorybookConfig } from "@storybook/nextjs-vite";
const config: StorybookConfig = {
  stories: ["../components/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y"],
  framework: "@storybook/nextjs-vite",
  staticDirs: [{ from: "../public", to: "/monoklog" }],
  async viteFinal(config) {
    const { mergeConfig } = await import("vite");
    return mergeConfig(config, {
      resolve: { alias: { "@": new URL("../", import.meta.url).pathname } },
    });
  },
};
export default config;
