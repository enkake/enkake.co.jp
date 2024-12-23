import {
  Box,
  styled,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  Link as MuiLink,
  Toolbar,
} from '@mui/material';
import type { FC } from 'react';
import React from 'react';
import { Link } from 'gatsby';
import { formatDate } from 'date-fns';
import { SectionHeading } from '../../../../SectionHeading';

interface Props {
  posts: Queries.TopQuery['newsPosts']['nodes'];
}

export const Component: FC<Props> = ({ posts }) => {
  return (
    <div id={'news'}>
      <Toolbar />
      <Wrapper sx={{ pt: 4, gap: 4 }}>
        <SectionHeading>
          <Typography variant={'subtitle1'}>最新情報</Typography>
          <Typography variant={'h2'}>News</Typography>
        </SectionHeading>
        <Box sx={{ flexGrow: 1 }}>
          <Table>
            <TableBody>
              {posts.map((post) => (
                <TableRow key={post.slug}>
                  <TableCell sx={{ width: '8rem' }}>
                    <Typography variant={'body2'}>
                      {post.createdAt && formatDate(post.createdAt, 'yyyy-MM-dd')}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <MuiLink component={Link} to={`/news/${post.slug}`}>
                      <Typography variant={'body2'}>{post.title}</Typography>
                    </MuiLink>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  margin-left: -26px;
  margin-bottom: 6rem;
`;
