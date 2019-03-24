import React, { Component } from "react"
// import "bootstrap/dist/css/bootstrap.min.css"

import Layout from "../components/Layout"
import Welcome from "../components/Welcome"
//import "./index.css"

class Index extends Component {
  render() {
    const title = process.env.title
    return (
      <Layout title={title}>
        <Welcome title="Welcome Page" />
      </Layout>
    )
  }
}
export default Index
