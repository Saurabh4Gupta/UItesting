import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import link from './link';

const client = (token, serviceconfig) => new ApolloClient({
  link: link(`Bearer ${token}`, serviceconfig),
  cache: new InMemoryCache(),
});

export default client;
