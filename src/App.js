import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './apollo';
import './app.css';
import Routes from './Routes';

const Application = () => (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
);
export default Application;
