import { Box, Stack, styled, Typography } from "@mui/material";
import type { FC } from "react";
import React from "react";
import { SectionHeading } from "../../../../SectionHeading";

export const Component: FC = () => {
  return (
    <Wrapper id={"spirit"} sx={{ pt: 4 }}>
      <SectionHeading>
        <Typography variant={'subtitle1'}>
          スピリット
        </Typography>
        <Typography variant={"h2"}>
          Spirit
        </Typography>
      </SectionHeading>
      <Stack spacing={2} sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <Typography variant={"body1"}>
          enkake はこの基本精神を大切に温泉と向き合っています。
        </Typography>
        <Typography variant={"h3"} className={"noto-sans"} sx={{ fontWeight: 600 }}>
          もらい湯精神
        </Typography>
        <Typography variant={"caption"}>
          ※「温泉に入らせてもらう」という気持ちを忘れない精神
        </Typography>
        <Definitions>
          <dl>
            <dt>感謝する</dt>
            <dd>自然（温泉）に感謝する</dd>
            <dd>地元（地域）に感謝する</dd>
            <dd>隣人（一緒に入っている人）に感謝する</dd>
          </dl>
          <dl>
            <dt>理解する</dt>
            <dd>体のコンディションを理解する</dd>
            <dd>温泉のコンディションを理解する</dd>
            <dd>マナーを理解する</dd>
          </dl>
          <dl>
            <dt>楽しむ</dt>
            <dd>五感で楽しむ</dd>
            <dd>無我になって楽しむ</dd>
            <dd>原状復帰の美学を楽しむ</dd>
          </dl>
        </Definitions>
      </Stack>
    </Wrapper>
  );
}

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  margin-left: -26px;
  margin-bottom: 6rem;
`

const Definitions = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 50px;
  width: 100%;
  dl, dt, dd {
    margin: 0;
    padding: 0;
    }
  dl {
    width: 100%;
  }
  dt {
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 800;
    width: 200px;
    height: 200px;
    border: 5px solid #E94709;
    border-radius: 100%;
    text-align: center;
    line-height: 200px;
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-size: 1.5rem;
  }
  dd {
    list-style: disc;
    display: list-item;
  }
`