import '../styles/globals.css'
import "../styles/index.css"
import type { AppProps } from 'next/app'
import {ThemeContextProvider } from '../utils/ThemeContext'
import { OldThemeContextProvider } from '../utils/OldThemeContext'
import Head from 'next/head'
import App from '../Components/App'
import { AnimatePresence } from 'framer-motion'
import { OldHtmlContextProvider } from '../utils/OldHtmlContext'
import { ChakraProvider } from '@chakra-ui/react'
import Script from 'next/script'
import { LanguageContextProvider } from '../utils/LanguageContext'

import "primereact/resources/themes/mdc-dark-indigo/theme.css";    //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
 
function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <ThemeContextProvider>
      <OldThemeContextProvider>
          <OldHtmlContextProvider>
            <LanguageContextProvider>
                <Head>
                  <title>Xandrf Portfolio</title>
                </Head>
                <Script src="/NoFlicker.js" strategy='beforeInteractive' />
                  <AnimatePresence>
                    <App>
                        <Component {...pageProps} />
                    </App>
                  </AnimatePresence>
            </LanguageContextProvider>
          </OldHtmlContextProvider>
      </OldThemeContextProvider>
    </ThemeContextProvider>
  )
}

export default MyApp
