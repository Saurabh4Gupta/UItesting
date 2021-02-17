import React, { useContext } from 'react';
import { useLocation } from 'react-router';
import { ClientList, MetaDataContext } from '../contexts/marketOptions';

const withPageController = (WrappedComponent, param) => ({ ...props }) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const clientCode = query.get('client_code');

  const clientList = useContext(ClientList);

  const { name, avatar } = clientList.find(
    (client) => client.code === clientCode,
  );

  const clientMetaData = { name, avatar, clientCode };
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

  return (
    <MetaDataContext.Provider value={{ marketOptions, clientMetaData }}>
      <WrappedComponent
        param={param}
        clientMetaData={clientMetaData}
        marketOptions={marketOptions}
        {...props}
      />
    </MetaDataContext.Provider>
  );
};
export default withPageController;
