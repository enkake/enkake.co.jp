import * as React from "react"
import { Link } from "gatsby"
import { SEO } from "../components/SEO"

// markup
const NotFoundPage = () => {
  return (
    <main>
      <SEO title="404: Not found" />
      <h1>Page not found</h1>
      <p>
        Sorry{" "}
        we couldn’t find what you were looking for.
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage
