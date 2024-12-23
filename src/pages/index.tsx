import { graphql, type HeadFC, type PageProps } from 'gatsby';
import type { FC } from 'react';
import React from 'react';
import { SEO } from '../components/SEO';
import IndexPage from '../components/pages/IndexPage';

interface Props extends PageProps {
  data: Queries.TopQuery;
}

const Page: FC<Props> = ({ data }) => <IndexPage data={data} />;

export default Page;

export const Head: HeadFC = () => <SEO />;

export const pageQuery = graphql`
  query Top {
    newsPosts: allContentfulPost(limit: 5, sort: { createdAt: DESC }) {
      nodes {
        slug
        title
        createdAt
      }
    }
  }
`;
