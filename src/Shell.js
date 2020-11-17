import React from 'react';
import PlatformShell from '@gdo-global-client-reporting/dentsu-platform-shell';

import config from './config/config';
import App from './App';

const Shell = () => {
  const { isEmbeddedApp } = config;

  console.log('config>>>>>>', config);
  return (
    <PlatformShell isEmbeddedApp={isEmbeddedApp} appTitle="Productivity Manager">
      <App />
    </PlatformShell>
  )
}
export default Shell;
