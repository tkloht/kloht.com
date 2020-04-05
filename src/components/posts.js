/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql, Link } from "gatsby"
import format from "date-fns/format"

function Posts() {
  const data = useStaticQuery(graphql`
    query postsQuery {
      allMdx {
        nodes {
          excerpt(pruneLength: 250)
          frontmatter {
            title
            slug
            publishedAt
          }
        }
      }
    }
  `)

  const posts = data.allMdx.nodes

  return (
    <ul
      sx={{
        listStyle: "none",
        margin: 0,
        padding: 0,
        "li + li": { marginTop: 4 },
      }}
    >
      {posts.map(x => (
        <li>
          <Link
            sx={{
              fontSize: 3,
              fontWeight: "bold",
              display: "inline-block",
              marginBottom: 2,
              color: "inherit",
              textDecoration: "none",
              ":hover, :active": {
                color: "primary",
              },
            }}
            key={x.frontmatter.slug}
            to={`/${x.frontmatter.slug}`}
          >
            {x.frontmatter.title}
          </Link>
          <div sx={{ fontSize: 0, fontWeight: "bold" }}>
            {format(new Date(x.frontmatter.publishedAt), "d.M.yyyy")}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Posts
