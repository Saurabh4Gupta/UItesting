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
import { data } from '../Mock/mockData';
import { dataFieldCms } from '../../cms';

const DataList = () => {
  const mockData = data.data;
  const actions = (
    <Menu>
      <Menu.Button />
      <Menu.List>
        <Menu.Item
          onClick={() => {
            console.log('Mark as draft');
          }}
        >
          Move to Complete
        </Menu.Item>
        <Menu.Item
          onClick={() => {
            console.log('Mark as draft');
          }}
        >
          Delete
        </Menu.Item>
      </Menu.List>
    </Menu>
  );
  return (
    <Tabs>
      <Tabs.List>
        <Tabs.Tab label="Ongoing" count={2} />
        <Tabs.Tab label="Complete" count={2} />
      </Tabs.List>
      <Tabs.Panels>
        <Tabs.Panel>
          <List
            items={mockData}
            searchBy="title"
            isSearchable
            rowsText="results in total"
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
            renderItem={(item, index, mode) => {
              const {
                client,
                localMarket,
                name,
                actualDataMonth,
                forecastDataMonth,
              } = item;
              return (
                <List.Card padding="15px">
                  <Stack>
                    <Stack
                      alignItems="center"
                      flexDirection="row"
                      justifyContent="space-between"
                      width="80%"
                    >
                      <Box width="25%">
                        <b>
                          {client}
                          {' '}
                          {localMarket}
                        </b>
                      </Box>
                      <Box width="32%">
                        <b>{name}</b>
                        <Caption>
                          2020 Q2:
                          {' '}
                          {actualDataMonth}
                          {' '}
                          {dataFieldCms.actualMonth}
                          {' '}
                          +
                          {' '}
                          {forecastDataMonth}
                          {' '}
                          {dataFieldCms.forecastMonth}
                        </Caption>
                      </Box>
                      <Box width="13%">
                        <Chip variant="status" status="warning" hasStatusLight>
                          {dataFieldCms.overdue}
                        </Chip>
                      </Box>
                      <Box width="30%">
                        {dataFieldCms.lastUpdate}
                        : 29/10/20 at 14:32
                      </Box>
                    </Stack>
                    <Stack
                      alignItems="center"
                      flexDirection="row"
                      justifyContent="flex-end"
                      width="20%"
                    >
                      <Box>
                        <Button variant="ghost" size="small" iconLeft="layers">
                          View Details
                        </Button>
                      </Box>
                      <Divider orientation="vertical" isFlexChild />
                      <Box>{actions}</Box>
                    </Stack>
                  </Stack>
                </List.Card>
              );
            }}
          />
        </Tabs.Panel>
        <Tabs.Panel>Complete Tab</Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  );
};
export default DataList;
