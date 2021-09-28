import Document, { Html, Head, Main, NextScript } from 'next/document'
import config from 'react-reveal/globals'

config({ ssrFadeout: true })
config({ duration: 500 });

class MainDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <div id="portal"></div>
        </body>
      </Html>
    );
  }
}

export default MainDocument;