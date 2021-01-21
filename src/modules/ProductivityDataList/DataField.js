/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Box } from '@dentsu-ui/components';
import { useQuery } from '@apollo/client';
import PageController from '../PageController/PageController';
import DataList from './DataList';
import { dataFieldCms as PageContent } from '../../cms';
import UploadFile from '../FileUpload/UploadFile';
import withPageController from '../../hoc/withPageController';
import { parsedDataList } from '../../utils/helper';
import GET_DATA_LIST from './query';

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
  const [isUploadModal, setIsUploadModal] = useState(false);
  const [dataList, setdataList] = useState({});
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
        <PageController
          param={param}
          market={market}
          handleMarket={handleMarket}
          pageTitle=""
          pageMetadata="Client Overview"
          isCompleted={false}
          clientList={clientMetaData}
        >
          <UploadFile
            cmsData={PageContent}
            modalOpen={isUploadModal}
            setModalOpen={setIsUploadModal}
          />
          <DataList
            cmsData={PageContent}
            completeDataList={completeDataList}
            dataList={dataList}
            setCompleteDataList={setCompleteDataList}
            loading={listLoading}
            market={market}
            setMarket={setMarket}
            refetch={refetch}
          />
        </PageController>
      </Box>
    </>
  );
};
export default withPageController(DataField);
