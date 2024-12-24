import { Box, Button, Container } from '@mui/material';
import type { FC } from 'react';
import React from 'react';
import { Link } from 'gatsby';
import { navItems } from './navItems';

export const Component: FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        py: 4,
        mt: 2,
      }}
    >
      <Container maxWidth={'md'} component={'footer'}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          {navItems.map((item) => {
            const isExternal = item.href.startsWith('http');

            return (
              <Box key={item.label} sx={{ mx: 1 }}>
                {isExternal ? (
                  <Button
                    LinkComponent={'a'}
                    href={item.href}
                    sx={{ color: 'white' }}
                    target={'_blank'}
                  >
                    {item.label}
                  </Button>
                ) : (
                  <Button
                    component={Link}
                    to={item.href}
                    sx={{ color: 'white' }}>
                    {item.label}
                  </Button>
                )}
              </Box>
            );
          })}
        </Box>
        <Box sx={{ mt: 2 }}>&copy; {new Date().getFullYear()} enkake Inc.</Box>
      </Container>
    </Box>
  );
};
