/** @jsx jsx */
import { jsx } from "theme-ui"
import {Link as GatsbyLink} from 'gatsby'

function Link(props) {
  return <GatsbyLink {...props} sx={{color: 'primary'}} />
}

export default Link
