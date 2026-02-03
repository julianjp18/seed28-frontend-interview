import path from "node:path";
import type { StorybookConfig } from "@storybook/react-vite";
import tailwindcss from "@tailwindcss/vite";

const projectRoot = process.cwd();

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-essentials", "@storybook/blocks"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    config.plugins = config.plugins ?? [];
    config.plugins.push(tailwindcss());

    // Resolve @/ to src/ (same as Next.js tsconfig)
    config.resolve = config.resolve ?? {};
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.join(projectRoot, "src"),
      // Mock next/image so Storybook (Vite) doesn't load Next.js internals
      "next/image": path.join(projectRoot, "src", "__mocks__", "next", "image.tsx"),
    };

    return config;
  },
};

export default config;
