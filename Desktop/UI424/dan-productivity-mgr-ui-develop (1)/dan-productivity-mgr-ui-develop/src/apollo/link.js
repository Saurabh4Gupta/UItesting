import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import { setContext } from 'apollo-link-context';
import config from '../config/config';

const { uri } = config;
const subsUri = config.sUri;

function getAuthLink(token) {
  const httpLink = new HttpLink({ uri });
  const authLink = setContext((_, { headers }) => ({
    headers: {
      ...headers,
      authorization: token || '',
    },
  }));
  return authLink.concat(httpLink)
}
function getWsLink(token) {
  const wsLink = new WebSocketLink({
    uri: subsUri,
    options: {
      reconnect: true,
      connectionParams: {
        authorization: token,
      },
    },
  });
  wsLink.subscriptionClient.on('connecting', () => {
    console.log('connecting');
  });
  wsLink.subscriptionClient.on('connected', () => {
    console.log('connected');
  });
  wsLink.subscriptionClient.on('reconnecting', () => {
    console.log('reconnecting');
  });
  wsLink.subscriptionClient.on('reconnected', () => {
    console.log('reconnected');
  });
  wsLink.subscriptionClient.on('disconnected', () => {
    console.log('disconnected');
  });

  wsLink.subscriptionClient.maxConnectTimeGenerator.duration = () => wsLink.subscriptionClient.maxConnectTimeGenerator.max;
  return wsLink;
}


const link = (token) => split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  getWsLink(token),
  getAuthLink(token),
);

export default link;
