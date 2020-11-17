import React from 'react';
import PlatformShell, { CmsContext, useCMS } from '@gdo-global-client-reporting/dentsu-platform-shell'
import { createBridge } from '@gdo-global-client-reporting/dentsu-platform-bridge'
import config from './config/config';
import App from './App';

const Shell = () => {
  const { isBypassSecurity, appOrigin, isEmbeddedApp } = config;
  console.log('>>>>>>>>>>', CmsContext);
  console.log('<<<<<<<<<<<<<<<<<<<<<', useCMS());
  // const { changeLanguage } = useCMS();

  createBridge({
    // localeChangeHandler: locale => changeLanguage(locale),
    isBypassSecurity,
    appOrigin,
  });

  console.log('config>>>>>>', config);
  return (
    <PlatformShell isEmbeddedApp={isEmbeddedApp} appTitle="Productivity Manager">
      <App />
    </PlatformShell>
  )
}
export default Shell;
