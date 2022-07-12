import { graphql, Link } from "gatsby"
import * as React from "react"
import { FC } from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"


const AboutPage: FC = () => {
  return (
    <Layout>
      <main>
        <SEO title="enkake About" />
        <h1>About</h1>
        <p>TBD</p>
      </main>
    </Layout>
  )
}

export default AboutPage