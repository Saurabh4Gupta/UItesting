import React from 'react';
import './app.css';
import { ApolloProvider } from 'react-apollo';
import { useAuth } from '@gdo-global-client-reporting/dentsu-platform-shell';
import { useQuery } from '@apollo/client';
import Loading from '@dentsu-ui/components/dist/cjs/components/Loading';
import Routes from './Routes';
import apolloClient from './apollo/apolloClient';
import GET_LIST_CLIENT from './modules/ClientList/query';
import { ClientList } from './contexts/marketOptions';

const Application = () => {
  const { token } = useAuth();
  const { data: clientList, loading } = useQuery(GET_LIST_CLIENT);
  if (loading) return <Loading />;
  return (
    <ApolloProvider client={apolloClient(token)}>
      <ClientList.Provider value={clientList.getClientsList.data}>
        <Routes />
      </ClientList.Provider>
    </ApolloProvider>
  );
};
export default Application;
