import { Box, Button as MuiButton, styled } from "@mui/material";
import type { FC } from "react";
import React from "react";

interface Props {
  label: string;
  anchor: string;
}

export const NavItem: FC<Props> = ({ label, anchor }) => {
  return (
    <Box key={label} sx={{ mx: 1 }}>
      <Button LinkComponent={"a"} href={`/#${anchor}`}>
        {label}
      </Button>
    </Box>
  );
}

const Button = styled(MuiButton)({
  color: "black",
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: 800,
});