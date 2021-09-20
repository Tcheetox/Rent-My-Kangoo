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
// Manual import of translations to <Head/>
import fr from '../public/locales/fr/common.json'
import en from '../public/locales/en/common.json'

// TODO: clear !important flags in scss...
// TODO: README

const MyApp = props => {
	const { Component, pageProps } = props

	React.useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side')
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles)
		}
		// Initialize GA
		ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, { titleCase: false, gaOptions: { cookieFlags: 'SameSite=None;Secure' } })
		if (location) ReactGA.pageview(location.pathname)
	}, [])

	// Pick adequate translation file
	const t = !props.pageProps._nextI18Next || props.pageProps._nextI18Next.initialLocale === 'en' ? en : fr

	return (
		<React.Fragment>
			<Head>
				<title>{t.site_title}</title>
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
		</React.Fragment>
	)
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired,
}

export default appWithTranslation(MyApp)
