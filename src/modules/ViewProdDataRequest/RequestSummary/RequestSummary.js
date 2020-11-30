import React from 'react';
import { Box, Card } from '@dentsu-ui/components';

import Stack from '@dentsu-ui/components/dist/cjs/components/Stack';
import Briefing from './Briefing/Briefing';
import OtherProductivityData from './OtherProductivityData/OtherProductivityData';

const RequestSummary = () => (
  <Box m="35px 55px">
    <Card>
      <Stack flexDirection="row">
        <Briefing />
        <OtherProductivityData />
      </Stack>
    </Card>
  </Box>
  );

export default RequestSummary;
