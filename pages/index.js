import React from 'react'
import Router, { withRouter } from 'next/router'
import Link from 'next/link'

let id = 0
class Page extends React.Component {
  static getInitialProps(props) {
    return {
      asPath: props.asPath,
      asPathSingleton: process.browser ? Router.asPath : ''
    }
  }
  render() {
    id = id + 1
    return <div>
      <div>Page getInitialProps asPath: {this.props.asPath}</div>
      <div>Page withRouter asPath: {this.props.router.asPath}</div>
      <div>Singleton asPath in Page: {process.browser ? Router.asPath : ''}</div>
      <div>Singleton asPath in getInitialProps of Page: {this.props.asPathSingleton}</div>
      <div><Link href={{ pathname: '/', query: { id } }}><a>Next</a></Link></div>
    </div>
  }
}

export default withRouter(Page)
