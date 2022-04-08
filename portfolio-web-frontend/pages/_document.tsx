import { Main, Head, NextScript, Html } from "next/document";
import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function _document() {
    return(
        <React.Fragment>
            <Html >
                <Head />
                <NextScript />
                <Navbar/>
                <Main />
                <Footer/>
            </Html>
        </React.Fragment>
    )
}