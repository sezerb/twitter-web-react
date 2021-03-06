const path = require('path')

module.exports = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-postcss'
  ],
  presets: [path.resolve(__dirname, './next-preset.js')]
}
