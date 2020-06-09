import React, { Fragment } from 'react'
import App from 'next/app'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*,
::before,
::after {
  background-repeat: no-repeat;
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

html,
body {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

img {
  max-width: none;
}

body {
  margin: 0;
  font-size: 14px;
  line-height: 1;
  font-weight: normal;
}
@media (min-width: 800px) {
  body {
    font-size: 16px;
  }
}
`

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Fragment>
        <GlobalStyle />
        <Component {...pageProps} />
      </Fragment>
    )
  }
}

export default MyApp
