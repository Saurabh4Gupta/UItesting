import React, { useState } from 'react';
import Stack from '@dentsu-ui/components/dist/cjs/components/Stack';
import Subheading from '@dentsu-ui/components/dist/cjs/components/Subheading';
import Caption from '@dentsu-ui/components/dist/cjs/components/Caption';
import Paragraph from '@dentsu-ui/components/dist/cjs/components/Paragraph';
import Box from '@dentsu-ui/components/dist/cjs/components/Box';
import Link from '@dentsu-ui/components/dist/cjs/components/Link';
import { dataFieldCms as PageContent } from '../../../../cms/dataFieldCms';
import ShowMoreBriefing from './ShowMoreBriefing';

const Briefing = () => {
  const briefing = `Lorem Ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been the industrys standard dummy text ever
  since the 1500s, when an unknown printer took a galley of type and
  scrambled it to make a type specimen book. It has survived not only
  five centuries, but also the leap into electronic typesetting,
  remaining essentially unchanged. It was popularised in the 1960s with
  the release of Letraset sheets containing Lorem Ipsum passages, and
  more recently with desktop publishing software like Aldus PageMaker
  including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
  the printing industry.Lorem Ipsum is simply dummy text of the printing
  and typesetting industry. Lorem Ipsum has been the industrys standard
  dummy text ever since the 1500s and it still is.`;
  const [isShowMoreModalOpen, setIsShowMoreModalOpen] = useState(false);

  const showMoreHandler = (isToshow) => {
    setIsShowMoreModalOpen(isToshow);
  };

  return (
    <Box width="70%" mr="40px">
      <Stack flexDirection="column">
        <Stack flexDirection="row">
          <Subheading style={{ fontSize: '20px' }}>
            {PageContent.productivityRequest}
          </Subheading>
        </Stack>
        <Box mt="20px" mb="10px">
          <Caption style={{ color: 'gray' }}>
            {' '}
            {PageContent.briefLabel}
          </Caption>
        </Box>
        <Paragraph>{briefing}</Paragraph>
        <br />
        <Link onClick={() => showMoreHandler(true)}>
          {PageContent.showMore}
        </Link>
        <ShowMoreBriefing
          isToShowModal={isShowMoreModalOpen}
          clicked={showMoreHandler}
          briefing={briefing}
        />
      </Stack>
    </Box>
  );
};

export default Briefing;
