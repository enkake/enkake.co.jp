import type { FC } from 'react';
import React from 'react';
import Layout from '../../Layout';
import { Company, Home, Members, News, Services, Spirit } from './components';

interface Props {
  data: Queries.TopQuery;
}

export const Component: FC<Props> = ({ data }) => {
  return (
    <Layout>
      <Home />
      <Spirit />
      <Services />
      <News posts={data.newsPosts.nodes} />
      <Members />
      <Company />
    </Layout>
  );
};
