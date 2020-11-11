import React from 'react';
import {
  Page,
  Select,
  Image,
  TextContainer,
  Box,
  Stack,
  Caption,
  Heading,
} from '@dentsu-ui/components';
import PropTypes from 'prop-types';
import { clientList } from '../Mock/mockData';

const PageController = (props) => (
  <Box bg="rgba(220,220,220,0.4)" className="main">
    <Page
      metadata={<Title {...props} />}
      primaryAction={{
        content: 'Upload new File',
        icon: 'upload',
        onClick: () => props.setIsUploadModal(true),
        isDisabled: false,
      }}
      breadcrumbs={[{
        content: 'Back to Clients',
        url: '/',
      }]}
    />
  </Box>
);

const HeaderContent = () => (
  <Stack flex="row" mt="30px">
    <Box mr="10px">
      <Select placeholder="Currency GBP(Default)" width={200} />
    </Box>
    <Box width={150} mr="10px">
      <Select placeholder="All Markets" />
    </Box>
    <Box width={160} mr="10px">
      <Select placeholder="Year to Date" style={{ backgound: 'none' }} />
    </Box>
  </Stack>
);

const Title = (props) => {
  const { title, avatar } = clientList.find(client => client.clientCode === props.match.params.clientCode);
  return (
    <Stack>
      <Image
        src={`/${avatar}`}
        fallbackSrc="https://via.placeholder.com/150"
        isRounded
        htmlWidth="110"
        htmlHeight="110"
      />
      <Stack flexDirection="column" ml="20px">
        <div>
          <TextContainer>
            <Caption>Client Overview</Caption>
          </TextContainer>
        </div>
        <div>
          <TextContainer>
            <h1>
              {' '}
              <Heading>{title}</Heading>
            </h1>
          </TextContainer>
        </div>
        <HeaderContent />
      </Stack>
    </Stack>
  );
};

Title.propTypes = {
  match: PropTypes.object,
}

Title.defaultProps = {
  match: {},
}
PageController.propTypes = {
  setIsUploadModal: PropTypes.func,
}
PageController.defaultProps = {
  setIsUploadModal: () => { },
}
export default PageController;
