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
import Card from '@dentsu-ui/components/dist/cjs/components/Card';
import Paragraph from '@dentsu-ui/components/dist/cjs/components/Paragraph';
import ActionBtn from './ActionBtn';
import DeleteData from '../CreateData/DeleteData';

const TableList = (props) => {
  const {
    cmsData,
    data,
    handleMoveToCompleteData,
    deleteModalData,
    setIsDeleteModal,
    actionName,
    showStatus,
    handleDeleteModel,
    clientCode,
    handleDelete,
    search,
    handleMoveToCompleteModel,
    setIsMoveToCompleteModel,
    moveToCompleteModelData,
  } = props;

  const history = useHistory();

  const showDataRequestDetails = (id) => {
    const queryString = `client_code=${clientCode}&request_id=${id}`;
    history.push({
      pathname: '/viewDetails',
      search: `?${queryString}`,
    });
  };

  return (
    <Box mt="30px">
      <DeleteData
        deleteModalData={deleteModalData}
        setModalOpen={setIsDeleteModal}
        handleDelete={handleDelete}
        moveToCompleteModelData={moveToCompleteModelData}
        setIsMoveToCompleteModel={setIsMoveToCompleteModel}
        handleMoveToCompleteData={handleMoveToCompleteData}
        // handleToggleData={handleToggleData}
      />
      <List
        items={data}
        searchBy="client"
        isSearchable
        rowsText="results in total"
        filteredText=""
        rowText="result in total"
        onSearchChange={(input) => search(input)}
        filters={[
          {
            key: 'totalTenure',
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
                  width="20%">
                  <Box>
                    <Button
                      variant="ghost"
                      size="small"
                      iconLeft="layers"
                      onClick={() => showDataRequestDetails(id)}>
                      {cmsData.viewDetails}
                    </Button>
                  </Box>
                  <Divider orientation="vertical" isFlexChild />
                  <Box>
                    <ActionBtn
                      actionName={actionName}
                      handleMoveToCompleteData={() => handleMoveToCompleteData(id)
                      }
                      deleteBtn={cmsData.delete}
                      showStatus={showStatus}
                      handleDeleteModel={() => handleDeleteModel(id)}
                      handleMoveToCompleteModel={() => handleMoveToCompleteModel(id)
                      }
                      handleDelete={() => handleDelete(id)}
                    />
                  </Box>
                </Stack>
              </Stack>
              {index === data.length - 1 ? '' : <Divider />}
            </div>
          );
        }}
      />
      {data.length < 1 && (
        <Card style={{ border: '0px', height: '300px' }}>
          <Paragraph style={{ margin: 'auto' }}>
            Sorry, no results found
          </Paragraph>
        </Card>
      )}
    </Box>
  );
};

TableList.propTypes = {
  cmsData: PropTypes.object,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleMoveToCompleteData: PropTypes.func.isRequired,
  actionName: PropTypes.string.isRequired,
  showStatus: PropTypes.string,
  deleteModalData: PropTypes.object,
  setIsDeleteModal: PropTypes.func.isRequired,
  handleDeleteModel: PropTypes.func.isRequired,
  clientCode: PropTypes.string,
  search: PropTypes.func,
  handleDelete: PropTypes.func,
  handleMoveToCompleteModel: PropTypes.object,
  setIsMoveToCompleteModel: PropTypes.func.isRequired,
  moveToCompleteModelData: PropTypes.func.isRequired,
};

TableList.defaultProps = {
  cmsData: {},
  showStatus: '',
  clientCode: '',
  search: {},
  deleteModalData: {},
  handleDelete: () => {},
  handleMoveToCompleteModel: () => {},
};

export default TableList;
