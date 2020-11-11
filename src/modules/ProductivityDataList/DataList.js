import React from 'react';
import {
  List,
  Menu,
  Button,
  Chip,
  Stack,
  Caption,
  Box,
  Divider,
  Tabs,
} from '@dentsu-ui/components';
import PropTypes from 'prop-types';
import EmptyTable from './EmptyTable';

const DataList = (props) => {
  const { cmsData, handleModal, dataList } = props;
  const { data, totalCount } = dataList;
  const actions = (
    <Menu>
      <Menu.Button />
      <Menu.List>
        <Menu.Item onClick={() => {}}>{cmsData.moveToComplete}</Menu.Item>
        <Menu.Item onClick={() => {}}>{cmsData.delete}</Menu.Item>
      </Menu.List>
    </Menu>
  );
  return (
    <Box mt="30px">
      <Tabs>
        <Tabs.List>
          <Tabs.Tab label={cmsData.ongoingLabel} count={dataList.totalCount} />
          <Tabs.Tab label={cmsData.completeLabel} count={0} />
        </Tabs.List>
        <Tabs.Panels>
          <Tabs.Panel>
            {totalCount > 0 ? (
              <List
                items={data}
                searchBy="client"
                isSearchable
                rowsText="results in total"
                filteredText=""
                rowText="result in total"
                filters={[
                  {
                    key: 'enabled',
                    label: 'Show',
                    type: 'choice',
                    defaultText: 'All',
                    options: [
                      {
                        label: '2020 Q1',
                        value: '2020 Q1',
                      },
                      {
                        label: '2020 Q2',
                        value: '2020 Q2',
                      },
                      {
                        label: '2020 Q3',
                        value: '2020 Q3',
                      },
                      {
                        label: '2020 Q4',
                        value: '2020 Q4',
                      },
                    ],
                  },
                ]}
                renderItem={(item) => {
                  const {
                    client,
                    localMarket,
                    name,
                    actualData,
                    forecastData,
                    year,
                    quarter,
                    updatedAt,
                    status,
                  } = item;
                  return (
                    <div>
                      <Stack padding="15px">
                        <Stack
                          alignItems="center"
                          flexDirection="row"
                          justifyContent="space-between"
                          width="80%">
                          <Box width="25%">
                            <b>{`${client} ${localMarket.label}`}</b>
                          </Box>
                          <Box width="32%">
                            <b>{name}</b>
                            <Caption>
                              {`${year} ${quarter}: ${actualData.label} ${cmsData.actual} + ${forecastData.label} ${cmsData.forecast}`}
                            </Caption>
                          </Box>
                          <Box width="13%">
                            {status === cmsData.overdue ? (
                              <Chip
                                variant="status"
                                status="warning"
                                hasStatusLight
                              >
                                {cmsData.overdue}
                              </Chip>
                            ) : (
                              ''
                            )}
                          </Box>
                          <Box width="30%">
                            {`${cmsData.lastUpdate}: ${updatedAt}`}
                          </Box>
                        </Stack>
                        <Stack
                          alignItems="center"
                          flexDirection="row"
                          justifyContent="flex-end"
                          width="20%">
                          <Box>
                            <Button
                              variant="ghost"
                              size="small"
                              iconLeft="layers">
                              {cmsData.viewDetails}
                            </Button>
                          </Box>
                          <Divider orientation="vertical" isFlexChild />
                          <Box>{actions}</Box>
                        </Stack>
                      </Stack>
                      <Divider />
                    </div>
                  );
                }}
              />
            ) : (
              <EmptyTable
                defaultText={cmsData.emptyProductivityDatarequestCaption}
                handleModal={handleModal}
              />
            )}
          </Tabs.Panel>
          <Tabs.Panel>
            <EmptyTable
              defaultText={cmsData.emptyCompletedProductivityDatarequestCaption}
              handleModal={handleModal}
            />
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
