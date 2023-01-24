import Document, { Html, Head, Main, NextScript } from 'next/document'

export default function SiteDocument() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href=""></link>
        <meta name="theme-color" content="#fff" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
