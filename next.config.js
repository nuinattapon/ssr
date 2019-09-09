const withCSS = require("@zeit/next-css")
module.exports = withCSS({
  /* my next config */
  target: "serverless",
  env: {
    title: "NextJS Demo"
  }
})
