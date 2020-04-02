import React from 'react'
import {MDXRenderer } from 'gatsby-plugin-mdx'
import {graphql} from 'gatsby'

function MDXPost({data}) {
  return <div>
    <MDXRenderer>{data.mdx.body}</MDXRenderer>
  </div>
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