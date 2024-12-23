import { Box, Button, Dialog, DialogContent, IconButton, styled, Typography } from '@mui/material';
import type { FC } from 'react';
import React, { useMemo, useState } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import CloseIcon from '@mui/icons-material/Close';
import { SectionHeading } from '../../../../SectionHeading';

interface Props {
  members: Queries.TopQuery['members']['nodes']
}

export const Component: FC<Props> = ({ members }) => {
  const [selectedMember, setSelectedMember] = useState<Queries.TopQuery['members']['nodes'][0] | null>(null);

  const selectedMemberImage = useMemo(() => {
    const data = selectedMember?.picture?.gatsbyImageData;

    if (!data) { return undefined; }

    return getImage(data);
  }, [selectedMember]);

  return (
    <Wrapper id={'members'} sx={{ pt: 4 }}>
      <SectionHeading>
        <Typography variant={'subtitle1'}>メンバー</Typography>
        <Typography variant={'h2'}>Members</Typography>
      </SectionHeading>
      <Members sx={{ flexGrow: 1 }}>
        {members.map((member) => {
          const img = member.picture?.gatsbyImageData ? getImage(member.picture.gatsbyImageData) : undefined;

          return (
            <Box key={member.id} sx={{ mb: 2 }}>
              <Button onClick={() => setSelectedMember(member)} color={"secondary"}>
                {img && <GatsbyImage image={img} alt={member.name ?? ''} />}
                <Typography variant={'h6'}>{member.name}</Typography>
                <Typography variant={'body1'}>{member.nameEn}</Typography>
                <Typography variant={'body2'}>{member.jobTitle}</Typography>
              </Button>
            </Box>
          )
        })}
      </Members>
      <Dialog open={!!selectedMember} onClose={() => setSelectedMember(null)}>
        <IconButton
          aria-label={"close"}
          onClick={() => setSelectedMember(null)}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        {
          selectedMember && (
            <DialogContent sx={{ p: 6 }}>
              <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography variant={'body2'} sx={{ whiteSpace: 'nowrap' }}>{selectedMember.jobTitle}</Typography>
                  <Typography variant={'h6'} sx={{ whiteSpace: 'nowrap' }}>{selectedMember.name}</Typography>
                  <Typography variant={'body1'} sx={{ whiteSpace: 'nowrap', mb: 2 }}>{selectedMember.nameEn}</Typography>
                  <Box sx={{ width: 200 }}>
                    {selectedMemberImage && <GatsbyImage image={selectedMemberImage} alt={selectedMember.name ?? ''} />}
                  </Box>
                </Box>
                <Box>
                  {selectedMember.bio?.bio?.split('\n').map((line, i) => (
                    <Typography key={i} variant={'body2'} sx={{ whiteSpace: 'pre-wrap', mb: 1 }}>{line}</Typography>
                  ))}
                </Box>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 4 }}>
                <OtherJobs>
                  {selectedMember.otherJobs?.map((job, i) => (
                    <li key={i}>
                      <Typography variant={'caption'}>{job}</Typography>
                    </li>
                  ))}
                </OtherJobs>
                <Favorites>
                  <dt><Typography variant={'caption'}>好きな温泉</Typography></dt>
                  <dd><Typography variant={'caption'}>{selectedMember.favoriteOnsenArea}</Typography></dd>
                  <dt><Typography variant={'caption'}>好きな泉質</Typography></dt>
                  <dd><Typography variant={'caption'}>{selectedMember.favoriteSpring}</Typography></dd>
                </Favorites>

              </Box>

            </DialogContent>
          )
        }
      </Dialog>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 4rem;
`;

const Members = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  & > .MuiBox-root {
    width: calc(25% - 2rem);
    button {
      flex-direction: column;
      text-transform: none;
      gap: 0.2rem;
      h6, p {
        margin: 0;
      }
    }
  }
`;

const OtherJobs = styled('ul')`
  margin: 0;
  padding: 0;
  list-style: none;
  flex-grow: 1;
  li {
    margin: 0;
    padding: 0;
    }
  `

const Favorites = styled('dl')`
  margin: 0;
  padding: 0;
  display: flex;
	flex-wrap: wrap;
	align-items: stretch;
	border-bottom: none;
  dt {
    margin: 0 0.5rem 0 0;
    padding: 0;
    font-weight: bold;
    width: 4rem;

  }
  dd {
    margin: 0;
    padding: 0;
    width: calc(100% - 7rem);
  }
  `
