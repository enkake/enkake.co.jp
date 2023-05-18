import { graphql, Link } from "gatsby"
import * as React from "react"
import { FC } from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"


const ServicesPage: FC = () => {
  return (
    <Layout>
      <main>
        <SEO title="enkake 温泉マナー 10ヶ条" />
        <h1>温泉マナー 10ヶ条</h1>
        <p>準備中</p>
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