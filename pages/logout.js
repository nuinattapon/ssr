import React, { Component } from "react"
// import "bootstrap/dist/css/bootstrap.min.css"

import Layout from "../components/Layout"
import Welcome from "../components/Welcome"
//import "./index.css"

class Logout extends Component {
  render() {
    const title = process.env.title
    return (
      <Layout title={title}>
        <Welcome title="Logout Page" />
      </Layout>
    )
  }
}
export default Logout
