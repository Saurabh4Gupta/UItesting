import React, { useState, useContext } from 'react';
import moment from 'moment';
import Stack from '@dentsu-ui/components/dist/cjs/components/Stack';
import Caption from '@dentsu-ui/components/dist/cjs/components/Caption';
import Box from '@dentsu-ui/components/dist/cjs/components/Box';
import Link from '@dentsu-ui/components/dist/cjs/components/Link';
import Divider from '@dentsu-ui/components/dist/cjs/components/Divider';
import Chip from '@dentsu-ui/components/dist/cjs/components/Chip';
import PropTypes from 'prop-types';
import Paragraph from '@dentsu-ui/components/dist/cjs/components/Paragraph/Paragraph';
import { AvatarGroup, Avatar } from '@dentsu-ui/components';
import { dataFieldCms as PageContent } from '../../../../cms/dataFieldCms';
import EditData from '../../../CreateData/FormData';
import TrackerTemplate from './TrackerTemplate';
import { reportingYearData } from '../../../Mock/mockData';
import { FlagIt } from '../../../../contexts/marketOptions';

const OtherProductivityData = (props) => {
  // eslint-disable-next-line react/prop-types
  const { handleEditData, prodRequest, name, refetchEdit } = props;
  const {
    dueDate,
    actualData,
    forecastData,
    reportingYear,
    isComplete,
    owners,
    trackerTemplate,
    localMarket,
  } = prodRequest;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [market] = useState('');
  const handleModal = (value) => {
    setIsModalOpen(value);
  };

  const userPermissionInfo = useContext(FlagIt);
  let userEditPermission = false;

  userPermissionInfo.forEach(item => {
    if (item.resource === 'PDR') {
      userEditPermission = true;
    }
  })

  const reportingYearLabel = reportingYearData.find(
    (key) => key.value === reportingYear,
  );

  return (
    <>
      <Box width="30%" ml="20px">
        <Stack flexDirection="column">
          <Box>
            {isComplete ? (
              ''
            ) : (
              userEditPermission === true && (
                <Link
                  style={{ float: 'right' }}
                  iconLeft="edit"
                  onClick={handleModal}
                >
                  {PageContent.editRequest}
                </Link>
              )
              )}
          </Box>
          <Box mt="20px" mb="10px">
            <Caption style={{ color: 'gray' }}>
              {PageContent.reportingYear}
            </Caption>
          </Box>
          {reportingYearLabel.label}
          <br />
          <br />
          <Box mt="20px" mb="10px">
            <Caption style={{ color: 'gray' }}>
              {PageContent.productivityDataRequested}
            </Caption>
          </Box>
          <Stack flexDirection="row">
            <Box mr="3px">
              <Paragraph>
                {PageContent.actualCapitalized}
                :
                <strong>{` ${actualData} months`}</strong>
              </Paragraph>
            </Box>
            <Divider orientation="vertical" isFlexChild />
            <Box ml="3px">
              <Paragraph>
                {PageContent.forecastCapitalized}
                :
                <strong>{` ${forecastData} months`}</strong>
              </Paragraph>
            </Box>
          </Stack>
          <br />
          <br />
          <Stack flexDirection="row">
            <Stack flexDirection="column" mr="40px">
              <Box mr="10px" mb="12px">
                <Caption style={{ color: 'gray' }}>{PageContent.dueBy}</Caption>
              </Box>
              {moment(dueDate).format('YYYY-MM-DD')}
            </Stack>
            <Stack flexDirection="column">
              <Box
                mb={owners.length === 1 ? '3px' : '8px'}
                ml="8px"
              >
                <Caption style={{ color: 'gray' }}>
                  {PageContent.assignedTo}
                </Caption>
              </Box>
              {owners.length === 1 ? (
                <Chip
                  size="medium"
                  avatar={{
                    src: owners[0].picture ? owners[0].picture : '',
                    name: owners[0].label,
                  }}
                >
                  {owners[0].label}
                </Chip>
              ) : (
                <AvatarGroup size="large" max={5}>
                  {owners.map((value) => (
                    <Avatar
                      name={value.label}
                      src={value.picture ? value.picture : ''}
                    />
                    ))}
                </AvatarGroup>
                )}
            </Stack>
          </Stack>
          <TrackerTemplate
            trackerTemplate={trackerTemplate}
            name={name}
            localMarket={localMarket}
          />
        </Stack>
      </Box>
      {isModalOpen && (
        <EditData
          prodRequest={prodRequest}
          cmsData={PageContent}
          market={market}
          isModalOpen={isModalOpen}
          handleModal={handleModal}
          isEdit
          handleEditData={handleEditData}
          refetchEdit={refetchEdit}
        />
      )}
    </>
  );
};

OtherProductivityData.propTypes = {
  prodRequest: PropTypes.object,
  handleEditData: PropTypes.func,
  name: PropTypes.string,
};
OtherProductivityData.defaultProps = {
  prodRequest: PropTypes.object,
  handleEditData: PropTypes.func,
  name: PropTypes.string,
};

export default OtherProductivityData;
