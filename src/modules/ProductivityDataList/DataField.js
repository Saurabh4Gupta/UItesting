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
    currency: { label: 'GBP (Default)', value: 'gbp' },
    year: { label: 'Year to date', value: '' },
  });
  const [ongoingData, setDataList] = useState(getData);
  const [isUploadModal, setIsUploadModal] = useState(false);

  const handleMarket = (selected) => {
    setFilterDataBy({ market: selected })
  }

  useEffect(() => {
    // fetch data list according to market
  }, [filterDataBy])

  return (
    <>
      <PageController param={param} filterDataBy={filterDataBy} handleMarket={handleMarket} pageTitle="">
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
