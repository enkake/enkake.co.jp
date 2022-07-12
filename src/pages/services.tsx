import { graphql, Link } from "gatsby"
import * as React from "react"
import { FC } from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"


const ServicesPage: FC = () => {
  return (
    <Layout>
      <main>
        <SEO title="enkake Services" />
        <h1>Services</h1>
        <p>TBD</p>
      </main>
    </Layout>
  )
}

export default ServicesPage

export const pageQuery = graphql`
  query ServicesPage {
    siteBuildMetadata {
      buildTime
    }
  }
`