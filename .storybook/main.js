const preprocess = require("svelte-preprocess")

module.exports = {
  async viteFinal(config, { configType }) {
		config.preprocess = preprocess({
			postcss: true
		});
		return config;
	},
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
    "builder": "storybook-builder-vite"
  },
  "features": {
    "storyStoreV7": true
  }
}