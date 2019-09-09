import React, { Component } from "react"

import Layout from "../components/Layout"
import Welcome from "../components/Welcome"

<<<<<<< HEAD
// import "./index.css"
=======
import "./index.css"
>>>>>>> a7614f689ea9528561db8d23c8612082580c47df
import "./navbar-top-fixed.css"

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
