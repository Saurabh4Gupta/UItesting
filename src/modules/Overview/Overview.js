import React from 'react';

import { Loading, Page, Tabs, Box, Layout } from '@dentsu-ui/components';


const Overview = () => {

  return (
    <Layout>
      <Page>

        <Layout>
          <Layout.Section>
            <Layout.Panel>
              <Loading />
            </Layout.Panel>
          </Layout.Section>
        </Layout>
        <Layout>
          <Layout.Section>
            <Box size="5/6">
              <Tabs>
                <Tabs.List>
                  <Tabs.Tab label="Active" count={0} />
                  <Tabs.Tab label="Archived" count={"0"} />
                </Tabs.List>
              </Tabs>

              <Layout.Panel>
                <h1>No xZXXXXXXxxxxxxaxsaxsaxsaxaxaaxaxrecoedxcascsac</h1>
              </Layout.Panel>

            </Box>
          </Layout.Section>
        </Layout>
      </Page>
    </Layout>
  );
}

export default Overview;
