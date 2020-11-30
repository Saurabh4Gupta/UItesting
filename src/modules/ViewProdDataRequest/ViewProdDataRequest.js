import React from 'react';

import PageController from '../PageController/PageController';
import RequestSummary from './RequestSummary/RequestSummary';

const ViewProdDataRequest = (props) => (
  <>
    <PageController isToShowDataRequest setIsUploadModal={false} {...props} />
    <RequestSummary />
  </>
  );

export default ViewProdDataRequest;
