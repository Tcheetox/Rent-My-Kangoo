import React from 'react'

import Document, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../styles/theme'
import createEmotionServer from '@emotion/server/create-instance'
import createEmotionCache from '../lib/createEmotionCache'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta name="theme-color" content={theme.palette.primary.main} />
                    <link rel="alternate" href={`${process.env.NEXT_PUBLIC_SITE_URL}/fr`} hrefLang="fr" />
                    <link rel="alternate" href={`${process.env.NEXT_PUBLIC_SITE_URL}/en`} hrefLang="en" />
                    <link rel="alternate" href={process.env.NEXT_PUBLIC_SITE_URL} hrefLang="x-default" />
                    <link rel="dns-prefetch preconnect" href="https://www.google-analytics.com" />
                    <link rel="dns-prefetch preconnect" href="https://maps.gstatic.com" />
                    <link rel="dns-prefetch preconnect" href="https://maps.googleapis.com" />
                    {this.props.emotionStyleTags}
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
    console.log(`Application working in ${process.env.NODE_ENV} mode`)

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

    // Render app and page and get the context of the page with collected side effects.
    const originalRenderPage = ctx.renderPage
    const cache = createEmotionCache()
    const { extractCriticalToChunks } = createEmotionServer(cache)

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: App =>
                function EnhanceApp(props) {
                    return <App emotionCache={cache} {...props} />
                },
        })

    const initialProps = await Document.getInitialProps(ctx)

    const emotionStyles = extractCriticalToChunks(initialProps.html)
    const emotionStyleTags = emotionStyles.styles.map(style => (
        <style
            data-emotion={`${style.key} ${style.ids.join(' ')}`}
            key={style.key}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: style.css }}
        />
    ))

    return {
        ...initialProps,
        emotionStyleTags,
    }
}
