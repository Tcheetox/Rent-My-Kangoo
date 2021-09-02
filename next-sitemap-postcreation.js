const replace = require('replace-in-file')

const options = {
	files: './public/sitemap.xml',
	from: [/fr\/en/g, /fr\/fr/g, /en\/en/g, /en\/fr/g],
	to: ['fr', 'fr', 'en', 'en'],
}

replace(options)
console.log('Sitemap adjusted post creation...')
