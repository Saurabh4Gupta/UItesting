/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Box, Tabs } from '@dentsu-ui/components';
import PropTypes from 'prop-types';
import Toast from '@dentsu-ui/components/dist/cjs/components/Toast';
import { useMutation } from '@apollo/react-hooks';
import EmptyTable from './EmptyTable';
import TableList from './TableList';
import CreateData from '../CreateData/CreateData';
import { getCompletedData, getData, data as mockData } from '../Mock/mockData';
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
    updateOngoingList,
    // eslint-disable-next-line react/prop-types
    originalOngingList,
    // eslint-disable-next-line react/prop-types
    setOriginalOngoingList,
    addNewRequest,
  } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [completeData, setCompleteData] = useState({
    completedCount: 0,
    completedData: [],
  });
  const [originalCompleteData, setOriginalCompleteData] = useState(
    getCompletedData,
  );
  const [deleteModalData, setIsDeleteModal] = useState({
    isDeleteModal: false,
    requestId: undefined,
  });

  // const [loadingg, error, data] = useMutation('postcomplete');
  const [tabIndex, setTabIndex] = useState(0);
  const { completedData } = completeData;
  const { data } = dataList;
  const originalCompletedData = originalCompleteData.completedData;
  const [moveToCompleteModelData, setIsMoveToCompleteModel] = useState({ isMoveToComplete: false, requestID: undefined })

  const toast = Toast();

  const searchChangeHandler = (input) => {
    if (tabIndex === 0) {
      const originalList = originalOngingList.data;
      const updatedList = originalList.filter(
        (d) => d.clientMarket.toLowerCase().includes(input.toLowerCase())
          || d.name.toLowerCase().includes(input.toLowerCase()),
      );

      const copyList = { ...dataList };

      setDataList({ data: updatedList, totalCount: copyList.totalCount });
    } else {
      const originalList = originalCompleteData.completedData;
      const updatedList = originalList.filter(
        (d) => d.clientMarket.toLowerCase().includes(input.toLowerCase())
          || d.name.toLowerCase().includes(input.toLowerCase()),
      );
      const copyList = { ...completeData };
      setCompleteData({
        completedData: updatedList,
        completedCount: copyList.completedCount,
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
      values.id = dataList.data.length + completeData.completedData.length + 1;
      values.client = 'Microsoft';
      values.updatedAt = '30/11/20 at 14:32';
      values.clientMarket = `Microsoft ${values.assignTo.label}`;
      await mockData.data.push(values);
      console.log('>>>>>>>>>>', getData());
      setDataList(getData());
      console.log('><<<<<<<<<<<<<<<<<<<<<<<<<<', data);
      return toast({
        title: '',
        content: PageContent.toastRequestCreated,
        status: 'success',
      });
    } catch (error) {
      return null;
    }
  };

  useEffect(() => {
    if (tabIndex === 0) {
      setDataList(getData(market, 'ongoing'))
    } else {
      setDataList(getData(market, 'complete'))
    }
  }, [tabIndex])
  const handleDelete = () => {

  }

  const handleMoveTocomplete = () => {

  }
  // const handleToggleData = (id) => {
  //   if (tabIndex === 0) {
  //     const filterCompleteList = data.filter((item) => {
  //       if (item.id === id) {
  //         item.isCompleted = true;
  //         return true;
  //       }
  //       return false;
  //     });
  //     const tempData = [...completedData, ...filterCompleteList];
  //     const finalCompletedList = {
  //       completedCount: tempData.length,
  //       completedData: tempData,
  //     };
  //     const OngoingRequest = data.filter((item) => item.id !== id);
  //     const filterOngoinglist = {
  //       totalCount: OngoingRequest.length,
  //       data: OngoingRequest,
  //     };
  //     const originaltempData = [
  //       ...originalCompletedData,
  //       ...filterCompleteList,
  //     ];
  //     setDataList(filterOngoinglist);
  //     updateOngoingList(id, false);
  //     setCompleteData(finalCompletedList);
  //     setOriginalCompleteData({
  //       completedCount: originaltempData.length,
  //       completedData: originaltempData,
  //     });
  //     setIsMoveToCompleteModel({ isMoveToComplete: false, requestID: undefined })
  //     return toast({
  //       title: '',
  //       content: PageContent.toastMovedToComplete,
  //       status: 'success',
  //     });
  //   }
  //   //let filteredArray = [];
  //   const filterOngoingList = completedData.filter((item) => {
  //     if (item.id === id) {
  //       item.isCompleted = false;
  //       return true;
  //     }
  //     return false;
  //   });
  //   const tempData = [...data, ...filterOngoingList];
  //   const finalOngoingList = { totalCount: tempData.length, data: tempData };
  //   const completedRequest = completedData.filter((item) => item.id !== id);
  //   const filterCompletedlist = {
  //     completedCount: completedRequest.length,
  //     completedData: completedRequest,
  //   };
  //   setDataList(finalOngoingList);
  //   updateOngoingList(id, true);
  //   setCompleteData(filterCompletedlist);
  //   filteredArray = originalCompleteData.completedData.filter(
  //     (value) => value.id !== id,
  //   );
  //   setOriginalCompleteData({
  //     completedCount: originalCompleteData.completedCount,
  //     completedData: filteredArray,
  //   });
  //   return toast({
  //     title: '',
  //     content: PageContent.toastMovedToOngoing,
  //     status: 'success',
  //   });
  // };

  const deleteRequest = (id) => {
    try {
      const OngoingRequest = data.filter((item) => item.id !== id);
      const filterOngoinglist = {
        totalCount: OngoingRequest.length,
        data: OngoingRequest,
      };
      updateOngoingList(id, false);
      setDataList(filterOngoinglist);
      setIsDeleteModal({ isDeleteModal: false, requestId: undefined });
      return toast({
        title: '',
        content: PageContent.toastRequestDeleted,
        status: 'success',
      });
    } catch (error) {
      return null;
    }
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
                  {originalOngingList.data.length > 0 ? (
                    <TableList
                      data={data}
                      cmsData={cmsData}
                      deleteModalData={deleteModalData}
                      setIsDeleteModal={setIsDeleteModal}
                      setIsMoveToCompleteModel={setIsMoveToCompleteModel}
                      moveToCompleteModelData={moveToCompleteModelData}
                      handleToggleData={() => { }/* handleToggleData */}
                      actionName={cmsData.moveToComplete}
                      deleteRequest={deleteRequest}
                      clientCode={clientCode}
                      search={searchChangeHandler}
                      handleDeleteModel={handleDeleteModel}
                      handleMoveToCompleteModel={handleMoveToCompleteModel}
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
                      handleToggleData={() => { }}// handleToggleData}
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
  setDataList: () => { },
  loading: true,
  updateOngoingList: {},
};
export default DataList;
