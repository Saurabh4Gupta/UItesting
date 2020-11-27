/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Box, Tabs } from '@dentsu-ui/components';
import PropTypes from 'prop-types';
import EmptyTable from './EmptyTable';
import TableList from './TableList';
import CreateData from '../CreateData/CreateData';
import { getCompletedData } from '../Mock/mockData';

const DataList = (props) => {
  const {
    cmsData,
    clientCode,
    market,
    dataList,
    setDataList,
  } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [completeData, setCompleteData] = useState(getCompletedData);
  const [isDeleteModal, setIsDeleteModal] = useState({ value: false, id: undefined });
  const [tabIndex, setTabIndex] = useState(0);
  const { completedData } = completeData;
  const { data } = dataList;


  const addRequest = (values) => {
    values.createdAt = new Date();
    values.isActive = true;
    values.year = '2020';
    values.quarter = 'Q3';
    values.isDeleted = false;
    values.id = dataList.data.length + 1;
    values.client = 'Microsoft';
    values.updatedAt = '30/11/20 at 14:32';
    const tempData = [...dataList.data, values];
    const finalOngoingList = {
      totalCount: tempData.length,
      data: tempData,
    };
    setDataList(finalOngoingList);
  };
  const handleToggleData = (id) => {
    if (tabIndex === 0) {
      const filterCompleteList = data.filter(
        (item) => item.id === id,
      );
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
      setCompleteData(finalCompletedList);
    } else {
      const filterOngoingList = completedData.filter(
        (item) => item.id === id,
      );
      const tempData = [...data, ...filterOngoingList];
      const finalOngoingList = { totalCount: tempData.length, data: tempData };
      const completedRequest = completedData.filter(
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
    const OngoingRequest = data.filter(
      (item) => item.id !== id,
    );
    const filterOngoinglist = {
      totalCount: OngoingRequest.length,
      data: OngoingRequest,
    };
    setDataList(filterOngoinglist)
    setIsDeleteModal({ value: false });
  };
  const handleDeletItem = () => {
    deleteRequest(isDeleteModal.id)
  };

  const handleModal = (value) => {
    setIsModalOpen(value);
  };
  const handleTabIndex = (index) => {
    setTabIndex(index);
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
            <Tabs.Tab label={cmsData.ongoingLabel} count={data.length} />
            <Tabs.Tab
              label={cmsData.completeLabel}
              count={completedData.length}
            />
          </Tabs.List>
          <Tabs.Panels>
            <Tabs.Panel>
              {data.length > 0 ? (
                <TableList
                  data={data}
                  cmsData={cmsData}
                  isDeleteModal={isDeleteModal}
                  setIsDeleteModal={setIsDeleteModal}
                  handleToggleData={handleToggleData}
                  actionName={cmsData.moveToComplete}
                  handleDeletItem={handleDeletItem}
                  clientCode={clientCode}

                />
              ) : (
                <EmptyTable
                  defaultText={cmsData.emptyProductivityDatarequestCaption}
                  handleModal={handleModal}
                />
                )}
            </Tabs.Panel>
            <Tabs.Panel>
              {completedData.length > 0 ? (
                <TableList
                  data={completedData}
                  cmsData={cmsData}
                  isDeleteModal={isDeleteModal}
                  setIsDeleteModal={setIsDeleteModal}
                  actionName={cmsData.moveToOnGoing}
                  handleToggleData={handleToggleData}
                  showStatus={false}
                  clientCode={clientCode}
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
        </Tabs>
      </Box>
    </>
  );
};

DataList.propTypes = {
  cmsData: PropTypes.object,
  handleModal: PropTypes.func,
  ongoingDataList: PropTypes.object,
  completeDataList: PropTypes.object,
  handleToggleData: PropTypes.func.isRequired,
  tabIndex: PropTypes.number.isRequired,
  handleTabIndex: PropTypes.func.isRequired,
  handleDeleteModel: PropTypes.func.isRequired,
  clientCode: PropTypes.string,
};
DataList.defaultProps = {
  cmsData: {},
  handleModal: () => { },
  ongoingDataList: {},
  completeDataList: [],
  clientCode: '',
};
export default DataList;
