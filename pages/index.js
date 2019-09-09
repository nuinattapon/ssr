import React, { Component } from "react"

import Layout from "../components/Layout"
import Card from "../components/Card"
import Intro from "../components/Intro"
import data from "../data/data.json"

//import "./index.css"
import "./navbar-top-fixed.css"

class Index extends Component {
  static async getInitialProps() {
    return { cards: data }
  }

  render() {
    const title = process.env.title
    const { cards } = this.props
    const cardsHTML = cards.map((card) => <Card key={card.id} />)

    return (
      <Layout title={title}>
        <Intro />

        <div className="row justify-content-center">{cardsHTML}</div>
      </Layout>
    )
  }
}
export default Index
