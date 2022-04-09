import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
function MyApp({ Component, pageProps }: AppProps) {
    return (
    <>
        <title>Portfolio</title>
        <Component {...pageProps} />
    </>
    )
}

export default MyApp
