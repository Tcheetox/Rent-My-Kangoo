const { i18n } = require('./next-i18next.config')
const path = require('path')

// TODO: check next locale cookie?!
// TODO: check SEO hreflang
//https://developers.google.com/search/docs/advanced/crawling/managing-multi-regional-sites#using-locale-specific-urls

module.exports = {
	reactStrictMode: false,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles', 'globals')],
		prependData: `@import "colors.scss";@import "general.scss"; @import "mixins/centering.scss"; @import "mixins/tilt.scss"; @import "mixins/underline.scss";`,
	},
	images: {
		domains: ['www.2em.ch'],
	},
	i18n,
}
