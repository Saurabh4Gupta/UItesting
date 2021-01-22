import React from 'react';
import { Card } from '@dentsu-ui/components';
import PropTypes from 'prop-types';

import Stack from '@dentsu-ui/components/dist/cjs/components/Stack';
import Briefing from './Briefing/Briefing';
import OtherProductivityData from './OtherProductivityData/OtherProductivityData';

const RequestSummary = (props) => {
  const { handleEditData, prodRequest, name, localMarket } = props;
  return (
    <Card>
      <Stack flexDirection="row">
        <Briefing briefing={prodRequest.briefing} />
        <OtherProductivityData
          prodRequest={prodRequest}
          handleEditData={handleEditData}
          name={name}
          localMarket={localMarket}
        />
      </Stack>
    </Card>
  )
};

RequestSummary.propTypes = {
  prodRequest: PropTypes.object,
  handleEditData: PropTypes.func,
  name: PropTypes.string,
  localMarket: PropTypes.string,
};
RequestSummary.defaultProps = {
  prodRequest: {},
  handleEditData: PropTypes.func,
  name: PropTypes.string,
  localMarket: PropTypes.string,
};

export default RequestSummary;
