import React, { useState } from 'react';
import { Box } from '@dentsu-ui/components';
import CreateData from '../CreateData/CreateData';
import Overview from '../Overview/Overview';
import PageController from '../PageController/PageController';
import DataList from './DataList';
import { dataFieldCms as PageContent } from '../../cms';

const DataField = (props) => {
  const [market] = useState('');
  return (
    <>
      <PageController {...props} />
      <Box m="30px">
        <Overview />
        <CreateData cmsData={PageContent} market={market} />
        <DataList  />
      </Box>
    </>
  );
};
export default DataField;
