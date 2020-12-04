import React from 'react';
import { Box, Card } from '@dentsu-ui/components';
import PropTypes from 'prop-types';

import Stack from '@dentsu-ui/components/dist/cjs/components/Stack';
import Briefing from './Briefing/Briefing';
import OtherProductivityData from './OtherProductivityData/OtherProductivityData';

const RequestSummary = (props) => {
  const { handleEditData, prodRequest } = props;
  return (
    <Box ml="65px" mr="65px" mt="-50px">
      <Card>
        <Stack flexDirection="row">
          <Briefing briefing={prodRequest.briefing} />
          <OtherProductivityData prodRequest={prodRequest} handleEditData={handleEditData} />
        </Stack>
      </Card>
    </Box>
  )
};

RequestSummary.propTypes = {
  prodRequest: PropTypes.object,
  handleEditData: PropTypes.func,
};
RequestSummary.defaultProps = {
  prodRequest: {},
  handleEditData: PropTypes.func,
};

export default RequestSummary;
