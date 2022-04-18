const replace = require('replace-in-file')

// TODO: complete for DE
const options = {
    files: './public/sitemap*.xml',
    from: [/fr\/en/g, /fr\/fr/g, /en\/en/g, /en\/fr/g, /de\/en/g, /de\/de/g, /fr\/de/g, /en\/de/g],
    to: ['fr', 'fr', 'en', 'en', 'de', 'de', 'fr', 'en'],
}

replace(options)
console.log('Sitemap adjusted post creation...')
