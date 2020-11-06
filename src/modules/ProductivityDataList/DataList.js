import React from 'react';
import { Tabs } from '@dentsu-ui/components';
import Box from '@dentsu-ui/components/dist/cjs/components/Box';
import PropTypes from 'prop-types';
import EmptyTable from './EmptyTable';

const DataList = (props) => {
  const { cmsData, handleModal } = props;
  return (
    <Box mt="30px">
      <Tabs>
        <Tabs.List>
          <Tabs.Tab label={cmsData.ongoingLabel} count="0" />
          <Tabs.Tab label={cmsData.completeLabel} count="0" />
        </Tabs.List>
        <Tabs.Panels>
          <Tabs.Panel>
            <EmptyTable handleModal={handleModal} />
          </Tabs.Panel>
        </Tabs.Panels>
      </Tabs>
    </Box>
  )
};

DataList.propTypes = {
  cmsData: PropTypes.object,
  handleModal: PropTypes.func,
}
DataList.defaultProps = {
  cmsData: {},
  handleModal: () => { },
}

export default DataList;
