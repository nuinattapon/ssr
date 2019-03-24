// This is the Link API
import Link from "next/link"

export default () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-danger mb-4">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          BitzPrice
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link prefetch href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link prefetch href="/about">
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link prefetch href="/input_form">
                <a className="nav-link">Input Form</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
