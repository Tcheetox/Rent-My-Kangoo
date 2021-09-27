import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

import { appWithTranslation } from 'next-i18next'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../styles/theme'
import ReactGA from 'react-ga'
import 'react-date-range/dist/styles.css' // Calendar
import 'react-date-range/dist/theme/default.css' // Theme css file
import '../styles/index.scss'
import Script from 'next/script'
import header from '../lib/nonce.json'
// Manual import of translations to <Head/>
import fr from '../public/locales/fr/common.json'
import en from '../public/locales/en/common.json'

// TODO: Replace !important flags in css

const MyApp = ({ pageProps, Component }) => {
	React.useEffect(() => {
		// Remove the server-side injected CSS
		const jssStyles = document.querySelector('#jss-server-side')
		if (jssStyles) jssStyles.parentElement.removeChild(jssStyles)
	}, [])

	// Pick adequate translation file
	const t = !('_nextI18Next' in pageProps) || pageProps._nextI18Next.initialLocale === 'en' ? en : fr

	return (
		<>
			<Script
				id='ga'
				src='https://www.google-analytics.com/analytics.js'
				nonce={header.nonce}
				onLoad={() => {
					// Loading GA the standard way
					window.ga = window.ga || (() => (ga.q = ga.q || []).push(arguments))
					ga.l = +new Date()
					ga('create', { trackingId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, cookieDomain: 'auto', cookieFlags: 'SameSite=None;Secure' })
					ga('send', 'pageview')
					// Initialize GA
					ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
						titleCase: false,
						gaOptions: { cookieFlags: 'SameSite=None;Secure' },
						standardImplementation: true,
					})
					if (location) ReactGA.pageview(location.pathname)
				}}
				async
			/>
			<Head>
				<title>{t.site_title}</title>
				<meta charSet='utf-8' />
				<meta name='description' content={t.site_description} />
				<meta name='keywords' content={t.site_keywords} />
				<meta name='author' content='Kévin Renier' />
				<meta name='robots' content='index, follow' />
				<meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	)
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired,
}

export default appWithTranslation(MyApp)
