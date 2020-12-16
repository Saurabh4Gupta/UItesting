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
  const [market, setMarket] = useState({ value: '', label: 'All markets' });
  const [dataList, setDataList] = useState({ data: [], totalCount: 0 });
  const [completeDataList, setCompleteDataList] = useState({ data: [], totalCount: 0 })
  const [isUploadModal, setIsUploadModal] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const handleMarket = (selected) => {
    setMarket(selected);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setDataList(getData(market.value, 'ongoing'));
      setCompleteDataList(getData(market.value, 'complete'));
    }, 2000);
  }, [])

  return (
    <>
      <Box mb="200px">
        <PageController
          param={param}
          market={market}
          handleMarket={handleMarket}
          pageTitle=""
          pageMetadata="Client Overview"
          isCompleted=""
        >

          <UploadFile
            cmsData={PageContent}
            modalOpen={isUploadModal}
            setModalOpen={setIsUploadModal}
          />
          <DataList
            cmsData={PageContent}
            market={market}
            completeDataList={completeDataList}
            clientCode={clientCode}
            dataList={dataList}
            setDataList={setDataList}
            setCompleteDataList={setCompleteDataList}
            loading={isLoading}
            setMarket={setMarket}
          />

        </PageController>
      </Box>
    </>
  );
};

export default withPageController(DataField);
