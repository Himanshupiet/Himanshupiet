import { Provider } from 'react-redux'
import { store } from '../store/store'

import '../public/PaintbrushSlider_css/paintbrushslider.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'boxicons/css/boxicons.min.css'
import 'animate.css/animate.min.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
    </>
  )
}
export default MyApp
