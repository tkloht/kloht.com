/** @jsx jsx */
import { jsx } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"

function MDXPost({ data }) {
  return (
    <div
      sx={theme => ({
        maxWidth: "34em",
        ".gatsby-resp-image-wrapper + .gatsby-resp-image-wrapper": {
          marginTop: 3,
        },
        p: {
          lineHeight: 1.5,
        },
        a: {
          color: "inherit",
          textDecorationStyle: "underline",
          textDecorationColor: theme.colors.primary,
        },
        "a:hover": {
          color: "primary",
        },
      })}
    >
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </div>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
      }
      body
    }
  }
`

export default MDXPost
