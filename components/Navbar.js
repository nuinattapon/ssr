// This is the Link API
import Link from "next/link"
import PropTypes from "prop-types"

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-info fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src="/static/u20-oow-asia-new.png"
            alt="Logo"
            height="40"
            width="40"
            className="mr-3"
          />
          {props.title}
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link prefetch href="/">
                <a className="nav-link">
                  <i className="fas fa-home mr-1" />
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link prefetch href="/login">
                <a className="nav-link">
                  <i className="fas fa-sign-in-alt mr-1" />
                  Log in
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link prefetch href="/logout">
                <a className="nav-link">
                  <i className="fas fa-sign-out-alt mr-1" />
                  Log out
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link prefetch href="/about">
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
