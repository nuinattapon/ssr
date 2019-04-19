const withCSS = require("@zeit/next-css")
module.exports = withCSS({
  /* my next config */
  target: "server",
  env: {
    title: "SSR"
  }
})
