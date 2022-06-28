import React from 'react';
// Modules
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from "next/script"
export default function MyDocument() {

    return (
      <Html lang="en">
        <Head>
          <script src="/noflicker.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
}
