const generateRandomNonce = () => {
	const crypto = require('crypto')
	return crypto.randomBytes(16).toString('base64')
}

export const getHeaders = () => {
	const nonce = generateRandomNonce()
	return {
		nonce: nonce,
		// 'Content-Security-Policy': `object-src: 'none'; script-src 'self' 'nonce-${nonce}'; style-src: 'self';`,
		'X-DNS-Prefetch-Control': 'on',
		'X-Frame-Options': 'deny',
		'X-Content-Type-Options': 'nosniff',
		'X-XSS-Protection': '1',
	}
}
