import React from 'react';
import { Box, Card } from '@dentsu-ui/components';

import Stack from '@dentsu-ui/components/dist/cjs/components/Stack';
import { useLocation } from 'react-router';
import Briefing from './Briefing/Briefing';
import OtherProductivityData from './OtherProductivityData/OtherProductivityData';
import { data as prodRequests } from '../../Mock/mockData';

const RequestSummary = () => {
  const { data } = prodRequests;
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const requestId = query.get('request_id');
  const prodRequest = data.find((request) => request.id === +requestId);
  return (
    <Box m="35px 55px">
      <Card>
        <Stack flexDirection="row">
          <Briefing briefing={prodRequest.briefing} />
          <OtherProductivityData prodRequest={prodRequest} />
        </Stack>
      </Card>
    </Box>
  );
};

export default RequestSummary;
