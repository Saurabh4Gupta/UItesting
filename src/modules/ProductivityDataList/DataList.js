/* eslint-disable no-unused-vars */
import React from 'react';
import { Box, Tabs } from '@dentsu-ui/components';
import PropTypes from 'prop-types';
import EmptyTable from './EmptyTable';
import TableList from './TableList';

const DataList = (props) => {
  const {
    cmsData,
    handleModal,
    ongoingDataList,
    completeDataList,
    handleToggleData,
    tabIndex,
    handleTabIndex,
    handleDeleteModel,
  } = props;
  const { data, totalCount } = ongoingDataList;
  const { completedData, completedCount } = completeDataList;

  return (
    <Box mt="30px">
      <Tabs onChange={handleTabIndex} index={tabIndex}>
        <Tabs.List>
          <Tabs.Tab label={cmsData.ongoingLabel} count={data.length} />
          <Tabs.Tab
            label={cmsData.completeLabel}
            count={completedData.length}
          />
        </Tabs.List>
        <Tabs.Panels>
          <Tabs.Panel>
            {data.length > 0 ? (
              <TableList
                data={data}
                cmsData={cmsData}
                handleToggleData={handleToggleData}
                actionName={cmsData.moveToComplete}
                handleDeleteModel={handleDeleteModel}
              />
            ) : (
              <EmptyTable
                defaultText={cmsData.emptyProductivityDatarequestCaption}
                handleModal={handleModal}
              />
            )}
          </Tabs.Panel>
          <Tabs.Panel>
            {completedData.length > 0 ? (
              <TableList
                data={completedData}
                cmsData={cmsData}
                actionName={cmsData.moveToOnGoing}
                handleToggleData={handleToggleData}
                showStatus={false}
              />
            ) : (
              <EmptyTable
                defaultText={
                  cmsData.emptyCompletedProductivityDatarequestCaption
                }
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
  ongoingDataList: PropTypes.object,
  completeDataList: PropTypes.object,
  handleToggleData: PropTypes.func.isRequired,
  tabIndex: PropTypes.number.isRequired,
  handleTabIndex: PropTypes.func.isRequired,
  handleDeleteModel: PropTypes.func.isRequired,
};
DataList.defaultProps = {
  cmsData: {},
  handleModal: () => {},
  ongoingDataList: {},
  completeDataList: [],
};
export default DataList;
