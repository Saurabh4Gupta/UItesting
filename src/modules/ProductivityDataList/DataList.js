/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { Box, Tabs } from '@dentsu-ui/components';
import PropTypes from 'prop-types';
import Toast from '@dentsu-ui/components/dist/cjs/components/Toast';
import EmptyTable from './EmptyTable';
import TableList from './TableList';
import CreateData from '../CreateData/CreateData';
import { getData, data as mockData } from '../Mock/mockData';
import Loader from '../../components/loading';
import { dataFieldCms as PageContent } from '../../cms';

const DataList = (props) => {
  const {
    cmsData,
    clientCode,
    market,
    dataList,
    setDataList,
    loading,
    completeDataList,
    setCompleteDataList,
    setMarket,
  } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteModalData, setIsDeleteModal] = useState({
    isDeleteModal: false,
    requestId: undefined,
  });
  const [tabIndex, setTabIndex] = useState(0);
  const { data } = dataList;
  const [moveToCompleteModelData, setIsMoveToCompleteModel] = useState({
    isMoveToComplete: false,
    requestID: undefined,
  });

  const toast = Toast();

  const initialRender = useRef(true);

   useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else if (tabIndex === 0) {
      setDataList(getData(market.value, 'ongoing'));
      setCompleteDataList(getData(market.value, 'complete'));
    } else {
      setCompleteDataList(getData(market.value, 'complete'));
      setDataList(getData(market.value, 'ongoing'));
    }
  }, [market, tabIndex]);

  const getFilteredList = (data, searchInput) => {
    const updatedList = data.filter(
      (d) => d.clientMarket.toLowerCase().includes(searchInput.toLowerCase())
        || d.name.toLowerCase().includes(searchInput.toLowerCase()),
    );
    return updatedList;
  };

  const searchChangeHandler = (input) => {
    const requestStatus = tabIndex === 0 ? 'ongoing' : 'complete';
    const allDataList = getData(market.value, requestStatus);
    const filteredList = getFilteredList(allDataList.data, input);
    if (tabIndex === 0) {
      setDataList({ data: filteredList, totalCount: allDataList.totalCount });
    }
    if (tabIndex === 1) {
      setCompleteDataList({
        data: filteredList,
        totalCount: allDataList.totalCount,
      });
    }
  };

  const addRequest = async (values) => {
    try {
      values.createdAt = new Date();
      values.isActive = true;
      values.isCompleted = false;
      values.year = '2020';
      values.quarter = 'Q3';
      values.isDeleted = false;
      values.id = new Date().getTime();
      values.client = 'Microsoft';
      values.updatedAt = '30/11/20 at 14:32';
      values.clientMarket = `Microsoft ${values.localMarket.label}`;
      await mockData.data.push(values);
      setDataList(getData(market.value, 'ongoing'));
      if (values.localMarket.value !== market.value) {
        setMarket({ value: '', label: 'All markets' });
      }
      return toast({
        title: '',
        content: PageContent.toastRequestCreated,
        status: 'success',
      });
    } catch (error) {
      return null;
    }
  };

  const handleDelete = (id) => {
    mockData.data.forEach((item) => {
      if (item.id === id) {
        item.isDeleted = true;
        return true;
      }
      return false;
    });
    setDataList(getData(market.value, 'ongoing'));

    return toast({
      title: '',
      content: PageContent.toastRequestDeleted,
      status: 'success',
    });
  };

  const handleMoveToCompleteData = (id) => {
    mockData.data.forEach((item) => {
      if (item.id === id) {
        item.isCompleted = true;
        return true;
      }
      return false;
    });
    setDataList(getData(market.value, 'ongoing'));
    setCompleteDataList(getData(market.value, 'complete'));

    return toast({
      title: '',
      content: PageContent.toastMovedToComplete,
      status: 'success',
    });
  };

  const handleMoveToOngoing = (id) => {
    mockData.data.forEach((item) => {
      if (item.id === id) {
        item.isCompleted = false;
        return true;
      }
      return false;
    });
    setDataList(getData(market.value, 'ongoing'));
    setCompleteDataList(getData(market.value, 'complete'));

    return toast({
      title: '',
      content: PageContent.toastMovedToOngoing,
      status: 'success',
    });
  };

  const handleModal = (value) => {
    setIsModalOpen(value);
  };
  const handleTabIndex = (index) => {
    setTabIndex(index);
  };
  const handleDeleteModel = (value) => {
    setIsDeleteModal({ isDeleteModal: true, requestId: value });
  };
  const handleMoveToCompleteModel = (value) => {
    setIsMoveToCompleteModel({ isMoveToComplete: true, requestID: value });
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
              count={dataList.totalCount}
            />
            <Tabs.Tab
              label={cmsData.completeLabel}
              count={completeDataList.totalCount}
            />
          </Tabs.List>
          {loading ? (
            <Loader />
          ) : (
            <Tabs.Panels>
              <Tabs.Panel>
                {dataList.totalCount > 0 ? (
                  <TableList
                    data={data}
                    cmsData={cmsData}
                    deleteModalData={deleteModalData}
                    setIsDeleteModal={setIsDeleteModal}
                    setIsMoveToCompleteModel={setIsMoveToCompleteModel}
                    moveToCompleteModelData={moveToCompleteModelData}
                    actionName={
                      tabIndex === 0
                        ? cmsData.moveToComplete
                        : cmsData.moveToOnGoing
                    }
                    handleDelete={handleDelete}
                    clientCode={clientCode}
                    search={searchChangeHandler}
                    handleDeleteModel={handleDeleteModel}
                    handleMoveToCompleteModel={handleMoveToCompleteModel}
                    handleMoveToCompleteData={handleMoveToCompleteData}
                    showStatus={tabIndex === 0}
                  />
                ) : (
                  <EmptyTable
                    defaultText={cmsData.emptyProductivityDatarequestCaption}
                    handleModal={handleModal}
                  />
                )}
              </Tabs.Panel>
              <Tabs.Panel>
                {completeDataList.totalCount > 0 ? (
                  <TableList
                    data={completeDataList.data}
                    cmsData={cmsData}
                    actionName={cmsData.moveToOnGoing}
                    handleMoveToOngoing={handleMoveToOngoing}
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
  dataList: PropTypes.object,
  setDataList: PropTypes.func,
  loading: PropTypes.bool,
};
DataList.defaultProps = {
  cmsData: {},
  market: { value: '' },
  dataList: {},
  clientCode: '',
  setDataList: () => {},
  loading: true,
};
export default DataList;
