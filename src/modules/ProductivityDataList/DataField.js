import React, { useState, useEffect } from 'react';
import { Box } from '@dentsu-ui/components';
import CreateData from '../CreateData/CreateData';
import Overview from '../Overview/Overview';
import PageController from '../PageController/PageController';
import DataList from './DataList';
import { dataFieldCms as PageContent } from '../../cms';
import { data } from '../Mock/mockData';
import UploadFile from '../FileUpload/UploadFile';

const DataField = (props) => {
  const [market] = useState('');
  const [ongoingData, setDataList] = useState(data);
  const [completeData, setCompleteData] = useState([]);
  const [isDataCreated, setDataCreated] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUploadModal, setIsUploadModal] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);

  const handleToggleData = (id) => {
    if (tabIndex === 0) {
      const filterOngoinglist = ongoingData.filter((item) => item.id !== id);
      const filterCompleteList = ongoingData.filter((item) => item.id === id);
      setDataList(filterOngoinglist);
      setCompleteData([...completeData, ...filterCompleteList]);
    } else {
      const filterOngoinglist = data.filter((item) => item.id === id);
      const filterCompleteList = completeData.filter((item) => item.id !== id);
      setDataList([...ongoingData, ...filterOngoinglist]);
      setCompleteData([...filterCompleteList]);
    }
  };

  const handleTabIndex = (index) => {
    setTabIndex(index);
  };

  const handleModal = (value) => {
    setIsModalOpen(value);
  };
  useEffect(() => {
    if (isDataCreated) {
      setDataList(data);
    }
  }, [isDataCreated]);

  return (
    <>
      <PageController {...props} setIsUploadModal={setIsUploadModal} />
      <Box m="45px" mb="200px">
        <Overview />
        <CreateData
          cmsData={PageContent}
          market={market}
          isModalOpen={isModalOpen}
          handleModal={handleModal}
          setDataCreated={setDataCreated}
        />
        <UploadFile
          cmsData={PageContent}
          modalOpen={isUploadModal}
          setModalOpen={setIsUploadModal}
        />
        <DataList
          cmsData={PageContent}
          handleModal={handleModal}
          ongoingDataList={ongoingData}
          completeDataList={completeData}
          handleToggleData={handleToggleData}
          tabIndex={tabIndex}
          handleTabIndex={handleTabIndex}
        />
      </Box>
    </>
  );
};

export default DataField;
