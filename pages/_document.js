import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'
import theme from '../styles/theme'
import { getHeaders } from '../lib/headersGenerator'

export default class MyDocument extends Document {
	render() {
		const { nonce } = this.props
		return (
			<Html>
				<Head nonce={nonce}>
					<meta name='theme-color' content={theme.palette.primary.main} />
					<link rel='alternate' href={`${process.env.NEXT_PUBLIC_SITE_URL}/fr`} hrefLang='fr' />
					<link rel='alternate' href={`${process.env.NEXT_PUBLIC_SITE_URL}/en`} hrefLang='en' />
					<link rel='alternate' href={process.env.NEXT_PUBLIC_SITE_URL} hrefLang='x-default' />
					<link rel='dns-prefetch preconnect' href='https://www.google-analytics.com' />
					<link rel='dns-prefetch preconnect' href='https://maps.gstatic.com' />
					<link rel='dns-prefetch preconnect' href='https://maps.googleapis.com' />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// It's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async ctx => {
	console.log(`Application started in ${process.env.NODE_ENV} mode`)
	// Resolution order
	// ---------------
	// On the server:
	// 1. app.getInitialProps
	// 2. page.getInitialProps
	// 3. document.getInitialProps
	// 4. app.render
	// 5. page.render
	// 6. document.render

	// On the server with error:
	// 1. document.getInitialProps
	// 2. app.render
	// 3. page.render
	// 4. document.render

	// On the client
	// 1. app.getInitialProps
	// 2. page.getInitialProps
	// 3. app.render
	// 4. page.render

	// Set default application headers
	const headers = getHeaders()
	if (ctx?.res?._headers) {
		const customHeaders = { ...ctx.res.getHeaders(), 'X-DNS-Prefetch-Control': 'off' }
		ctx.res._headers = customHeaders
		// let newHeaders = ctx.res._headers
		// console.log(newHeaders)
		// newHeaders = { ...newHeaders, 'X-DNS-Prefetch-Control': 'on' }
		// console.log(newHeaders)
		// ctx.res._headers = newHeaders
		//console.log(ctx.res.flush)
		//console.log(ctx.res)
		//'X-DNS-Prefetch-Control': 'on'
		//	ctx.res.writeHead(200, { 'X-DNS-Prefetch-Control': 'on' })
		//console.log(ctx.res)
		//ctx.res.write('fiacre')
		//ctx.res.writeHead(200)
		//console.log(ctx.res.writeHead())
		//ctx.res.end(body)
		// Object.entries(headers).forEach(([key, value]) => {
		// 	if (key !== 'nonce' && (key !== 'Content-Security-Policy' || process.env.NODE_ENV === 'production')) {
		// 		console.log(`SETTING HEADER: ${key}`)
		// 		try {
		// 			//ctx.res.writeHead(ctx.res.statusCode, { key: value })
		// 			//ctx.res.end()
		// 			ctx.res.setHeader(key, value)
		// 			console.log('HEADER SET WITHOUT eRROR')
		// 		} catch (err) {
		// 			console.log('ERROR SETTING HEADER')
		// 			console.log(err)
		// 		}
		// 		console.log(`STATUS CODE: ${ctx.res.statusCode}`)
		// 	}
		// })
	}

	// Render app and page and get the context of the page with collected side effects.
	const sheets = new ServerStyleSheets()
	const originalRenderPage = ctx.renderPage

	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: App => props => sheets.collect(<App {...props} />),
		})

	const initialProps = await Document.getInitialProps(ctx)
	const nonce = headers.nonce

	return {
		...initialProps,
		nonce,
		// Styles fragment is rendered after the app and page rendering finish.
		styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
	}
}
