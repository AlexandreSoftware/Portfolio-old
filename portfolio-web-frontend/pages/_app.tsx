import '../styles/globals.css'
import "../styles/index.css"
import type { AppProps } from 'next/app'
import ThemeContext, { Theme, ThemeContextProvider } from '../utils/ThemeContext'
import { OldThemeContextProvider } from '../utils/OldThemeContext'
import Background from '../Components/Background'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Head from 'next/head'
import { useContext, useEffect, useState } from 'react'
import Loading from '../Components/Loading'
import SocialsCard from '../Components/SocialsCard'
import LightBar from '../Components/LightBar'
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
