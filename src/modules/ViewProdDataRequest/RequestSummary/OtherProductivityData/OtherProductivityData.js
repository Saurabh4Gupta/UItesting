import React, { useState } from 'react';
import Stack from '@dentsu-ui/components/dist/cjs/components/Stack';
import Subheading from '@dentsu-ui/components/dist/cjs/components/Subheading';
import Caption from '@dentsu-ui/components/dist/cjs/components/Caption';
import Box from '@dentsu-ui/components/dist/cjs/components/Box';
import Link from '@dentsu-ui/components/dist/cjs/components/Link';
import Divider from '@dentsu-ui/components/dist/cjs/components/Divider';
import Chip from '@dentsu-ui/components/dist/cjs/components/Chip';
import PropTypes from 'prop-types';
import Paragraph from '@dentsu-ui/components/dist/cjs/components/Paragraph/Paragraph';
import { AvatarGroup, Avatar } from '@dentsu-ui/components';
import { dataFieldCms as PageContent } from '../../../../cms/dataFieldCms';
import EditData from '../../../CreateData/EditData';
import TrackerTemplate from './TrackerTemplate';

const OtherProductivityData = (props) => {
  const { handleEditData, prodRequest } = props;
  const {
    dueDate,
    actualData,
    forecastData,
    assignTo,
    reportingYear,
    isCompleted,
    id,
  } = prodRequest;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [market] = useState('');

  const handleModal = (value) => {
    setIsModalOpen(value);
  };
  const handleCreateData = () => {
    handleModal(true);
  };
  // const handleEditData = (values) => {
  //   prodRequest.localMarket = values.localMarket;
  //   prodRequest.dueDate = '01/01/2021';
  //   prodRequest.name = values.name;
  //   prodRequest.briefing = values.briefing;
  //   prodRequest.actualData = values.actualData;
  //   prodRequest.forecastData = values.forecastData;
  //   prodRequest.reportingYear = 'April 2021 - March 2022';
  //   prodRequest.assignTo = 'Ryan Manton';
  //   console.log('valueuueue', prodRequest.forecastData)
  // }
  return (
    <>
      <Box width="30%" ml="20px">
        <Stack flexDirection="column">
          <Box>
            <Subheading>
              {isCompleted ? (
                ''
              ) : (
                <Link
                  style={{ float: 'right' }}
                  iconLeft="edit"
                  onClick={handleCreateData}
                >
                  {PageContent.editRequest}
                </Link>
                )}
            </Subheading>
          </Box>
          <Box mt="20px" mb="10px">
            <Caption style={{ color: 'gray' }}>
              {PageContent.reportingYear}
            </Caption>
          </Box>
          {reportingYear.value}
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
                <strong>{` ${actualData.label}`}</strong>
              </Paragraph>
            </Box>
            <Divider orientation="vertical" isFlexChild />
            <Box ml="3px">
              <Paragraph>
                {PageContent.forecastCapitalized}
                :
                <strong>{` ${forecastData.label}`}</strong>
              </Paragraph>
            </Box>
          </Stack>
          <br />
          <br />
          <Stack flexDirection="row">
            <Stack flexDirection="column" mr="40px">
              <Box mr="10px" mb="10px">
                <Caption style={{ color: 'gray' }}>{PageContent.dueBy}</Caption>
              </Box>
              {dueDate}
            </Stack>
            <Stack flexDirection="column">
              <Box mb="7px" ml="8px">
                <Caption style={{ color: 'gray' }}>
                  {PageContent.assignedTo}
                </Caption>
              </Box>
              {assignTo.length === 1
              ? (
                <Chip
                  avatar={{
                  src: assignTo[0].userImage ? assignTo[0].userImage : '',
                  name: assignTo[0].label,
                }}
                >
                  {assignTo[0].label}
                </Chip>
) : (<AvatarGroup size="xlarge">{assignTo.map((value) => <Avatar name={value.value} src={value.userImage ? value.userImage : ''} />)}</AvatarGroup>)
}
            </Stack>
          </Stack>
          <TrackerTemplate />
        </Stack>
      </Box>
      <EditData
        cmsData={PageContent}
        market={market}
        isModalOpen={isModalOpen}
        handleModal={handleModal}
        requestId={id}
        handleEditData={handleEditData}
      />
    </>
  );
};

OtherProductivityData.propTypes = {
  prodRequest: PropTypes.object,
  handleEditData: PropTypes.func,
};
OtherProductivityData.defaultProps = {
  prodRequest: PropTypes.object,
  handleEditData: PropTypes.func,
};

export default OtherProductivityData;
