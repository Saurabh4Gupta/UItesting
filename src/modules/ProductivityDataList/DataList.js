import React from 'react';
import {
  Box,
  Tabs,
} from '@dentsu-ui/components';
import PropTypes from 'prop-types';
import EmptyTable from './EmptyTable';
import TableList from './TableList';

const DataList = (props) => {
  const { cmsData, handleModal, ongoingDataList, completeDataList, handleToggleData, tabIndex, handleTabIndex } = props;
  return (
    <Box mt="30px">
      <Tabs onChange={handleTabIndex} index={tabIndex}>
        <Tabs.List>
          <Tabs.Tab label={cmsData.ongoingLabel} count={ongoingDataList.length} />
          <Tabs.Tab label={cmsData.completeLabel} count={completeDataList.length} />
        </Tabs.List>
        <Tabs.Panels>
          <Tabs.Panel>
            {ongoingDataList.length > 0 ? (
              <TableList data={ongoingDataList} cmsData={cmsData} handleToggleData={handleToggleData} actionName={cmsData.moveToComplete} />
            ) : (
              <EmptyTable
                defaultText={cmsData.emptyProductivityDatarequestCaption}
                handleModal={handleModal}
              />
            )}
          </Tabs.Panel>
          <Tabs.Panel>
            {completeDataList.length > 0 ? (
              <TableList
                data={completeDataList}
                cmsData={cmsData}
                actionName={cmsData.moveToOnGoing}
                handleToggleData={handleToggleData}
                showStatus={false}
              />
          ) : (
            <EmptyTable
              defaultText={cmsData.emptyCompletedProductivityDatarequestCaption}
              handleModal={handleModal}
            />
          )}
          </Tabs.Panel>
        </Tabs.Panels>
      </Tabs>
    </Box>
  );
};

DataList.propTypes = {
  cmsData: PropTypes.object,
  handleModal: PropTypes.func,
  ongoingDataList: PropTypes.arrayOf(PropTypes.object),
  completeDataList:PropTypes.arrayOf(PropTypes.object),
  handleToggleData:PropTypes.func.isRequired,
  tabIndex: PropTypes.number.isRequired,
  handleTabIndex:PropTypes.func.isRequired,
};
DataList.defaultProps = {
  cmsData: {},
  handleModal: () => {},
  ongoingDataList: {},
  completeDataList:[],
};
export default DataList;
