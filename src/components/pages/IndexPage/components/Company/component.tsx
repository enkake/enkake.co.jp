import {
  Typography,
  Box,
  Table,
  TableBody,
  TableRow,
  TableCell,
  styled,
  Toolbar,
} from '@mui/material';
import type { FC } from 'react';
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { SectionHeading } from '../../../../SectionHeading';

const tableData = [
  ['会社名', '株式会社 enkake ( 英語名: enkake Inc.)'],
  ['創業年月', '2022年10月26日'],
  ['資本金', '500万円'],
  ['株主構成', '発起人で構成'],
  ['本社所在地', '〒153-0064 東京都目黒区下目黒２丁目１８−３ 目黒花谷ビル 303'],
];

const businesses = [
  '温浴施設ならびに宿泊施設に関するデータベースの企画運営',
  '温浴施設ならびに宿泊施設に関するコンテンツの企画運営',
  '温浴施設ならびに宿泊施設に関する企画運営',
  '温浴施設ならびに宿泊施設に関する経営コンサルティング',
  'その他付随する一切の業務',
];

export const Component: FC = () => {
  return (
    <div id={'company'}>
      <Toolbar />
      <Wrapper sx={{ pt: 4, gap: 4 }}>
        <SectionHeading>
          <Typography variant={'subtitle1'}>会社概要</Typography>
          <Typography variant={'h2'}>Company</Typography>
        </SectionHeading>
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row' }}>
          <Box>
            <StaticImage
              src={'../../../../../images/company.jpg'}
              alt={'浴室'}
              width={300}
              transformOptions={{
                fit: 'cover',
              }}
            />
          </Box>
          <Box>
            <Table>
              <TableBody>
                {tableData.map((data) => (
                  <TableRow key={data[0]}>
                    <TableCell component={'th'}>
                      <Typography variant={'body2'}>{data[0]}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant={'body2'}>{data[1]}</Typography>
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell component={'th'}>
                    <Typography variant={'body2'}>事業内容</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant={'body2'}>
                      <ol>
                        {businesses.map((business) => (
                          <li key={business}>{business}</li>
                        ))}
                      </ol>
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  margin-left: -26px;
  margin-bottom: 6rem;
  td,
  th {
    padding: 0.5rem;
    border-bottom: 0;
  }
  th {
    text-align: right;
    width: 8rem;
    vertical-align: top;
    p {
      margin: 0;
      background-color: #e94709;
      color: white;
      padding: 0.5rem;
      display: inline-block;
    }
  }
  td ol {
    margin: 0;
    padding-top: 0;
    padding-left: 1.5rem;
  }
`;
