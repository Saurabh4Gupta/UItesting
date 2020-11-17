import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import link from './link';


const apolloClient = (token, serviceconfig) => new ApolloClient({
  link: link(`Bearer ${token}`, serviceconfig),
  addTypename: false,
  cache: new InMemoryCache({
    // eslint-disable-next-line no-underscore-dangle
    dataIdFromObject: o => (o._id ? `${o.__typename}:${o._id}` : null),
  }),
});

export default apolloClient;
