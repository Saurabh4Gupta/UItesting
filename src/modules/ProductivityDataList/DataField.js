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
  const [ongoingData, setDataList] = useState(getData(filterDataBy.market.value));
  const [isUploadModal, setIsUploadModal] = useState(false);

  const handleMarket = (selected) => {
    setFilterDataBy({ market: selected })
  }
  useEffect(() => {
    setDataList(getData(filterDataBy.market.value));
  }, [filterDataBy])

  return (
    <>
      <PageController
        param={param}
        filterDataBy={filterDataBy}
        handleMarket={handleMarket}
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
          />
        </Box>
      </PageController>
    </>
  );
};

export default withPageController(DataField);
