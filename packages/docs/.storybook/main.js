module.exports = {
  "stories": [
    "../src/pages/Home.stories.mdx", // default page
    "../src/pages/**/*.stories.mdx",
    "../src/stories/**/*.stories.tsx",
    "../src/stories/icons/**/*.stories.tsx",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/addon-a11y'
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
  viteFinal: (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/solarview-ui-oficial/'
    }

    return config
  }
}