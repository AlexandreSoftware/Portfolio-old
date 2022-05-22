import { Main, Head, NextScript, Html } from "next/document";
import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function _document() {
    return(
        <React.Fragment>
            <Html >
                <Head>
                    <meta name="description" content="Xandrf Portfolio" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        </React.Fragment>
    )
}