import * as React from 'react';
import MuiLink, { LinkProps } from '@mui/material/Link';
import { Link as GatsbyLink } from 'gatsby';
import { FC, forwardRef } from 'react';

interface Props {
  to: string;
}

const Link: FC<Props & LinkProps> = ({ to, ref: _ref, ...rest }) => (
  <MuiLink component={GatsbyLink} to={to} {...rest} />
)

export default Link;