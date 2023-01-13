import React, { FC } from 'react'
import { Link, graphql } from 'gatsby'
import { BLOCKS } from '@contentful/rich-text-types'
import { Options } from "@contentful/rich-text-react-renderer"
import { renderRichText, RenderRichTextData } from 'gatsby-source-contentful/rich-text'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import SEO from '../components/SEO'
import Layout from '../components/Layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

interface Props {
  data: Queries.NewsPostBySlugQuery
  errors?: Error[]
}

const richTextOptions: Options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      console.info(node)
      const { gatsbyImageData, description } = node.data.target
      const img = getImage(gatsbyImageData)

      if (!img) {
        console.warn("No image found for asset", node)
        return null;
      }
      return (
        <GatsbyImage
          image={img}
          alt={description}
        />
      )
    },
  }
}

const NewsPostTemplate: FC<Props> = ({ data, errors }) => {
  if (errors?.length) {
    throw new Error(errors[0].message);
  }

  const { post } = data

  if (!post) {
    return null
  }
  const plainBody = documentToPlainTextString(JSON.parse(post.body?.raw || '{}'))

  return (
    <Layout>
      <div>
        <SEO title={post.title || ''} description={plainBody} image={post.ogImage?.publicUrl} />
        <h1>{post.title}</h1>
        <div>
          {renderRichText(post.body as RenderRichTextData<any>, richTextOptions)}
        </div>
        <p>Posted at {post.createdAt}</p>
      </div>
    </Layout>
  )
}

export default NewsPostTemplate

export const pageQuery = graphql`
   query NewsPostBySlug(
    $slug: String!
  ) {
    post: contentfulPost(slug: { eq: $slug }) {
      slug
      title
      createdAt
      ogImage {
				publicUrl
      }
      body {
        raw
        references {
          id
					url
          ... on ContentfulAsset {
            contentful_id
            title
            description
            gatsbyImageData(width: 1000)
            __typename
          }
        }
      }
    }
  }
`