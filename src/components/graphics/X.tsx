/* eslint-disable react/jsx-curly-brace-presence */
import type { FC } from 'react';
import React from 'react';

interface Props {
  width?: number;
}

const X: FC<Props> = ({ width = 14 }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width, display: 'block' }}
    x="0px"
    y="0px"
    viewBox="0 0 1200 1227"
  >
    <path
      style={{ fill: '#fff' }}
      d="M714.2,519.3L1160.9,0H1055L667.1,450.9L357.3,0H0l468.5,681.8L0,1226.4h105.9l409.6-476.2l327.2,476.2H1200
	L714.2,519.3L714.2,519.3z M569.2,687.8l-47.5-67.9L144,79.7h162.6l304.8,436l47.5,67.9l396.2,566.7H892.5L569.2,687.8L569.2,687.8z
	"
    />
  </svg>
);

export default X;
