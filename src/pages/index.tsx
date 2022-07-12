import { graphql, Link } from "gatsby"
import * as React from "react"
import { FC } from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

interface Props {
  data: Queries.TopNewsPostsQuery
  errors?: Error[]
}


const IndexPage: FC<Props> = ({ data, errors }) => {
  if (errors?.length) {
    throw new Error(errors[0].message);
  }

  return (
    <Layout>
      <main>
        <SEO title="enkake" />
        <h1>enkake</h1>
        <section>
          <h2>News</h2>
          <ul>
            {data.newsPosts.nodes.map(post => (
              <li key={post.slug}>
                <Link to={`/news/${post.slug}`}>{post.title}</Link>
              </li>
            ))}
          </ul>
          <p><Link to="/news">Read more</Link></p>
        </section>
      </main>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query TopNewsPosts {
    newsPosts: allContentfulPost(limit: 2, sort: {fields: [createdAt], order: DESC}) {
      nodes {
        slug
        title
        createdAt
      }
    }
  }
`