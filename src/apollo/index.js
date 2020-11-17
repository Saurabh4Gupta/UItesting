import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import link from './link';

const client = (token) => new ApolloClient({
  link: link(`Bearer ${token}`),
  cache: new InMemoryCache(),
});

export default client;
