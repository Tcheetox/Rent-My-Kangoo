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
	console.log('DEBUG ME')
	console.log(ctx.res ? 'SHOULD BE OK' : 'NOPE')
	if (ctx?.res) {
		console.log('WE ARE HERE TO SET THE STUFF')
		Object.entries(headers).forEach(([key, value]) => {
			console.log('WITHIN THE LOOP')
			if (key !== 'nonce' && (key !== 'Content-Security-Policy' || process.env.NODE_ENV === 'production')) {
				console.log(`SETTING HEADER: ${key}`)
				//ctx.res.setHeader(key, value)
			}
		})
		console.log('DEBUG HEADERS not being set properly in production...')
		console.log(ctx.res)
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
