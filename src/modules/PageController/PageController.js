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

const PageController = () => (
  <Box bg="rgba(220,220,220,0.4)" className="main">
    <Page
      metadata={<Title />}
      breadcrumbs={[{
        content: 'Back to Clients',
        url: '/',
      }]}
    />
  </Box>
);

const HeaderContent = () => (
  <Stack flex="row" mt="30px">
    <Box width={240} mr="10px">
      <Select placeholder="Currency GBP (Default)" width={100} />
    </Box>
    <Box width={150} mr="10px">
      <Select placeholder="All Markets" />
    </Box>
    <Box width={160} mr="10px">
      <Select placeholder="Year to Date" style={{ backgound: 'none' }} />
    </Box>
  </Stack>
);

const Title = () => (
  <Stack>
    <Image
      src="abc.ico"
      fallbackSrc="https://via.placeholder.com/150"
      isRounded
      htmlWidth="110"
      htmlHeight="110"
    />
    <Stack flexDirection="column" ml="20px">
      <div>
        <TextContainer>
          <Caption isSecondary>CLIENT OVERVIEW</Caption>
        </TextContainer>
      </div>
      <div>
        <TextContainer>
          <Heading>Microsoft Corporation</Heading>
        </TextContainer>
      </div>
      <HeaderContent />
    </Stack>
  </Stack>
);

export default PageController;
