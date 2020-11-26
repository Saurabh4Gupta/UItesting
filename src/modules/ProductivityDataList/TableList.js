import React from 'react';
import PropTypes from 'prop-types';

import {
  List,
  Button,
  Chip,
  Stack,
  Caption,
  Box,
  Divider,
} from '@dentsu-ui/components';
import { useHistory } from 'react-router';
import ActionBtn from './ActionBtn';

const TableList = (props) => {
  const {
    cmsData,
    data,
    handleToggleData,
    actionName,
    showStatus,
    handleDeleteModel,
    clientCode,
  } = props;

  const history = useHistory()

  const showDataRequestDetails = (id) => {
    const queryString = `client_code=${clientCode}&request_id=${id}`
    history.push({
      pathname: '/viewDetails',
      search: `?${queryString}`,
    })
   // history.push(`/viewDetails?client_code=${clientCode}&request_id=${id}`);
  };

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
        renderItem={(item, index) => {
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
            id,
          } = item;
          return (
            <div key={index}>
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
                  {showStatus === false ? (
                    ''
                  ) : (
                    <Box width="13%">
                      {status === cmsData.overdue ? (
                        <Chip variant="status" status="warning" hasStatusLight>
                          {cmsData.overdue}
                        </Chip>
                      ) : (
                        ''
                      )}
                    </Box>
                  )}
                  <Box width="30%">{`${cmsData.lastUpdate}: ${updatedAt}`}</Box>
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
                      onClick={() => showDataRequestDetails(id)}
                    >
                      {cmsData.viewDetails}
                    </Button>
                  </Box>
                  <Divider orientation="vertical" isFlexChild />
                  <Box>
                    <ActionBtn
                      actionName={actionName}
                      handleToggleData={() => handleToggleData(id)}
                      deleteBtn={cmsData.delete}
                      showStatus={showStatus}
                      objId={id}
                      handleDeleteModel={handleDeleteModel}
                    />
                  </Box>
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
TableList.propTypes = {
  cmsData: PropTypes.object,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleToggleData: PropTypes.func.isRequired,
  actionName: PropTypes.string.isRequired,
  showStatus: PropTypes.string,
  handleDeleteModel: PropTypes.func.isRequired,
  clientCode: PropTypes.string,
};
TableList.defaultProps = {
  cmsData: {},
  showStatus: '',
  clientCode: '',
};

export default TableList;