/** @jsx jsx */
import { jsx } from "theme-ui"

import Header from '../components/Header'
import Footer from '../components/Footer'
import { useStaticQuery, graphql } from "gatsby"
import './layout.css'

function Layout({children}) {
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
    <div sx={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main sx={{
        flex: '1 1 auto'
      }}>
        {children}
      </main>
      <Footer />
     </div>
  )
}

export default Layout
