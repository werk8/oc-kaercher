import Head from 'next/head'

function HeadComponent({ favicon = '/favicon.ico' }) {
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-152.png"></link>
        <meta name="theme-color" content="#fff" />
        <link rel="shortcut icon" href={favicon} />

        <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
        <meta name="description" content="y" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="format-detection" content="telephone=no" />

        <link rel="home" href="" />
        <title>Oscar Charlie | Banner Tool</title>

        <meta name="description" content="" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />
      </Head>
    </>
  )
}

export default HeadComponent
