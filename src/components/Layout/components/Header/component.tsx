import type { FC } from "react";
import React from "react";
import { Box, Button, Container, Toolbar } from "@mui/material";
import Logo from "../../../graphics/Logo";
import { navItems } from "./navItems";
import { NavItem } from "./components/NavItem";

export const Component: FC = () => {
  return (
    <Container maxWidth={"md"} component={"header"}>
      <Toolbar disableGutters={true}>
        <Box sx={{ flexGrow: 1 }}>
          <Button LinkComponent={"a"} href={"/"} sx={{ p: 0 }}>
            <Logo />
          </Button>
        </Box>
        {
          navItems.map((item) => (
            <NavItem key={item.label} {...item} />
          ))
        }
      </Toolbar>
    </Container>
  );
}