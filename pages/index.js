import React from 'react'
import { withRouter } from 'next/router'
import Link from 'next/link'

let id = 0
class Page extends React.Component {
  static getInitialProps(props) {
    return { asPath: props.asPath }
  }
  render() {
    id = id + 1
    return <div>
      <div>Page getInitialProps asPath: {this.props.asPath}</div>
      <div>Page withRouter asPath: {this.props.router.asPath}</div>
      <div><Link href={{ pathname: '/', query: { id } }}><a>Next</a></Link></div>
    </div>
  }
}

export default withRouter(Page)
