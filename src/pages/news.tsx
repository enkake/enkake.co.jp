import { graphql, Link } from "gatsby"
import * as React from "react"
import { FC } from "react"
import { SEO } from "../components/SEO"

interface Props {
  data: Queries.TopNewsPostsQuery
  errors?: Error[]
}


const NewsPage: FC<Props> = ({ data, errors }) => {
  if (errors?.length) {
    throw new Error(errors[0].message);
  }

  return (
    <main>
      <SEO title="enkake News" />
      <h1>News</h1>
      <ul>
        {data.newsPosts.nodes.map(post => (
          <li key={post.slug}>
            <Link to={`/news/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default NewsPage

export const pageQuery = graphql`
  query AllNewsPosts {
    newsPosts: allContentfulPost(limit: 9999, sort: {fields: [createdAt], order: DESC}) {
      nodes {
        slug
        title
        createdAt
      }
    }
  }
`