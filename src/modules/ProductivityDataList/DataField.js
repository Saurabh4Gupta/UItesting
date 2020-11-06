import React, { useState } from 'react';
import { Box } from '@dentsu-ui/components';
import CreateData from '../CreateData/CreateData';
import Overview from '../Overview/Overview';
import PageController from '../PageController/PageController';
import DataList from './DataList';
import { dataFieldCms as PageContent } from '../../cms';

const DataField = (props) => {
  const [market] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModal = (value) => {
    setIsModalOpen(value)
  }
  return (
    <>
      <PageController {...props} />
      <Box m="30px">
        <Overview />
        <CreateData
          cmsData={PageContent}
          market={market}
          isModalOpen={isModalOpen}
          handleModal={handleModal}
        />
        <DataList cmsData={PageContent} handleModal={handleModal} />
      </Box>
    </>
  )
}

export default (DataField);
