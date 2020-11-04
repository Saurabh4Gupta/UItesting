import React from 'react';
import { Tabs } from '@dentsu-ui/components';
import Box from '@dentsu-ui/components/dist/cjs/components/Box';
import PropTypes from 'prop-types';
import EmptyTable from './EmptyTable';

const DataList = (props) => {
  const { cmsData } = props;
  return (
    <Box mt="30px">
      <Tabs>
        <Tabs.List>
          <Tabs.Tab label={cmsData.ongoingLabel} count="0" />
          <Tabs.Tab label={cmsData.completeLabel} count="0" />
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
  )
};

DataList.propTypes = {
  cmsData: PropTypes.object,
}
DataList.defaultProps = {
  cmsData: {},
}

export default DataList;
