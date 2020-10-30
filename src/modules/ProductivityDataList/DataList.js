import React from 'react';
import { Tabs } from '@dentsu-ui/components';
import Stack from '@dentsu-ui/components/dist/cjs/components/Stack';
import Box from '@dentsu-ui/components/dist/cjs/components/Box';
import EmptyTable from './EmptyTable';

const DataList = (props) => {
  return (
    <Box m="30px">
      <Tabs>
        <Tabs.List>
          <Tabs.Tab label="Ongoing" count="0"></Tabs.Tab>
          <Tabs.Tab label="Completed" count="0"></Tabs.Tab>
        </Tabs.List>
      </Tabs>
      <EmptyTable></EmptyTable>
    </Box>
  );
};
export default DataList;
