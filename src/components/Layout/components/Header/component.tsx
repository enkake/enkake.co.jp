import type { FC } from 'react';
import React from 'react';
import { AppBar, Box, Button, Container, Toolbar } from '@mui/material';
import { Link } from 'gatsby';
import Logo from '../../../graphics/Logo';
import { navItems } from './navItems';
import { NavItem } from './components/NavItem';

export const Component: FC = () => {
  return (
    <AppBar>
      <Container maxWidth={'md'} component={'header'}>
        <Toolbar disableGutters={true}>
          <Box sx={{ flexGrow: 1 }}>
            <Button component={Link} to={'/'} sx={{ p: 0 }}>
              <Logo />
            </Button>
          </Box>
          {navItems.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
