import React from 'react';
import ReactDOM from 'react-dom';

// import Shell from '@dentsu/platform-shell';
import 'react-app-polyfill/ie11';
import '@dentsu-ui/components/styles.css';

import Shell from './Shell';

ReactDOM.render(
  <Shell />,
  document.getElementById('root'),
);
