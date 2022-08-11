import { AppProps } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'

import GlobalStyles from 'styles/global'
import 'styles/nprogress.css'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Hostgator</title>
        <link rel="shortcut icon" href="/img/favicon.ico" />
        <link rel="apple-touch-icon" href="/img/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4480c5" />
        <meta name="description" content="A Hostgator front-end test." />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Hostgator Test Front-end" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
