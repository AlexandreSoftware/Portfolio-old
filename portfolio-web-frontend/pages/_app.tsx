import '../styles/globals.css'
import "../styles/index.css"
import type { AppProps } from 'next/app'
import { ThemeContextProvider } from '../utils/ThemeContext'
import { OldThemeContextProvider } from '../utils/OldThemeContext'
import Background from '../Components/Background'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ThemeContextProvider>
    <OldThemeContextProvider>
        <Head>
          <title>Xandrf Portfolio</title>
        </Head>
        <Navbar/>
        <Background/>   
          <Component {...pageProps} />
        <Footer/>
    </OldThemeContextProvider>
  </ThemeContextProvider>
  )
}

export default MyApp
