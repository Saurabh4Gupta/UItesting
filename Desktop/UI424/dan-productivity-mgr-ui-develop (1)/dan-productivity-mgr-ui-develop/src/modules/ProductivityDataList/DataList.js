/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef, useContext } from 'react';
import { Box, Tabs } from '@dentsu-ui/components';
import PropTypes from 'prop-types';
import Toast from '@dentsu-ui/components/dist/cjs/components/Toast';
import { useMutation } from '@apollo/client';
import EmptyTable from './EmptyTable';
import TableList from './TableList';
import Loader from '../../components/loading';
import { dataFieldCms as PageContent } from '../../cms';
import { DELETE_DATA_REQUEST } from '../CreateData/mutation';
import { EDIT_DATA_REQUEST_STATUS } from './mutation';
import { FlagIt } from '../../contexts/marketOptions';

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
    handleModal,
    refetch,
    refetchCompletedata,
    // setMarket,
  } = props;
  const [deleteModalData, setIsDeleteModal] = useState({
    isDeleteModal: false,
    requestId: undefined,
  });
  const [selectedFilter, setSelectedFilter] = useState([
    { key: 'totalTenure', value: '' },
  ]);
  const [searchInput, setSearchInput] = useState('');
  const [tabIndex, setTabIndex] = useState(0);
  const { dataList: data, totalCount } = dataList;
  const { dataList: completeData, totalCount: completeCount } = completeDataList

  const [moveToCompleteModelData, setIsMoveToCompleteModel] = useState({
    isMoveToComplete: false,
    requestID: undefined,
  });
  const [deleteDataRequest, { data: deleteData }] = useMutation(
    DELETE_DATA_REQUEST,
  );
  const [editDataRequestStatus, { data: dataStatus }] = useMutation(
    EDIT_DATA_REQUEST_STATUS,
  )

  const toast = Toast();

  // const initialRender = useRef(true);
  useEffect(() => {
    if (deleteData) {
      const { status } = deleteData.deleteDataRequests;
      if (status !== 200) {
        return toast({
          title: PageContent.failurNotificationMsg,
          status: 'error',
        });
      }
      refetch();
      refetchCompletedata();
      return toast({
        title: PageContent.toastRequestDeleted,
        status: 'success',
      });
    }
  }, [deleteData]);

  useEffect(() => {
    if (dataStatus) {
      const { status } = dataStatus.editDataRequestStatus;
      if (status !== 200) {
        return toast({
          title: PageContent.failurNotificationMsg,
          status: 'error',
        });
      }
      refetch();
      refetchCompletedata();
    }
  }, [dataStatus]);

  // useEffect(() => {
  //   if (initialRender.current) {
  //     initialRender.current = false;
  //   } else if (tabIndex === 0) {
  //     setDataList(getData(market.value, 'ongoing'));
  //     setCompleteDataList(getData(market.value, 'complete'));
  //   } else {
  //     setCompleteDataList(getData(market.value, 'complete'));
  //     setDataList(getData(market.value, 'ongoing'));
  //   }
  // }, [market, tabIndex]);

  const getFilteredList = (data, searchInput, filterInput) => {
    let updatedList = data.filter(
      (d) => d.clientMarket.toLowerCase().includes(searchInput.toLowerCase())
        || d.name.toLowerCase().includes(searchInput.toLowerCase()),
    );
    if (filterInput !== '') {
      updatedList = updatedList.filter((key) => key.totalTenure.includes(filterInput));
    }
    return updatedList;
  };

  // useEffect(() => {
  //   const requestStatus = tabIndex === 0 ? 'ongoing' : 'complete';
  //   const allDataList = getData(market.value, requestStatus);
  //   const filteredList = getFilteredList(
  //     allDataList.data,
  //     searchInput,
  //     selectedFilter[0].value,
  //   );
  //   if (tabIndex === 0) {
  //     setDataList({ data: filteredList, totalCount: allDataList.totalCount });
  //   }
  //   if (tabIndex === 1) {
  //     setCompleteDataList({
  //       data: filteredList,
  //       totalCount: allDataList.totalCount,
  //     });
  //   }
  // }, [searchInput, selectedFilter]);
  const userPermissionInfo = useContext(FlagIt);

  let userCreatePermission = false;
  userPermissionInfo.forEach(item => {
    if (item.resource === 'PDR') {
      userCreatePermission = true;
    }
  })
  const searchChangeHandler = (input) => {
    setSearchInput(input);
  };

  const handleFilter = (input) => {
    setSelectedFilter(input);
  };

  const handleDelete = (requestId) => {
    deleteDataRequest({ variables: { id: requestId } });
  };

  const handleMoveToCompleteData = (requestId) => {
    editDataRequestStatus({ variables: { data: { id: requestId, isComplete: true } } })

    return toast({
      title: '',
      content: PageContent.toastMovedToComplete,
      status: 'success',
    });
  };

  const handleMoveToOngoing = (requestId) => {
    editDataRequestStatus({ variables: { data: { id: requestId, isComplete: false } } })

    return toast({
      title: '',
      content: PageContent.toastMovedToOngoing,
      status: 'success',
    });
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
      <Box mt="30px">
        <br />
        <Tabs>
          <Tabs.List>
            <Tabs.Tab label={cmsData.ongoingLabel} count={totalCount} />
            <Tabs.Tab
              label={cmsData.completeLabel}
              count={completeCount}
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
                    handleFilter={handleFilter}
                    selectedFilter={selectedFilter}
                  />
                  ) : (
                    userCreatePermission === true && (
                      <EmptyTable
                        defaultText={cmsData.emptyProductivityDatarequestCaption}
                        handleModal={handleModal}
                      />
                    )
                    )}
              </Tabs.Panel>
              <Tabs.Panel>
                {completeDataList.totalCount > 0 ? (
                  <TableList
                    data={completeData}
                    cmsData={cmsData}
                    actionName={cmsData.moveToOnGoing}
                    handleMoveToOngoing={handleMoveToOngoing}
                    showStatus={false}
                    clientCode={clientCode}
                    search={searchChangeHandler}
                    handleFilter={handleFilter}
                    selectedFilter={selectedFilter}
                  />
                  ) : (
                    userCreatePermission === true && (
                    <EmptyTable
                      defaultText={
                          cmsData.emptyCompletedProductivityDatarequestCaption
                        }
                      handleModal={handleModal}
                    />
                    )
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
  setDataList: () => { },
  loading: true,
};
export default DataList;
