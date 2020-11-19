/* eslint-disable react/prop-types */
import React from 'react';
import {
  Box,
  Tabs,
} from '@dentsu-ui/components';
import PropTypes from 'prop-types';
import EmptyTable from './EmptyTable';
import TableList from './TableList';

const DataList = (props) => {
  const { cmsData, handleModal, dataList, completeDataList, hanldleMoveToComplete } = props;

  return (
    <Box mt="30px">
      <Tabs>
        <Tabs.List>
          <Tabs.Tab label={cmsData.ongoingLabel} count={dataList.length} />
          <Tabs.Tab label={cmsData.completeLabel} count={completeDataList.length} />
        </Tabs.List>
        <Tabs.Panels>
          <Tabs.Panel>
            {dataList.length > 0 ? (
              <TableList data={dataList} cmsData={cmsData} hanldleMoveToComplete={hanldleMoveToComplete} />
            ) : (
              <EmptyTable
                defaultText={cmsData.emptyProductivityDatarequestCaption}
                handleModal={handleModal}
              />
            )}
          </Tabs.Panel>
          <Tabs.Panel>
            {completeDataList.length > 0 ? (
              <TableList data={completeDataList} cmsData={cmsData} />
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
  dataList: PropTypes.object,
};
DataList.defaultProps = {
  cmsData: {},
  handleModal: () => {},
  dataList: {},
};
export default DataList;
