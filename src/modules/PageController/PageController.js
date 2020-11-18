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

const PageController = (props) => {
  const { isToShowDataRequest, history, clientCode } = props;
  const { title } = clientList.find(
    (client) => client.clientCode === clientCode,
  );
  const contentToShow = isToShowDataRequest
    ? `Back to ${title}`
    : 'Back to Clients';
  const clientNavigationHandler = () => (isToShowDataRequest
      ? history.replace(`/datafield/${clientCode}`)
      : history.replace('/'));
  return (
    <Box bg="rgba(220,220,220,0.4)" className="main">
      <Page
        metadata={<Title onBack={clientNavigationHandler} {...props} />}
        primaryAction={{
          content: 'Upload new File',
          icon: 'upload',
          onClick: () => props.setIsUploadModal(true),
          isDisabled: false,
        }}
        breadcrumbs={[
          {
            content: contentToShow,
            onClick: clientNavigationHandler,
          },
        ]}
      />
    </Box>
  );
};

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
  const { onBack, isToShowDataRequest, clientCode } = props;
  const { title, avatar } = clientList.find(
    (client) => client.clientCode === clientCode,
  );
  return (
    <Stack>
      <Image
        src={`/${avatar}`}
        fallbackSrc="https://via.placeholder.com/150"
        isRounded
        htmlWidth="110"
        htmlHeight="110"
        onClick={isToShowDataRequest && onBack}
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
  isToShowDataRequest: PropTypes.bool,
  clientCode: PropTypes.string,
  onBack: PropTypes.func,
};

Title.defaultProps = {
  isToShowDataRequest: false,
  clientCode: '',
  onBack: () => {},
};
PageController.propTypes = {
  setIsUploadModal: PropTypes.func,
  isToShowDataRequest: PropTypes.bool,
  clientCode: PropTypes.string,
  history: PropTypes.object,
};
PageController.defaultProps = {
  setIsUploadModal: () => {},
  isToShowDataRequest: false,
  clientCode: '',
  history: {},
};
export default PageController;
