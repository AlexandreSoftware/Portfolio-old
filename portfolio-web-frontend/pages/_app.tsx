import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Theme, ThemeContextProvider } from '../utils/ThemeContext';
import { useEffect, useState } from 'react';
import ThemeChanger from '../Components/useThemeChanger';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
function MyApp({ Component, pageProps }: AppProps) {
    return (
    <>
        <title>Portfolio</title>
        <ThemeContextProvider>
            <Navbar/>   
                <Component {...pageProps} />
            <Footer/>
        </ThemeContextProvider>
    </>
    )
}

export default MyApp
