import type { StorybookConfig } from "@storybook/react-vite";
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    config.plugins?.push(
      /** @see https://github.com/aleclarson/vite-tsconfig-paths */
      tsconfigPaths({
        // My tsconfig.json isn't simply in viteConfig.root,
        // so I've passed an explicit path to it:
        projects: [path.resolve(path.dirname(__dirname), "../tsconfig.json")],
      })
    );

    if (config.resolve?.alias) {
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        '@/*': path.resolve(__dirname, '../src/*'), // Adjust the path to your 'src' directory
      };
    }

    return config;
  },
};
export default config;
