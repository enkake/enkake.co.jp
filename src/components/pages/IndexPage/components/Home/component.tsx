import { Box, styled, Typography } from "@mui/material";
import type { FC } from "react";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { SectionHeading } from "../../../../SectionHeading";

export const Component: FC = () => {
  return (
    <Wrapper id={"home"} sx={{ pt: 4 }}>
      <SectionHeading>
        <Typography variant={'subtitle1'} className={"montserrat"}>
          Connecting Japan&apos;s <q>ONSEN</q> culture to the future.
        </Typography>
        <Typography variant={'subtitle1'}>
          enkake が目指すもの
        </Typography>
        <Typography variant={"h2"}>
          Vision
        </Typography>
      </SectionHeading>
      <Box sx={{ flexGrow: 1, position: 'relative', height: '440px', overflow: 'hidden' }}>
        <Box sx={{ pr: 4 }}>
          <StaticImage
            src={"../../../../../images/bg-vision.jpg"}
            alt={"浴室"}
            transformOptions={{
              fit: 'cover',
            }} />
        </Box>
        <Box>
          <Catchphrase variant={"h2"}>
            <div className={"text"}>
              日本の温泉文化を、未来へつなぐ。
            </div>
            <div className={"arrow"}>
              &nbsp;
            </div>
          </Catchphrase>
          <Tagline variant={"body2"}>
            enkakeが目指すのは、<br />
            温泉を通じて人々が明るい未来を楽しむ世界。<br />
            その実現のため、<br />
            新しい温泉との出会いのきっかけを、<br />
            事業を通して多くの人々へ届けます。
          </Tagline>
        </Box>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: row-reverse;
`

const Catchphrase = styled(Typography)`
  --s: 20px;
  --shape: polygon(0 0,calc(100% - var(--s)) 0,100% 50%,calc(100% - var(--s)) 100%,0 100%);

  font-family: 'Noto Serif JP', serif;
  font-weight: 400;
  font-size: 2rem;
  position: absolute;
  top: 50%;
  right: 0;
  & > .text {
    color: white;
    background-color: black;
    position: relative;
    right: 8px;
    line-height: 1.8;
    padding-inline: .3em calc(var(--s) + .3em);
    padding-left: 0.3em;
    clip-path: var(--shape);
    width: fit-content;
    z-index: 1;
  }
  & > .arrow {
    position: absolute;
    top: 0;
    right: 0;
    line-height: 1.8;
    padding-inline: .3em calc(var(--s) + .3em);
    padding-left: 0.3em;
    clip-path: var(--shape);
    background-color: #E94709;
    z-index: 0;
  }

`

const Tagline = styled(Typography)`
  writing-mode: vertical-rl;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 600;
  font-size: 1.2rem;
  position: absolute;
  top: 0;
  left: 2rem;
  color: #E94709;
  background-color: white;
  z-index: 1;
  padding: 0.5rem;
`