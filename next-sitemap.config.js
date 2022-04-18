// Sitemap generator: https://www.npmjs.com/package/next-sitemap
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
    generateRobotsTxt: true,
    exclude: ['/next/dist/pages/_error'],
    alternateRefs: [
        { href: `${process.env.NEXT_PUBLIC_SITE_URL}/en`, hreflang: 'en' },
        { href: `${process.env.NEXT_PUBLIC_SITE_URL}/fr`, hreflang: 'fr' },
        { href: `${process.env.NEXT_PUBLIC_SITE_URL}/de`, hreflang: 'de' },
        { href: process.env.NEXT_PUBLIC_SITE_URL, hreflang: 'x-default' },
    ],
}
