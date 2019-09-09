import React, { Component } from "react"

import Layout from "../components/Layout"
import Welcome from "../components/Welcome"

// import "./index.css"
import "./navbar-top-fixed.css"

class Login extends Component {
  render() {
    const title = process.env.title
    return (
      <Layout title={title}>
        <Welcome title="Login Page" />
      </Layout>
    )
  }
}
export default Login
