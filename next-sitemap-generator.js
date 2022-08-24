const fs = require('fs')
const envPath = fs.existsSync('.env.local') ? '.env.local' : '.env'
require('dotenv').config({ path: envPath })

// Metadata
const date = new Date().toISOString()
const priority = 0.7
const frequency = 'daily'
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
const alternateRefs = ['', 'fr', 'en', 'de']

// Write base sitemap
const baseSiteMapName = 'sitemap.xml'
const targetSiteMapName = 'sitemap-0.xml'
const baseSiteMap = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <sitemap><loc>${baseUrl}/${targetSiteMapName}</loc></sitemap>
</sitemapindex>`
fs.writeFileSync(`public/${baseSiteMapName}`, baseSiteMap)

const urls = []
alternateRefs.forEach(entry => {
    const suffix = entry.length > 0 ? `/${entry}` : ''
    let inner = ''
    alternateRefs.forEach(dupEntry => {
        if (dupEntry !== entry && dupEntry.length > 0) {
            const dupSuffix = dupEntry.length > 0 ? `/${dupEntry}` : ''
            inner += `<xhtml:link rel="alternate" hreflang="${dupEntry}" href="${baseUrl}${dupSuffix}"/>`
        }
    })
    let base = `
    <url>
        <loc>${baseUrl}${suffix}</loc>
        <changefreq>${frequency}</changefreq>
        <priority>${priority}</priority>
        <lastmod>${date}</lastmod>
        <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${suffix}"/>
        ${inner}
    </url>`
    urls.push(base)
})

const content = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${urls.join('')}
</urlset>`
// Write true sitemap content
fs.writeFileSync(`public/${targetSiteMapName}`, content)
console.log('Sitemap(s) have been adjusted')
