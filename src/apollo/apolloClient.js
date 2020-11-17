import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import link from './link';


const apolloClient = (token) => new ApolloClient({
  link: link(`Bearer ${token}`),
  addTypename: false,
  cache: new InMemoryCache(),
});

export default apolloClient;
