import React, { useState } from 'react';
import Stack from '@dentsu-ui/components/dist/cjs/components/Stack';
import Subheading from '@dentsu-ui/components/dist/cjs/components/Subheading';
import Caption from '@dentsu-ui/components/dist/cjs/components/Caption';
import Box from '@dentsu-ui/components/dist/cjs/components/Box';
import Link from '@dentsu-ui/components/dist/cjs/components/Link';
import Divider from '@dentsu-ui/components/dist/cjs/components/Divider';
import Chip from '@dentsu-ui/components/dist/cjs/components/Chip';
import { dataFieldCms as PageContent } from '../../../../cms/dataFieldCms';
import EditData from '../../../CreateData/EditData';
import TrackerTemplate from './TrackerTemplate';

const OtherProductivityData = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [market] = useState('');

  const handleModal = (value) => {
    setIsModalOpen(value);
  };
  const handleCreateData = () => {
    handleModal(true);
  };

  return (
    <>
      <Box width="30%" ml="20px">
        <Stack flexDirection="column">
          <Box>
            <Subheading>
              <Link
                style={{ float: 'right' }}
                iconLeft="edit"
                onClick={handleCreateData}
              >
                {PageContent.editRequest}
              </Link>
            </Subheading>
          </Box>
          <Box mt="20px" mb="10px">
            <Caption style={{ color: 'gray' }}>
              {PageContent.reportingYear}
            </Caption>
          </Box>
          April 2020 - March 2021
          <br />
          <br />
          <Box mt="20px" mb="10px">
            <Caption style={{ color: 'gray' }}>
              {PageContent.productivityDataRequested}
            </Caption>
          </Box>
          <Stack flexDirection="row">
            <Box mr="10px">
              {PageContent.actualCapitalized}
              : 6 months
            </Box>
            <Divider orientation="vertical" isFlexChild />
            <Box ml="10px">
              {PageContent.forecastCapitalized}
              : 6 months
            </Box>
          </Stack>
          <br />
          <br />
          <Stack flexDirection="row">
            <Stack flexDirection="column" mr="40px">
              <Box mr="10px" mb="10px">
                <Caption style={{ color: 'gray' }}>
                  {' '}
                  {PageContent.dueBy}
                </Caption>
              </Box>
              13/07/2020
            </Stack>
            <Stack flexDirection="column">
              <Box mb="7px" ml="8px">
                <Caption style={{ color: 'gray' }}>
                  {PageContent.assignedTo}
                </Caption>
              </Box>
              <Chip
                avatar={{
                  src: 'https://bit.ly/code-beast',
                  name: 'John Paul Green',
                }}
              >
                Ryan Killick
              </Chip>
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
      />
    </>
  );
};

export default OtherProductivityData;
