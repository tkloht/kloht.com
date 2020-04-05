/** @jsx jsx */
import { jsx } from "theme-ui"
import Link from "./Link"

function Footer() {
  return (
    <div
      sx={{
        border: 0,
        borderTop: "1px",
        borderStyle: "dotted",
        borderColor: "primary",
        margin: 3,
        paddingTop: 4,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div sx={{ fontWeight: "bold", fontSize: 3 }}>Tobias Kloht</div>
      <Link to="/impressum">Impressum</Link>
    </div>
  )
}

export default Footer
