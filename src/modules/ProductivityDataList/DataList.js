import React, { useState } from 'react';
import {
  Box,
  Tabs,
} from '@dentsu-ui/components';
import PropTypes from 'prop-types';
import EmptyTable from './EmptyTable';
import TableList from './TableList';

const DataList = (props) => {
  const { cmsData, handleModal, dataList } = props;
  const { data, data2 } = dataList;
  const [completeList, setCompleteList] = useState(data2);
  const [ongoingList, setOngoingList] = useState(data);

  console.log('this is complete list', completeList);
  console.log('this is ongoing list', ongoingList);


  const hanldleMoveToComplete = () => {
    console.log('i am hittttttttttttttttttttttttttttttttttttt');
    setOngoingList(ongoingList.splice(0, 1));
  }

  return (
    <Box mt="30px">
      <Tabs>
        <Tabs.List>
          <Tabs.Tab label={cmsData.ongoingLabel} count={data.length} />
          <Tabs.Tab label={cmsData.completeLabel} count={data2.length} />
        </Tabs.List>
        <Tabs.Panels>
          <Tabs.Panel>
            {data.length > 0 ? (
              <TableList data={ongoingList} cmsData={cmsData} handleClick={hanldleMoveToComplete} />
            ) : (
              <EmptyTable
                defaultText={cmsData.emptyProductivityDatarequestCaption}
                handleModal={handleModal}
              />
            )}
          </Tabs.Panel>
          <Tabs.Panel>
            {data2.length > 0 ? (
              <TableList data={completeList} cmsData={cmsData} />
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
