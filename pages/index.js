import React, { Component } from "react"

import "./index.css"
import "./navbar-top-fixed.css"

import Layout from "../components/Layout"
import Card from "../components/Card"
import data from "../data/data.json"
class Index extends Component {
  static async getInitialProps() {
    return { cards: data }
  }

  render() {
    const title = process.env.title
    const { cards } = this.props
    const cardsHTML = cards.map(card => <Card key={card.id} />)

    return (
      <Layout title={title}>
        <div className="row">{cardsHTML}</div>
      </Layout>
    )
  }
}
export default Index
