import React from 'react'
import { withRouter } from 'next/router'
import App, { Container } from 'next/app'

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    console.log(ctx)

    return { pageProps, asPath: router.asPath, asPathCtx: ctx.asPath }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <div>App getInitialProps asPath: {this.props.asPath}</div>
        <div>App withRouter asPath: {this.props.router.asPath}</div>
        <div>App ctx asPath: {this.props.asPathCtx}</div>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default withRouter(MyApp)
