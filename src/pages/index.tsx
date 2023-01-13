import { graphql, Link } from "gatsby"
import * as React from "react"
import { FC } from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Img from "gatsby-image"

interface Props {
  data: Queries.TopQuery
  errors?: Error[]
}


const IndexPage: FC<Props> = ({ data, errors }) => {
  if (errors?.length) {
    throw new Error(errors[0].message);
  }

  return (
    <Layout>
      <SEO title="enkake" />
      <Img fluid={data.eyeCatchImage!.childImageSharp!.fluid!} />
      <main>
        <section>
          <h2>News</h2>
          <ul>
            {data.newsPosts.nodes.map(post => (
              <li key={post.slug}>
                <Link to={`/news/${post.slug}/`}>{post.title}</Link>
              </li>
            ))}
          </ul>
          <p><Link to="/news/">Read more</Link></p>
        </section>
      </main>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query Top {
    newsPosts: allContentfulPost(limit: 2, sort:{createdAt:DESC}) {
      nodes {
        slug
        title
        createdAt
      }
    }
    eyeCatchImage: file(relativePath:{eq:"main.jpg"}) {
      childImageSharp{
        fluid(maxWidth: 1200) {
          ... GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`