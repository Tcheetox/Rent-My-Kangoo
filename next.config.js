const { i18n } = require('./next-i18next.config')
const path = require('path')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})

// Analyze bundle with ANALYZE=true npm run build
module.exports = withBundleAnalyzer({
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
