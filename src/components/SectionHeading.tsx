import { Box, styled } from '@mui/material';
import type { FC } from 'react';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const SectionHeading: FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <div>{children}</div>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  position: relative;
  width: 100px;
  height: 500px;
  & > div {
    transform: rotate(90deg) translate(0, -100px);
    transform-origin: top left;
    width: 500px;
    height: 100px;
  }
  & h2 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    text-transform: uppercase;
    font-size: 3rem;
  }
`;
