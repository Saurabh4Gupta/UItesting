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
  const [dataList, setDataList] = useState(data);
  const [completeData, setCompleteData] = useState([]);
  const [isDataCreated, setDataCreated] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUploadModal, setIsUploadModal] = useState(false);


  const hanldleMoveToComplete = (id) => {
    const filterCompleteList = dataList.filter((item) => item.id === id);
    const filterOngoinglist = dataList.filter((item) => item.id !== id);
    setDataList(filterOngoinglist)
    setCompleteData([...completeData, ...filterCompleteList]);
  }

  const handleModal = (value) => {
    setIsModalOpen(value)
  }
  useEffect(() => {
    if (isDataCreated) {
      setDataList(data);
    }
  }, [isDataCreated])

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
        <UploadFile cmsData={PageContent} modalOpen={isUploadModal} setModalOpen={setIsUploadModal} />
        <DataList
          cmsData={PageContent}
          handleModal={handleModal}
          dataList={dataList}
          completeDataList={completeData}
          hanldleMoveToComplete={hanldleMoveToComplete}
        />
      </Box>
    </>
  )
}

export default (DataField);
