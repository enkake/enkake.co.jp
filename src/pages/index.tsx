import type { HeadFC, PageProps } from 'gatsby';
import type { FC } from 'react';
import React from 'react';
import { SEO } from '../components/SEO';
import IndexPage from '../components/pages/IndexPage';

const Page: FC<PageProps> = () => <IndexPage />

export default Page;

export const Head: HeadFC = () => <SEO />;
