const preprocess = require("svelte-preprocess");

const config = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/svelte",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "svelteOptions": {
    "preprocess": preprocess({
      typescript: true,
      postcss: true
    })
  },
  "features": {
    "storyStoreV7": true
  }
}

module.exports = config;