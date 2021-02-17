import React, { useState, useEffect } from 'react';
import './app.css';
import { ApolloProvider } from 'react-apollo';
import { useAuth } from '@gdo-global-client-reporting/dentsu-platform-shell';
import { useQuery } from '@apollo/client';
import Loading from '@dentsu-ui/components/dist/cjs/components/Loading';
import Routes from './Routes';
import apolloClient from './apollo/apolloClient';
import GET_LIST_CLIENT from './modules/ClientList/query';
import { ClientList, FlagIt } from './contexts/marketOptions';
import { getClientInfo } from './utils/helper';
import { config } from './config';

import { invokeSre } from './sreConfiguration';

invokeSre(config.instrumentation_key);

const Application =  () => {
  const { token, auth } = useAuth();
  const { data: clientList, loading } = useQuery(GET_LIST_CLIENT);
  const [clientPermission, setClientPermission] = useState();


  const clientPermissionInfo = async () =>  {
    const permissionData = await getClientInfo(auth);
    return permissionData;
  }
  useEffect(() => {
    const userPermissionInfo = clientPermissionInfo();
    userPermissionInfo.then((value) => {
      setClientPermission(value);
    });
  }, [])
  if (loading) return <Loading />;
  return (
    <ApolloProvider client={apolloClient(token)}>
      <ClientList.Provider value={clientList.getClientsList.data}>
        <FlagIt.Provider value={clientPermission}>
          <Routes />
        </FlagIt.Provider>
      </ClientList.Provider>
    </ApolloProvider>
  );
};
export default Application;
