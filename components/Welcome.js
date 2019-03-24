import React from "react"

const Welcome = props => {
  return (
    <div className="jumbotron">
      <h1>Welcome to {props.title}</h1>
      <hr className="my-4" />
      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
    </div>
  )
}

export default Welcome
