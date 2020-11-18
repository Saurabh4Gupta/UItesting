/* eslint-disable react/prop-types */
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
} from '@dentsu-ui/components';

const TableList = (props) => {
  const { cmsData, data, handleClick  } = props;

  const actions = (
    <Menu>
      <Menu.Button />
      <Menu.List>
        <Menu.Item onClick={handleClick}>{cmsData.moveToComplete}</Menu.Item>
        <Menu.Item onClick={() => {}}>{cmsData.delete}</Menu.Item>
      </Menu.List>
    </Menu>
  );
  return (
    <Box mt="30px">
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
                          width="80%"
                        >
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
                          width="20%"
                        >
                          <Box>
                            <Button
                              variant="ghost"
                              size="small"
                              iconLeft="layers"
                            >
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
    </Box>
  );
};

export default TableList;
