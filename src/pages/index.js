/** @jsx jsx */
import { jsx } from "theme-ui"
import SEO from "../components/seo"
import Posts from "../components/posts"

const IndexPage = () => {
  return (
    <main>
      <SEO title="Home" />
      <h1>Hi</h1>
      <p>
        You have found the website of Tobias Kloht, a software developer in
        Berlin.
      </p>
      <p>I am currently working for Klarna.</p>

      <h2 sx={{ marginTop: 5 }}>Recent posts</h2>
      <Posts />
    </main>
  )
}

export default IndexPage
