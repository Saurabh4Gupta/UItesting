/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Box } from '@dentsu-ui/components';
import CreateData from '../CreateData/CreateData';
import Overview from '../Overview/Overview';
import PageController from '../PageController/PageController';
import DataList from './DataList';
import { dataFieldCms as PageContent } from '../../cms';
import { getData, getCompletedData } from '../Mock/mockData';
import UploadFile from '../FileUpload/UploadFile';

const DataField = (props) => {
  const { match } = props;
  const { params } = match;
  const { clientCode } = params;
  const [market] = useState('');
  const [ongoingData, setDataList] = useState(getData);
  const [completeData, setCompleteData] = useState(getCompletedData);
  const [isDataCreated, setDataCreated] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUploadModal, setIsUploadModal] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);

  const handleToggleData = (id) => {
    if (tabIndex === 0) {
      const filterCompleteList = ongoingData.data.filter(
        (item) => item.id === id,
      );
      const tempData = [...completeData.completedData, ...filterCompleteList];
      const finalCompletedList = {
        completedCount: tempData.length,
        completedData: tempData,
      };
      const OngoingRequest = ongoingData.data.filter((item) => item.id !== id);
      const filterOngoinglist = {
        totalCount: OngoingRequest.length,
        data: OngoingRequest,
      };
      setDataList(filterOngoinglist);
      setCompleteData(finalCompletedList);
    } else {
      const filterOngoingList = completeData.completedData.filter(
        (item) => item.id === id,
      );
      const tempData = [...ongoingData.data, ...filterOngoingList];
      const finalOngoingList = { totalCount: tempData.length, data: tempData };
      const completedRequest = completeData.completedData.filter(
        (item) => item.id !== id,
      );
      const filterCompletedlist = {
        completedCount: completedRequest.length,
        completedData: completedRequest,
      };
      setDataList(finalOngoingList);
      setCompleteData(filterCompletedlist);
    }
  };

  const deleteRequest = (id) => {
    const OngoingRequest = ongoingData.data.filter((item) => item.id !== id);
    const filterOngoinglist = { totalCount:OngoingRequest.length, data: OngoingRequest }
    setIsDeleteModal(false)
    setDataList(filterOngoinglist)
  }

  const handleTabIndex = (index) => {
    setTabIndex(index);
  };

  const handleModal = (value) => {
    setIsModalOpen(value);
  };
  useEffect(() => {
    if (isDataCreated) {
      setDataList(getData);
    }
  }, [isDataCreated]);
  return (
    <>
      <PageController
        clientCode={clientCode}
        isToShowDataRequest={false}
        setIsUploadModal={setIsUploadModal}
        {...props}
      />
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
          setIsDeleteModal={setIsDeleteModal}
          isDeleteModal={isDeleteModal}
          deleteRequest={deleteRequest}
        />
      </Box>
    </>
  );
};

export default DataField;
