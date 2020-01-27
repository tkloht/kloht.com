import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <Link to="/">Home</Link>
      /
      <Link to="/posts">Posts</Link>
      /
      <Link to="/about">About</Link>
      /
      <Link to="/blogroll">Blogroll</Link>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
