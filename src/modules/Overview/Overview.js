import React from 'react';
import { withRouter } from 'react-router-dom';


import {
  Page,
  Layout,
} from '@dentsu-ui/components';


function Overview({ history, ...rest }) {

  return (
    <Page
      title="Client App"
      description="Please ignore copy"
      primaryAction={{
        content: 'Create client',
        disabled: false,
        onClick: () => console.log('clicked'),
      }}>
      <Layout>
        <Layout.Section>
          <Layout.Panel>
            <div>Welcome</div>
          </Layout.Panel>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

// function Overview({ history, ...rest }) {
//   return (<div>Welcome</div>)
// }

export default withRouter(Overview);
