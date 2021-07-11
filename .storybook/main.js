module.exports = {
  stories: ['../src/components/**/*.stories.mdx', '../src/components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-a11y'],
};

/*
yarn run v1.22.5
$ start-storybook -p 6006
info @storybook/react v6.3.2
info
info => Loading presets
info => Loading presets
info => Loading config/preview file in "./.storybook".
info => Loading config/preview file in "./.storybook".
info => Adding stories defined in ".storybook/main.js". // webpack의 alias 설정이 늦어서 절대 경로를 유지한다.
info => Loading custom Webpack config (full-control mode).
webpack built 60a91f1ef34ed8c696ac in 12560ms
 */
