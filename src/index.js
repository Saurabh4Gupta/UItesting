import React from 'react';
import ReactDOM from 'react-dom';

// import Shell from '@dentsu/platform-shell';
import 'react-app-polyfill/ie11';
// import '@dentsu/components/styles.css';

import App from './app';


// ReactDOM.render(
//   <Shell
//     isEmbeddedApp={false}
//     cmsConfig={{ collectionName: {} }}
//     serviceconfig={''}
//   >
//     <App />
//   </Shell>,
//   document.getElementById('root'),
// );

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
