// This is the Link API
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-primary mb-4">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Next JS
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link prefetch href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link prefetch href="/login">
                <a className="nav-link">Log in</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link prefetch href="/logout">
                <a className="nav-link">Log out</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link prefetch href="/about">
                <a className="nav-link">About</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
