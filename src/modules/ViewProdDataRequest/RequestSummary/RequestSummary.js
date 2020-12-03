import React from 'react';
import { Card } from '@dentsu-ui/components';
import PropTypes from 'prop-types';

import Stack from '@dentsu-ui/components/dist/cjs/components/Stack';
import Briefing from './Briefing/Briefing';
import OtherProductivityData from './OtherProductivityData/OtherProductivityData';

const RequestSummary = ({ prodRequest }) => (
  <Card>
    <Stack flexDirection="row">
      <Briefing briefing={prodRequest.briefing} />
      <OtherProductivityData prodRequest={prodRequest} />
    </Stack>
  </Card>
);

RequestSummary.propTypes = {
  prodRequest: PropTypes.object,
};
RequestSummary.defaultProps = {
  prodRequest: {},
};

export default RequestSummary;
