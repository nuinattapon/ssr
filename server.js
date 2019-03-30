const express = require("express")
const next = require("next")
const helmet = require("helmet")

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  server.use(helmet())
  server.use(express.urlencoded({ extended: true }))
  server.use(express.json())

  server.get("/page3", (req, res) => {
    return app.render(req, res, "/about")
  })

  server.get("*", (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
