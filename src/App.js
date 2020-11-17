import React from 'react';
import { ApolloProvider } from 'react-apollo';
import './app.css';
import { useAuth, useCMS } from '@gdo-global-client-reporting/dentsu-platform-shell'
import { createBridge } from '@gdo-global-client-reporting/dentsu-platform-bridge';
import Routes from './Routes';
import config from './config/config';
import client from './apollo';

const Application = () => {
  const { isBypassSecurity, appOrigin } = config;
  const { token } = useAuth();
  const { changeLanguage } = useCMS();
  createBridge({
    localeChangeHandler: locale => changeLanguage(locale), // change language handler and switch language based on Platform Client selection
    appOrigin: appOrigin && appOrigin.trim(), // [Required] The hostname for the current app. To keep the apps secure, we are required to lock all communications to the app origin.
    isBypassSecurity, // temporarily bypass security, useful on dev environment e.g. localhost
    // debug, // trigger console debug messages
  });
  return (
    <ApolloProvider client={client(token)}>
      <Routes />
    </ApolloProvider>
  )
};
export default Application;
