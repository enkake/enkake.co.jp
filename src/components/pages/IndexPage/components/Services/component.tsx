import { Box, styled, Typography } from "@mui/material";
import type { FC } from "react";
import React from "react";
import { SectionHeading } from "../../../../SectionHeading";

export const Component: FC = () => {
  return (
    <Wrapper id={"services"} sx={{ pt: 4 }}>
      <SectionHeading>
        <Typography variant={'subtitle1'}>
          サービス
        </Typography>
        <Typography variant={"h2"}>
          Services
        </Typography>
      </SectionHeading>
    </Wrapper>
  );
}

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: row-reverse;
`