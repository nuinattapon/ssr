import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import Layout from "../components/Layout"

//import "./index.css"

class Index extends Component {
  render() {
    return (
      <Layout title="NextJS App">
        <div className="container w-auto">
          <h1>Welcome to NextJS</h1>
          <p>Boilder Plate</p>
        </div>
      </Layout>
    )
  }
}
export default Index
