import React from 'react';
import { ApolloProvider } from 'react-apollo';
import './app.css';
import { useAuth } from '@gdo-global-client-reporting/dentsu-platform-shell'
import Routes from './Routes';
import client from './apollo';

const Application = () => {
  const { token } = useAuth();
  return (
    //<ApolloProvider client={client(token)}>
      <Routes />
   // </ApolloProvider>
  )
};
export default Application;
