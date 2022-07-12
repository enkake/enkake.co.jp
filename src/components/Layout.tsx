import { Container, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import { FC } from "react";
import theme from "../theme";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container disableGutters maxWidth="md" sx={{ pt: 8, pb: 6 }}>
        {children}
      </Container>
    </ThemeProvider>
  )
}

export default Layout;