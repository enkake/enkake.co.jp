import * as React from 'react';
import { Link, type HeadFC, type PageProps } from 'gatsby';
import { Toolbar, Paper, Typography, Button } from '@mui/material';
import { grey } from '@mui/material/colors';
import { SEO } from '../components/SEO';
import Layout from '../components/Layout';

const Page: React.FC<PageProps> = () => (
  <Layout>
    <Toolbar />
    <Paper elevation={0} sx={{ p: 6, backgroundColor: grey[100], textAlign: 'center', my: 4 }}>
      <Typography variant={'h4'} sx={{ mb: 4 }} component={'h1'}>
        お探しのページが見つかりません
      </Typography>
      <Button component={Link} to={'/'} variant={'contained'} color={'secondary'} size={'large'}>
        トップページに戻る
      </Button>
    </Paper>
  </Layout>
);

export default Page;

export const Head: HeadFC = () => <SEO title={'お探しのページが見つかりません'} />;
