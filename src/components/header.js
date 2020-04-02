/** @jsx jsx */
import { jsx } from "theme-ui"

import Link from './Link'
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <Link to="/">Home</Link>
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
