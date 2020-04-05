/** @jsx jsx */
import { jsx } from "theme-ui"

import Header from "../components/Header"
import Footer from "../components/Footer"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.css"

function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        "h1, h2, h3, h4, h5, h6": {
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          marginBottom: 3,
          color: "inherit",
          fontWeight: "bold",
        },
        h1: { fontSize: 6 },
        h2: { fontSize: 5 },
        h3: { fontSize: 4 },
        h4: { fontSize: 3 },
        h5: { fontSize: 2 },
        h6: { fontSize: 1 },
      }}
    >
      <Header siteTitle={data.site.siteMetadata.title} />
      <main
        sx={{
          flex: "1 1 auto",
          margin: 3,
          maxWidth: "34em",
          marginLeft: [3, 6],
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
