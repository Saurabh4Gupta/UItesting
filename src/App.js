import React from 'react';
import { ApolloProvider } from 'react-apollo';
import './app.css';
import { useAuth } from '@gdo-global-client-reporting/dentsu-platform-shell'
import Routes from './Routes';
import client from './apollo';

const Application = () => {
  const { token, serviceconfig } = useAuth();
  return (
    <ApolloProvider client={client(token, serviceconfig)}>
      <Routes />
    </ApolloProvider>
  )
};
export default Application;
