const withCSS = require('@zeit/next-css')
const withTypescript = require('@zeit/next-typescript')
const { TsConfigPathsPlugin } = require('awesome-typescript-loader')

module.exports = withTypescript(
  withCSS({
    webpack(config) {
      // TypeScript path aliases support:
      config.resolve.plugins = [
        ...(config.resolve.plugins || []),
        new TsConfigPathsPlugin()
      ]

      return config
    },
    poweredByHeader: false
  })
)
