const { i18n } = require('./next-i18next.config')
const path = require('path')
const headersGenerator = require('./lib/headersGenerator')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

// Analyze bundle with npm run analyze
module.exports = withBundleAnalyzer({
  async headers() {
    return process.env.NODE_ENV !== 'production'
      ? []
      : [
          {
            // Apply these headers to all routes in your application.
            source: '/:path*',
            headers: headersGenerator.getHeaders(),
          },
        ]
  },
  basePath: '/louemakangoo',
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles', 'globals')],
    prependData: `@import "colors.scss";@import "general.scss"; @import "mixins/centering.scss"; @import "mixins/tilt.scss"; @import "mixins/underline.scss"; @import "mixins/mediaQueries.scss";`,
  },
  images: {
    domains: ['www.2em.ch'],
  },
  i18n,
})
