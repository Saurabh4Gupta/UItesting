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
  const { param } = props;
  const query = new URLSearchParams(location.search);
  const clientCode = query.get('client_code');
  const [filterDataBy, setFilterDataBy] = useState({
    market: { label: 'All Markets', value: '' },
  });
  const [ongoingData, setDataList] = useState({ data: [], totalCount: 0 });
  const [isUploadModal, setIsUploadModal] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [originalOngingList, setOriginalOngoingList] = useState(getData(
    filterDataBy.market.value,
  ));

  const searchChangeHandler = (input) => {
    const originalList = originalOngingList.data;
    const updatedList = originalList.filter(
      (d) => d.clientMarket.toLowerCase().includes(input.toLowerCase()) || d.name.toLowerCase().includes(input.toLowerCase()),
    );

    const copyList = { ...ongoingData }

    setDataList({ data: updatedList, totalCount: copyList.totalCount });
  };

  const updateOngoingList = (list) => {
    setOriginalOngoingList(list)
  };

  const handleMarket = (selected) => {
    setLoading(true);
    setFilterDataBy({ market: selected });
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setDataList(getData(filterDataBy.market.value));
    }, 2000);
  }, [filterDataBy]);

  return (
    <>
      <PageController
        param={param}
        filterDataBy={filterDataBy}
        handleMarket={handleMarket}
        pageTitle=""
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
            search={searchChangeHandler}
            updateOngoingList={updateOngoingList}
          />
        </Box>
      </PageController>
    </>
  );
};

export default withPageController(DataField);
