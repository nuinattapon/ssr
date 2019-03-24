import React, { Component } from "react"
// import "bootstrap/dist/css/bootstrap.min.css"

import Layout from "../components/Layout"
import Welcome from "../components/Welcome"
//import "./index.css"

class Login extends Component {
  render() {
    const title = "NextJS"
    return (
      <Layout title={title}>
        <Welcome title="Login Page" />
      </Layout>
    )
  }
}
export default Login
