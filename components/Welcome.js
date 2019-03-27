import React, { Component } from "react"
import Router from "next/router"
import PropTypes from "prop-types"

class Welcome extends Component {
  handleClick = event => {
    event.preventDefault()
    Router.push("/")
  }
  render() {
    return (
      <div className="jumbotron">
        <h1>Welcome to {this.props.title}</h1>
        <hr className="my-4" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>

        <button
          type="button"
          className="btn btn-raised btn-info"
          onClick={this.handleClick}
        >
          Go to Home page
        </button>
      </div>
    )
  }
}

export default Welcome

Welcome.propTypes = {
  title: PropTypes.string.isRequired
}
