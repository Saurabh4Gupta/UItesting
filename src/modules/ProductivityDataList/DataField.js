/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Box } from '@dentsu-ui/components';
import { useQuery } from '@apollo/client';
import PageController from '../PageController/PageController';
import DataList from './DataList';
import { dataFieldCms as PageContent } from '../../cms';
import withPageController from '../../hoc/withPageController';
import { parsedDataList } from '../../utils/helper';
import GET_DATA_LIST from './query';
import CreateData from '../CreateData/FormData';
import ProductivityRequest from '../CreateData/ProductivityRequest';

const DataField = (props) => {
  const { param, marketOptions, clientMetaData } = props;

  const { clientCode, name } = clientMetaData;
  const [market, setMarket] = useState({
    value: 'All',
    label: 'All markets',
    overviewId: '0',
  });
  const [completeDataList, setCompleteDataList] = useState({
    data: [],
    totalCount: 0,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataList, setdataList] = useState({});

  const handleModal = (value) => {
    setIsModalOpen(value);
  };
  const handleMarket = (selected) => {
    setMarket(selected);
  };
  const { data: listData, loading: listLoading, refetch } = useQuery(
    GET_DATA_LIST,
    {
      variables: { data: { clientCode, marketCode: market.value } },
    },
  );

  useEffect(() => {
    if (listData) {
      const {
        data: { dataList, totalCount },
      } = listData.getDataList;
      const parsedData = parsedDataList(dataList, marketOptions, name);
      setdataList({ dataList: parsedData, totalCount });
    }
  }, [listData]);


  return (
    <>
      <Box mb="200px">
        {isModalOpen && (
          <CreateData
            cmsData={PageContent}
            market={market}
            isModalOpen={isModalOpen}
            handleModal={handleModal}
            clientCode={clientCode}
            refetch={refetch}
            setMarket={setMarket}
            isEdit={false}
          />
        )}
        <PageController
          param={param}
          market={market}
          handleMarket={handleMarket}
          pageTitle=""
          pageMetadata="Client Overview"
          isCompleted={false}
          clientList={clientMetaData}
        >
          <ProductivityRequest
            cmsData={PageContent}
            handleModal={handleModal}
          />
          <DataList
            cmsData={PageContent}
            completeDataList={completeDataList}
            dataList={dataList}
            setCompleteDataList={setCompleteDataList}
            loading={listLoading}
            // market={market}
            // setMarket={setMarket}
            // refetch={refetch}
            clientCode={clientCode}
          />
        </PageController>
      </Box>
    </>
  );
};
export default withPageController(DataField);
