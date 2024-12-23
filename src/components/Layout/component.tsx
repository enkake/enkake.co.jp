import type { FC } from 'react';
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Container, CssBaseline } from '@mui/material';
import theme from '../../styles/theme';
import Header from './components/Header';
import Footer from './components/Footer';
import '../../styles/app.css';

interface Props {
  children: React.ReactNode;
}

export const Component: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container maxWidth={'md'} component={'main'}>
        {children}
      </Container>
      <Footer />
    </ThemeProvider>
  );
};
