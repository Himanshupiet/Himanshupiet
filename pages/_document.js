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
          <link rel="icon" href="./images/cropped-Favicon-2-1-32x32.png" sizes="32x32" />
          <link rel="icon" href="./images/cropped-Favicon-2-1-192x192.png" sizes="192x192" />
          <link rel="apple-touch-icon" href="./images/cropped-Favicon-2-1-180x180.png" />
          <meta name="msapplication-TileImage" content={`${process.env.NEXT_PUBLIC_BASE_URL}/images/cropped-Favicon-2-1-270x270.png`} />
          <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;