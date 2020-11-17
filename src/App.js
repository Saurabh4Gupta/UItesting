import React from 'react';
import { ApolloProvider } from 'react-apollo';
import './app.css';
import { useAuth } from '@gdo-global-client-reporting/dentsu-platform-shell'
import Routes from './Routes';
import client from './apollo';

const Application = () => {
  console.log('>>>>>>>>>>>>>', useAuth());
  const n = localStorage.getItem('okta-token-storage');
  console.log('<<<<<<<<<<<<<<<<<<<<', JSON.parse(n).idToken);
  const { token } = useAuth();
  return (
    <ApolloProvider client={client(token)}>
      <Routes />
    </ApolloProvider>
  )
};
export default Application;
