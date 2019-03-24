import Head from "next/head"
import Navbar from "./Navbar"

const Layout = props => (
  <div>
    <Head>
      <title>{props.title}</title>
    </Head>
    <Navbar />
    <div className="container-fluid">{props.children}</div>
  </div>
)

export default Layout
