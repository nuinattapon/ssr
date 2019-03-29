import Head from "next/head"
import Navbar from "./Navbar"

const Layout = props => (
  <div>
    <Head>
      <title>{props.title}</title>
    </Head>
    <Navbar title={props.title} />
    <div className="container-fluid mx-4">
      <div className="mt-3">{props.children}</div>
    </div>
  </div>
)

export default Layout
