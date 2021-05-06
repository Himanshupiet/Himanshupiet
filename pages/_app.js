import { Provider } from 'react-redux'
import { store } from '../store/store'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'boxicons/css/boxicons.min.css'
import 'animate.css/animate.min.css'
import '../public/PaintbrushSlider_css/de56fef21d5924efd615b5d430e6d1c5.css'
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
