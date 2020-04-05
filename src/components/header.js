/** @jsx jsx */
import { jsx } from "theme-ui"

import Link from "./Link"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header sx={{ marginLeft: 3, marginTop: 3 }}>
    <nav>
      <Link to="/">
        <span
          sx={{
            backgroundColor: "primary",
            height: 2,
            width: 2,
            display: "inline-block",
          }}
        />
      </Link>
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
