// This is the Link API
import Link from "next/link"
import PropTypes from "prop-types"

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-info mb-4">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link prefetch href="/" prefetch>
                <a className="nav-link">
                  <i className="fas fa-home mr-1" />
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link prefetch href="/login" prefetch>
                <a className="nav-link">
                  <i className="fas fa-sign-in-alt mr-1" />
                  Log in
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link prefetch href="/logout" prefetch>
                <a className="nav-link">
                  <i className="fas fa-sign-out-alt mr-1" />
                  Log out
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link prefetch href="/about" prefetch>
                <a className="nav-link">
                  <i className="fas fa-info-circle mr-1" />
                  About
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

Navbar.propTypes = {
  title: PropTypes.string.isRequired
}
