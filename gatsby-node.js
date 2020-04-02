const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const component = path.resolve(`./src/templates/mdx-post.js`)
  return graphql(
    `
      {
        allMdx(
          limit: 1000
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                slug
              }
              body
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const posts = result.data.allMdx.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: post.node.frontmatter.slug,
        component,
        context: {
          slug: post.node.frontmatter.slug,
          title: post.node.frontmatter.title,
          previous,
          next,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
