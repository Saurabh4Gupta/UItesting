/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Box } from '@dentsu-ui/components';
import { useLocation } from 'react-router';
import PageController from '../PageController/PageController';
import DataList from './DataList';
import { dataFieldCms as PageContent } from '../../cms';
import { getData } from '../Mock/mockData';
import UploadFile from '../FileUpload/UploadFile';
import withPageController from '../../hoc/withPageController';

const DataField = (props) => {
  const location = useLocation();
  const state = { location }
  const { param  } = props;
  const query = new URLSearchParams(location.search);
  const clientCode = query.get('client_code');
  const [filterDataBy, setFilterDataBy] = useState({
    market: { label: 'All Markets', value: '' },
  });
  const [ongoingData, setDataList] = useState({ data: [], totalCount: 0 });
  const [isUploadModal, setIsUploadModal] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [originalOngingList, setOriginalOngoingList] = useState(
    getData(filterDataBy.market.value),
  );

  const updateOngoingList = (id, isToAdd) => {
    let filteredArray = [];

    const orignalArray = getData(filterDataBy.market.value).data;

    if (isToAdd) {
      const newArray = orignalArray.find((a) => a.id === id);

      filteredArray = [...originalOngingList.data];
      filteredArray.push(newArray);
    } else {
      filteredArray = originalOngingList.data.filter(
        (value) => value.id !== id,
      );
    }

    setOriginalOngoingList({
      data: filteredArray,
      totalCount: ongoingData.totalCount,
    });
  };

  if (state) {
    const requestId = { state }
    console.log('[REQUEST ID MOVED TO COMPLETE] =>', requestId)
  }


  const addNewRequest = (request) => {
    const orignalArray = getData(filterDataBy.market.value).data;
    const filteredArray = [...orignalArray, request];

    setOriginalOngoingList({
      data: filteredArray,
      totalCount: filteredArray.length,
    });
  };

  const handleMarket = (selected) => {
    setLoading(true);
    setFilterDataBy({ market: selected });
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setDataList(getData(filterDataBy.market.value));
      setOriginalOngoingList(getData(filterDataBy.market.value));
    }, 2000);
  }, [filterDataBy]);

  return (
    <>
      <PageController
        param={param}
        filterDataBy={filterDataBy}
        handleMarket={handleMarket}
        pageTitle=""
        pageMetadata="Client Overview"
        isCompleted=""
      >
        <Box mb="200px">
          <UploadFile
            cmsData={PageContent}
            modalOpen={isUploadModal}
            setModalOpen={setIsUploadModal}
          />
          <DataList
            cmsData={PageContent}
            market={filterDataBy.market}
            clientCode={clientCode}
            dataList={ongoingData}
            setDataList={setDataList}
            loading={isLoading}
            updateOngoingList={updateOngoingList}
            originalOngingList={originalOngingList}
            setOriginalOngoingList={setOriginalOngoingList}
            addNewRequest={addNewRequest}
          />
        </Box>
      </PageController>
    </>
  );
};

export default withPageController(DataField);
