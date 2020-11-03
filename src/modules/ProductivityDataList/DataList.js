import React from 'react';
import { Tabs } from '@dentsu-ui/components';
import Box from '@dentsu-ui/components/dist/cjs/components/Box';
import EmptyTable from './EmptyTable';

const DataList = () => (
  <Box m="30px">
    <Tabs>
      <Tabs.List>
        <Tabs.Tab label="Ongoing" count="0" />
        <Tabs.Tab label="Complete" count="0" />
      </Tabs.List>
      <Tabs.Panels>
        <Tabs.Panel>
          <EmptyTable />
        </Tabs.Panel>
        <Tabs.Panel>
          <EmptyTable />
        </Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  </Box>
  );
export default DataList;
