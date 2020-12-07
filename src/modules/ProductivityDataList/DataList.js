/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Box, Tabs } from '@dentsu-ui/components';
import PropTypes from 'prop-types';
import EmptyTable from './EmptyTable';
import TableList from './TableList';
import CreateData from '../CreateData/CreateData';
import { getCompletedData } from '../Mock/mockData';
import Loader from '../../components/loading';

const DataList = (props) => {
  const {
    cmsData,
    clientCode,
    market,
    dataList,
    setDataList,
    loading,
    updateOngoingList,
    // eslint-disable-next-line react/prop-types
    originalOngingList,
    // eslint-disable-next-line react/prop-types
    setOriginalOngoingList,
  } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [completeData, setCompleteData] = useState({ completedCount: 0,
    completedData: [] });
  const [originalCompleteData, setOriginalCompleteData] = useState(getCompletedData);
  const [deleteModalData, setIsDeleteModal] = useState({ isDeleteModal:false, requestId:undefined });
  const [tabIndex, setTabIndex] = useState(0);
  const { completedData } = completeData;
  const { data } = dataList;
  const originalCompletedData  = originalCompleteData.completedData;

  const searchChangeHandler = (input) => {
    if (tabIndex === 0) {
    const originalList = originalOngingList.data;
    const updatedList = originalList.filter(
      (d) => d.clientMarket.toLowerCase().includes(input.toLowerCase()) || d.name.toLowerCase().includes(input.toLowerCase()),
    );

    const copyList = { ...dataList }

    setDataList({ data: updatedList, totalCount: copyList.totalCount });
    } else {
      const originalList = originalCompleteData.completedData;
      const updatedList = originalList.filter(
        (d) => d.clientMarket.toLowerCase().includes(input.toLowerCase()) || d.name.toLowerCase().includes(input.toLowerCase()),
      );
      const copyList = { ...completeData }
      setCompleteData({ completedData: updatedList, completedCount: copyList.completedCount });
    }
  };


  const addRequest = (values) => {
    values.createdAt = new Date();
    values.isActive = true;
    values.isCompleted = false;
    values.year = '2020';
    values.quarter = 'Q3';
    values.isDeleted = false;
    values.id = dataList.data.length + completeData.completedData.length + 1;
    values.client = 'Microsoft';
    values.updatedAt = '30/11/20 at 14:32';
    const tempData = [...dataList.data, values];
    const finalOngoingList = {
      totalCount: tempData.length,
      data: tempData,
    };
    // updateOngoingList(finalOngoingList);
    setDataList(finalOngoingList);
  };
  const handleToggleData = (id) => {
    if (tabIndex === 0) {
      const filterCompleteList = data.filter((item) => {
        if (item.id === id) {
          item.isCompleted = true;
          return true;
        }
        return false;
      });
      const tempData = [...completedData, ...filterCompleteList];
      const finalCompletedList = {
        completedCount: tempData.length,
        completedData: tempData,
      };
      const OngoingRequest = data.filter((item) => item.id !== id);
      const filterOngoinglist = {
        totalCount: OngoingRequest.length,
        data: OngoingRequest,
      };
      setDataList(filterOngoinglist);
      updateOngoingList(id, false);
      setCompleteData(finalCompletedList);
      setOriginalCompleteData(finalCompletedList);
    } else {
      const filterOngoingList = originalCompletedData.filter((item) => {
        if (item.id === id) {
          item.isCompleted = false;
          return true;
        }
        return false;
      });
      const tempData = [...data, ...filterOngoingList];
      const finalOngoingList = { totalCount: tempData.length, data: tempData };
      const completedRequest = originalCompletedData.filter((item) => item.id !== id);
      const filterCompletedlist = {
        completedCount: completedRequest.length,
        completedData: completedRequest,
      };
      setDataList(finalOngoingList);
      updateOngoingList(id, true);
      setCompleteData(filterCompletedlist);
      setOriginalCompleteData(filterCompletedlist);
    }
  };

  const deleteRequest = (id) => {
    const OngoingRequest = data.filter((item) => item.id !== id);
    const filterOngoinglist = {
      totalCount: OngoingRequest.length,
      data: OngoingRequest,
    };
    updateOngoingList(id, false);
    setDataList(filterOngoinglist);
    // updateOngoingList(filterOngoinglist);
    setIsDeleteModal({ isDeleteModal:false, requestId:undefined });
  };

  const handleModal = (value) => {
    setIsModalOpen(value);
  };
  const handleTabIndex = (index) => {
    setTabIndex(index);
  };
  const handleDeleteModel = (value) => {
        setIsDeleteModal({ isDeleteModal:true, requestId:value });
     };
  return (
    <>
      <CreateData
        cmsData={cmsData}
        market={market}
        isModalOpen={isModalOpen}
        handleModal={handleModal}
        addRequest={addRequest}
      />
      <Box mt="30px">
        <Tabs onChange={handleTabIndex} index={tabIndex}>
          <Tabs.List>
            <Tabs.Tab
              label={cmsData.ongoingLabel}
              count={data ? data.length : 0}
            />
            <Tabs.Tab
              label={cmsData.completeLabel}
              count={completedData ? completedData.length : 0}
            />
          </Tabs.List>
          {loading ? (
            <Loader />
          ) : (
            <Tabs.Panels>
              <Tabs.Panel>
                {originalOngingList.data.length > 0  ? (
                  <TableList
                    data={data}
                    cmsData={cmsData}
                    deleteModalData={deleteModalData}
                    setIsDeleteModal={setIsDeleteModal}
                    handleToggleData={handleToggleData}
                    actionName={cmsData.moveToComplete}
                    deleteRequest={deleteRequest}
                    clientCode={clientCode}
                    search={searchChangeHandler}
                    handleDeleteModel={handleDeleteModel}
                  />
                ) : (
                  <EmptyTable
                    defaultText={cmsData.emptyProductivityDatarequestCaption}
                    handleModal={handleModal}
                  />
                )}
              </Tabs.Panel>
              <Tabs.Panel>
                {originalCompleteData.completedData.length > 0 ? (
                  <TableList
                    data={completedData}
                    cmsData={cmsData}
                    actionName={cmsData.moveToOnGoing}
                    handleToggleData={handleToggleData}
                    showStatus={false}
                    clientCode={clientCode}
                    search={searchChangeHandler}
                  />
                ) : (
                  <EmptyTable
                    defaultText={
                      cmsData.emptyCompletedProductivityDatarequestCaption
                    }
                    handleModal={handleModal}
                  />
                )}
              </Tabs.Panel>
            </Tabs.Panels>
          )}
        </Tabs>
      </Box>
    </>
  );
};

DataList.propTypes = {
  cmsData: PropTypes.object,
  clientCode: PropTypes.string,
  market: PropTypes.object || PropTypes.string,
  dataList: PropTypes.array,
  setDataList: PropTypes.func,
  loading: PropTypes.bool,
  updateOngoingList: PropTypes.func,
};
DataList.defaultProps = {
  cmsData: {},
  market: { value: '' },
  dataList: [{}],
  clientCode: '',
  setDataList: () => {},
  loading: true,
  updateOngoingList: {},
};
export default DataList;
