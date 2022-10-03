import { AppProps } from 'next/app'
import Head from 'next/head'
import '@/../firebase/firebase'

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Component {...pageProps} />

      <style global jsx>{`
        body {
          padding: 0;
          margin: 0;

          font-family: 'Noto Sans JP', sans-serif;
          color: white;
        }
      `}</style>
    </>
  )
}

export default MyApp
