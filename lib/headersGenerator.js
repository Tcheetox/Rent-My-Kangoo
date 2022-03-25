const fs = require('fs')
const path = require('path')

const generateRandomNonce = () => {
    const crypto = require('crypto')
    const file = { nonce: crypto.randomBytes(16).toString('base64') }
    fs.writeFile(__dirname + '/nonce.json', JSON.stringify(file), err => {
        if (err) {
            console.log('Impossible to dump nonce')
            throw err
        }
        console.log(`New nonce generated at build time: ${file.nonce}`)
    })
    return file.nonce
}

module.exports = {
    getHeaders() {
        return [
            {
                key: 'Report-To',
                value: "{'max_age':31536000, 'endpoints':[{'url':'https://api.thekecha.com/reporting/csp/kangoo'}]}",
            },
            {
                key: 'Content-Security-Policy',
                value: `base-uri 'self'; object-src 'none'; script-src 'self' 'nonce-${generateRandomNonce()}'; report-uri https://api.thekecha.com/reporting/csp/kangoo; report-to default`,
            },
            { key: 'X-DNS-Prefetch-Control', value: 'on' },
            { key: 'X-Frame-Options', value: 'deny' },
            { key: 'X-Content-Type-Options', value: 'nosniff' },
            { key: 'X-XSS-Protection', value: '1' },
        ]
    },
}
