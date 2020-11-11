import React from 'react';
import PlatformShell from '@gdo-global-client-reporting/dentsu-platform-shell'
import { createBridge } from '@gdo-global-client-reporting/dentsu-platform-bridge'
import config from './config/config';
import App from './App';

const Shell = () => {
  const { isBypassSecurity,appOrigin, isEmbeddedApp } = config;
  // const { changeLanguage } = useContext(CmsContext);
//   createBridge({
//     // localeChangeHandler: locale => changeLanguage(locale),
//     isBypassSecurity,
//     appOrigin,
//   });
  return (
    <PlatformShell cmsConfig={{ collectionName: '' }} showSideBar={false} isEmbeddedApp={isEmbeddedApp} appTitle="Productivity Manager">
      <App />
    </PlatformShell>
  )
}
export default Shell;
