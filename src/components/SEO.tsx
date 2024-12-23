import type { FC } from 'react';
import React from 'react';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

interface Props {
  title?: string;
  description?: string;
  pathname?: string;
  image?: string;
  children?: React.ReactNode;
}

export const SEO: FC<Props> = ({ title, description, pathname, children, image }) => {
  const { title: defaultTitle, description: defaultDescription, siteUrl } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
    image,
  };

  return (
    <>
      <meta name={'viewport'} content={'width=900'} />
      <title>{seo.title}</title>
      <meta name={'description'} content={seo.description} />
      <meta name={'twitter:card'} content={'summary_large_image'} />
      <meta name={'twitter:title'} content={seo.title} />
      <meta name={'twitter:url'} content={seo.url} />
      <meta name={'twitter:description'} content={seo.description} />
      {seo.image && <meta name={'twitter:image'} content={seo.image} />}
      <meta name={'og:title'} content={seo.title} />
      <meta name={'og:url'} content={seo.url} />
      <meta name={'og:description'} content={seo.description} />
      {seo.image && <meta name={'og:image'} content={seo.image} />}
      <link
        rel={'icon'}
        href={
          "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"
        }
      />
      {children}
    </>
  );
};
