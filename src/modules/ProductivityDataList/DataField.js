import React, { useState, useEffect } from 'react';
import { Box } from '@dentsu-ui/components';
import CreateData from '../CreateData/CreateData';
import Overview from '../Overview/Overview';
import PageController from '../PageController/PageController';
import DataList from './DataList';
import { dataFieldCms as PageContent } from '../../cms';
import { getData } from '../Mock/mockData';
import UploadFile from '../../components/FileUpload/UploadFile';

const DataField = (props) => {
  const [market] = useState('');
  const [dataList, setDataList] = useState(getData());
  const [isDataCreated, setDataCreated] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUploadModal, setIsUploadModal] = useState(false);
  const handleModal = (value) => {
    setIsModalOpen(value)
  }
  useEffect(() => {
    if (isDataCreated) {
      setDataList(getData());
    }
  }, [isDataCreated])
  return (
    <>
      <PageController {...props} setIsUploadModal={setIsUploadModal} />
      <Box m="30px">
        <Overview />
        <CreateData
          cmsData={PageContent}
          market={market}
          isModalOpen={isModalOpen}
          handleModal={handleModal}
          setDataCreated={setDataCreated}
        />
        <UploadFile cmsData={PageContent} modalOpen={isUploadModal} setModalOpen={setIsUploadModal} />
        <DataList cmsData={PageContent} handleModal={handleModal} dataList={dataList} />
      </Box>
    </>
  )
}

export default (DataField);
