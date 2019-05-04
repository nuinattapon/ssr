import React, { Component } from "react"

import Layout from "../components/Layout"
import Form from "../components/Form"

// import "./index.css"
import "./navbar-top-fixed.css"

class Test extends Component {
  render() {
    const title = process.env.title
    return (
      <Layout title={title}>
        <Form />
      </Layout>
    )
  }
}
export default Test
