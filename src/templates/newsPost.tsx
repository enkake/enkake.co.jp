import React, { FC } from 'react'
import { Link, graphql } from 'gatsby'
import { renderRichText, RenderRichTextData } from 'gatsby-source-contentful/rich-text'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import { SEO } from '../components/SEO'

interface Props {
  data: Queries.NewsPostBySlugQuery
  errors?: Error[]
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

  return (<div>
    <SEO title={post.title || ''} description={plainBody} image={post.ogImage?.publicUrl} />
    <h1>{post.title}</h1>
    <div>
      {renderRichText(post.body as RenderRichTextData<any>)}
    </div>
  </div>
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
        }
      }
    }
  }
`