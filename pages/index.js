import React, { Component } from "react"
// import "bootstrap/dist/css/bootstrap.min.css"

import Layout from "../components/Layout"
import Welcome from "../components/Welcome"
//import "./index.css"

class Index extends Component {
  render() {
    const title = "NextJS"
    return (
      <Layout title={title}>
        <Welcome title={title} />
      </Layout>
    )
  }
}
export default Index
