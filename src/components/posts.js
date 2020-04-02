import React from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'

function Posts() {

  const data = useStaticQuery(graphql`
      query postsQuery {
        allMdx {
          nodes {
            excerpt(pruneLength: 250)
            frontmatter {
              title
              slug
            }
          }
        }
      }
  `)

  console.log('>> posts: ', data)

  const posts = data.allMdx.nodes

  return <div>
    {posts.map(x => <Link to={x.frontmatter.slug}>{x.frontmatter.title}</Link>  )}
  </div>
}

export default Posts