import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet()

    // Step 2: Retrieve styles from components in the page
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement()

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags }
  }

  render() {
    return (
      <html>
        <Head>
          {this.props.styleTags}
          {/* <link
            rel="shortcut icon"
            href="https://cdn.leadpilot.io/lp_favicon.ico"
            type="image/x-icon"
          /> */}
        </Head>
        <body>
          <svg
            style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
            version="1.1"
          >
            <defs>
              <symbol id="icon-left-chevron" viewBox="0 0 24 24">
                <title>left-chevron</title>
                <path d="M16.23,19.677a1.1,1.1,0,0,0,0-1.556l0,0L10.112,12,16.23,5.883a1.1,1.1,0,1,0-1.56-1.56L7.785,11.208a0.053,0.053,0,0,0-.014.01,1.109,1.109,0,0,0,0,1.564,0.053,0.053,0,0,1,.014.01l6.885,6.885a1.1,1.1,0,0,0,1.556,0Z" />
              </symbol>
            </defs>
          </svg>

          <div id="modal" />
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
