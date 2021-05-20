import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/cropped-Favicon-2-1-32x32.png`} sizes="32x32" />
          <link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/cropped-Favicon-2-1-192x192.png`} sizes="192x192" />
          <link rel="apple-touch-icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/cropped-Favicon-2-1-180x180.png`} />
          <meta name="msapplication-TileImage" content={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/cropped-Favicon-2-1-270x270.png`} />
          <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script type='text/javascript' src={`${process.env.NEXT_PUBLIC_BASE_PATH}/PaintbrushSlider_js/jquery.min9d52.js`} id='jquery-core-js'></script>
          <script type='text/javascript' src={`${process.env.NEXT_PUBLIC_BASE_PATH}/PaintbrushSlider_js/rbtools.min1e39.js`} id='tp-tools-js'></script>
          <script type='text/javascript' src={`${process.env.NEXT_PUBLIC_BASE_PATH}/PaintbrushSlider_js/rs6.min1e39.js`} id='revmin-js'></script>
          <script type='text/javascript' src={`${process.env.NEXT_PUBLIC_BASE_PATH}/PaintbrushSlider_js/revolution.addon.paintbrush.mincc91.js`} id='rs-paintbrush-front-js'></script>
          <script type='text/javascript' src={`${process.env.NEXT_PUBLIC_BASE_PATH}/AboutUsTimeline_js/AboutUsTimeline.js`} id='aboutus-timeline-js'></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument;