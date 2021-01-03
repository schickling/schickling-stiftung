/** @type import('@storybook/core/types').StorybookConfig */
module.exports = {
  stories: [
    // "../src/stories/**/*.stories.mdx",
    // '../src/stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  reactOptions: {
    fastRefresh: true,
    // strictMode: true,
  },
  // based on https://github.com/storybookjs/storybook/issues/12668#issuecomment-751134567
  // with SB 7.0 we can remove postcss-loader again
  webpackFinal: async (config) => {
    /**
     * CSS handling, specifically overriding postcss loader
     */
    // Find the only Storybook webpack rule that tests for css
    const cssRule = config.module.rules.find((rule) =>
      'test.css'.match(rule.test),
    )
    // Which loader in this rule mentions the custom Storybook postcss-loader?
    const loaderIndex = cssRule.use.findIndex((loader) => {
      // Loaders can be strings or objects
      const loaderString = typeof loader === 'string' ? loader : loader.loader
      // Find the loader that mentions postcss-loader
      return loaderString.includes('postcss-loader')
    })
    // Simple loader string form, removes the obsolete "options" key
    cssRule.use[loaderIndex] = 'postcss-loader'

    // Uncomment the following to debug
    // console.dir(config, { depth: null })

    return config
  },
}
