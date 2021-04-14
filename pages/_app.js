import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css';
import "animate.css/animate.min.css";
import '../styles/globals.css'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
