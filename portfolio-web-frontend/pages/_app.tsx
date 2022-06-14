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
import Loading from '../Components/Loading'

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading,setIsLoading] = useState(true)
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
      {!isSSR?
        <>
        <Navbar/>
          {!isSSR &&<Background/>}
          <Component {...pageProps} />
        <Footer/>
        </>:<Loading/>
      }
    </OldThemeContextProvider>
  </ThemeContextProvider>
  )
}

export default MyApp
