import React, { Component } from "react"
// import "bootstrap/dist/css/bootstrap.min.css"

import Layout from "../components/Layout"
import Welcome from "../components/Welcome"
//import "./index.css"

class About extends Component {
  render() {
    const title = "NextJS"
    return (
      <Layout title={title}>
        <Welcome title="About Page" />
      </Layout>
    )
  }
}
export default About
