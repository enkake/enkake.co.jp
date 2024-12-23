import type { FC } from 'react';
import React from 'react'
import { graphql } from 'gatsby'
import { BLOCKS } from '@contentful/rich-text-types'
import type { Options } from "@contentful/rich-text-react-renderer"
import type { RenderRichTextData } from 'gatsby-source-contentful/rich-text';
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { formatDate } from 'date-fns';
import { Box } from '@mui/material';
import { SEO } from '../components/SEO'
import Layout from '../components/Layout'

interface Props {
  data: Queries.NewsPostBySlugQuery
  errors?: Error[]
}

const richTextOptions: Options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { gatsbyImageData, description } = node.data.target
      const img = getImage(gatsbyImageData)

      if (!img) {
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
      <Box sx={{ py: 4 }}>
        <SEO title={post.title || ''} description={plainBody} image={post.ogImage?.publicUrl} />
        <h1>{post.title}</h1>
        <div>
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {renderRichText(post.body as RenderRichTextData<any>, richTextOptions)}
        </div>
        {post.createdAt && <p>Posted at {formatDate(post.createdAt, 'yyyy-MM-dd hh:mm')}</p>}
      </Box>
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