import '../styles/globals.css'
import "../styles/index.css"
import type { AppProps } from 'next/app'
import { ThemeContextProvider } from '../utils/ThemeContext'
import { OldThemeContextProvider } from '../utils/OldThemeContext'
import Background from '../Components/Background'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Head from 'next/head'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [isSSR, setIsSSR] = useState(true);
  useEffect(()=>{
    setIsSSR(false)
  },[])
  return (
  <ThemeContextProvider>
    <OldThemeContextProvider>
      <Head>
        <title>Xandrf Portfolio</title>
      </Head>
      <Navbar/>
        {!isSSR &&<Background/>}
        <Component {...pageProps} />
      <Footer/>
    </OldThemeContextProvider>
  </ThemeContextProvider>
  )
}

export default MyApp
