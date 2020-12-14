import React from 'react';
import './app.css';
import { ApolloProvider } from 'react-apollo'
import { useAuth } from '@gdo-global-client-reporting/dentsu-platform-shell'
import Routes from './Routes';
import apolloClient from './apollo/apolloClient';

const Application = () => {
  const { token } = useAuth();
  return (
    <ApolloProvider client={apolloClient(token)}>
      <Routes />
    </ApolloProvider>
  )
};
export default Application;
