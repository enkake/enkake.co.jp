import * as React from "react"
import { FC } from "react"

interface Props {
  title: string
  description?: string
  image?: string
}

export const SEO: FC<Props> = ({ title, description, image }) => {
  return <>
    <title>{title}</title>
    <meta name="title" content={title} />
    {description && <meta name="description" content={description} />}
    {description && <meta property="og:description" content={description} />}
    {image && <meta property="og:image" content={image} />}
  </>
}