import '../styles/globals.css'
import "../styles/index.css"
import type { AppProps } from 'next/app'
import {ThemeContextProvider } from '../utils/ThemeContext'
import { OldThemeContextProvider } from '../utils/OldThemeContext'
import Head from 'next/head'
import App from '../Components/App'
import { AnimatePresence } from 'framer-motion'
import { OldHtmlContextProvider } from '../utils/OldHtmlContext'

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
  <ThemeContextProvider>
    <OldThemeContextProvider>
        <OldHtmlContextProvider>
          <Head>
            <title>Xandrf Portfolio</title>
          </Head>
            <AnimatePresence>
              <App>
                  <Component {...pageProps} />
              </App>
            </AnimatePresence>
        </OldHtmlContextProvider>
    </OldThemeContextProvider>
  </ThemeContextProvider>
  )
}

export default MyApp
