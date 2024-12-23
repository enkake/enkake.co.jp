import { Box, Button, Paper, styled, Typography } from "@mui/material";
import type { FC } from "react";
import React from "react";
import { grey } from "@mui/material/colors";
import LaunchIcon from '@mui/icons-material/Launch';
import { SectionHeading } from "../../../../SectionHeading";
import Yuumies from "../../../../graphics/Yuumies";
import XIcon from "../../../../graphics/X";

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
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant={"body1"} sx={{ mb: 2 }}>
          enkake は事業を通じて新しい温泉との出会いのきっかけを提供いたします。
        </Typography>
        <Paper elevation={0} sx={{ p: 4, backgroundColor: grey[100] }}>
          <Typography variant={"h6"} sx={{ mb: 2 }}>
            温泉好きの、温泉好きによる、温泉好きのための、<br />
            <q>お湯</q> から探せる温泉検索サービス。
          </Typography>
          <Typography variant={"body2"}>
            Yuumiesは運営メンバーが実際に入浴するなど独自に集めた温泉データを元に、様々な側面から“温泉をもっと好きになる”サービスを提供します。2025年1月末頃リリース予定。
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", my: 4, flexDirection: "row" }}>
            <Box sx={{ mr: '80px', ml: '20px' }}>
              <Yuumies />
            </Box>
            <Definitions>
              <dl>
                <dt>
                  <span className={"en"}>Database</span>
                  <span className={"ja"}>温泉データベース</span>
                </dt>
                <dd>住所などの基本情報はもちろん、源泉や湯使い<sup>*</sup> に着目したユニークなデータベース</dd>
              </dl>
              <dl>
                <dt>
                  <span className={"en"}>Search</span>
                  <span className={"ja"}>温泉検索サービス</span>
                </dt>
                <dd>旅先でも簡単に「お湯」から温泉を探せるWEBサービス</dd>
              </dl>
              <dl>
                <dt>
                  <span className={"en"}>Media</span>
                  <span className={"ja"}>温泉メディア</span>
                </dt>
                <dd>温泉好きが独自の視点で切り取る、温泉の素晴らしさを伝えるメディア</dd>
              </dl>
            </Definitions>
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button variant={"contained"} color={'secondary'} href={"https://yuumies.jp"} target={"_blank"} startIcon={<LaunchIcon />}>
              Yuumies 公式サイト
            </Button>
            <Button variant={"contained"} color={'secondary'} href={"https://x.com/yuumies_jp"} target={"_blank"} startIcon={<XIcon />}>
              公式 X アカウント
            </Button>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Typography variant={"caption"} >
              <sup>※</sup> 湯使いとは施設ごとに異なる「源泉の扱い方」を表し、Yuumiesでは「加水・加温・循環濾過・添加物（薬剤、入浴剤等）」の4項目の有無で表現します。
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: row-reverse;
`
const Definitions = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  dl, dt, dd {
    margin: 0;
    padding: 0;
    }
  dl {
    position: relative;v
    width: 100%;
    &:before {
      display: block;
      content: " ";
      width: 50px;
      border-bottom: 1px solid black;
      position: absolute;
      top: 50%;
      left: -50px;
    }
    &:first-child:before {
      transform: rotate(-45deg);
      top: 60%;
      left: -43px;
    }
    &:last-child:before {
      transform: rotate(45deg);
      top: 40%;
      left: -43px;
    }
    border:  1px solid black;
    padding: 1rem;
    background-color: white;
    height: 140px;
  }
  dt {
    .en {
      font-family: Montserrat, sans-serif;
      font-weight: 800;
      font-size: 1.5rem;
      margin-right: 0.5rem;
    }
    .ja {
      font-family: 'Noto Sans JP', sans-serif;
      font-weight: 800;
      font-size: 1.2rem;
      color: ${grey[600]}
    }
  }
`