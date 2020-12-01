import React, { useState } from 'react';
import Stack from '@dentsu-ui/components/dist/cjs/components/Stack';
import Subheading from '@dentsu-ui/components/dist/cjs/components/Subheading';
import Caption from '@dentsu-ui/components/dist/cjs/components/Caption';
import Paragraph from '@dentsu-ui/components/dist/cjs/components/Paragraph';
import Box from '@dentsu-ui/components/dist/cjs/components/Box';
import Link from '@dentsu-ui/components/dist/cjs/components/Link';
import PropTypes from 'prop-types';
import { dataFieldCms as PageContent } from '../../../../cms/dataFieldCms';
import ShowMoreBriefing from './ShowMoreBriefing';
import constant from '../../../../utils/constant';

const Briefing = (props) => {
  const { briefing } = props;
  let isShowMoreVisible = false;
  let briefingToDisplay = '';
  const charLimit = constant.BRIEFING_SUMMARY_CHAR_LIMIT;
  const [isShowMoreModalOpen, setIsShowMoreModalOpen] = useState(false);

  const showMoreHandler = (isToshow) => {
    setIsShowMoreModalOpen(isToshow);
  };

  if (briefing.length <= charLimit) {
    briefingToDisplay = briefing;
  } else {
    briefingToDisplay = `${briefing.substring(0, charLimit)}...`;
    isShowMoreVisible = true;
  }

  const showMoreLink = (
    <Link onClick={() => showMoreHandler(true)}>{PageContent.showMore}</Link>
  );

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
        <Paragraph>{briefingToDisplay}</Paragraph>
        <br />
        {isShowMoreVisible && showMoreLink}

        <ShowMoreBriefing
          isToShowModal={isShowMoreModalOpen}
          clicked={showMoreHandler}
          briefing={briefing}
        />
      </Stack>
    </Box>
  );
};

Briefing.propTypes = {
  briefing: PropTypes.string,
};
Briefing.defaultProps = {
  briefing: '',
};

export default Briefing;
