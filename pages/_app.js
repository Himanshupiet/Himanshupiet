import Head from './../components/common/Head'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'boxicons/css/boxicons.min.css'
import 'animate.css/animate.min.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
