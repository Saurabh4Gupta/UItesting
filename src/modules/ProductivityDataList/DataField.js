/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from 'react';
import { Box } from '@dentsu-ui/components';
import { useLocation } from 'react-router';
import { useQuery } from '@apollo/client';
import PageController from '../PageController/PageController';
import DataList from './DataList';
import { dataFieldCms as PageContent } from '../../cms';
import UploadFile from '../FileUpload/UploadFile';
import withPageController from '../../hoc/withPageController';
import { ClientList, MarketOptionsContext } from '../../contexts/marketOptions';
import GET_DATA_LIST from './query';

const DataField = (props) => {
  const location = useLocation();
  const { param } = props;
  const query = new URLSearchParams(location.search);
  const clientCode = query.get('client_code');
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
  const [clientData, setClientData] = useState({});
  const handleMarket = (selected) => {
    setMarket(selected);
  };
  const clientList = useContext(ClientList);
  const { data: listData, loading: listLoading } = useQuery(GET_DATA_LIST, {
    variables: { data: { clientCode, marketCode: market.value } },
  });

  const marketOptions = [
    { value: 'All', label: 'All markets', overviewId: '12' },
  ];

  const { markets } = clientList.find((client) => client.code === clientCode);
  markets.forEach((clientMarket) => {
    marketOptions.push({
      value: clientMarket.code,
      label: clientMarket.name,
      overviewId: clientMarket.overviewId,
    });
  });

  const { name, avatar } = clientList.find(
    (client) => client.code === clientCode,
  );
  const parsedDataList = (res) => {
    const parsedRes = res.map((key) => {
      const marketData = marketOptions.find(
        (value) => key.overviewId === value.overviewId,
      );
      return Object.assign({}, key, { localMarket: marketData, client: name });
    });
    return parsedRes;
  };

  useEffect(() => {
    if (listData) {
      const {
        data: { dataList, totalCount },
      } = listData.getDataList;
      const paredData = parsedDataList(dataList);
      setdataList({ dataList: paredData, totalCount });
    }
  }, [listData]);

  return (
    <>
      <MarketOptionsContext.Provider value={marketOptions}>
        <Box mb="200px">
          <PageController
            param={param}
            market={market}
            handleMarket={handleMarket}
            pageTitle=""
            pageMetadata="Client Overview"
            isCompleted={false}
            clientList={{ name, avatar, clientCode }}>
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
              setCompleteDataList={setCompleteDataList}
              loading={listLoading}
              setMarket={setMarket}
            />
          </PageController>
        </Box>
      </MarketOptionsContext.Provider>
    </>
  );
};
export default withPageController(DataField);
