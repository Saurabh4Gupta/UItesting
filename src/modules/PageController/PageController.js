import React from 'react';
import { Page, Select, Image, TextContainer, Box, Stack, Caption, Heading } from '@dentsu-ui/components';

const PageController = () => (
  <Box bg="rgba(220,220,220,0.4)" className="main">
    <Page
      metadata={<Title />}
      breadcrumbs={[{
        content: 'Back to Clients',
        url: '/',
      }]}
      primaryAction={{
        content: 'Upload new file',
        icon: 'upload',
        onClick: () => console.log('Create button clicked'),
        isDisabled: false,
      }}
    />
  </Box>
)

const HeaderContent = () => (
  <Stack flex="row" mt="30px">
    <Box mr="10px">
      <Select placeholder="Currency GBP(Default)" width={200} />
    </Box>
    <Box width={130} mr="10px">
      <Select placeholder="All Markets" />
    </Box>
    <Box width={150} mr="10px">
      <Select placeholder="Year to Date" style={{ backgound: 'none' }} />
    </Box>

  </Stack>
)

const Title = () => (
  <Stack>
    <Image src="abc.ico" fallbackSrc="https://via.placeholder.com/150" isRounded htmlWidth="110" htmlHeight="110" />
    <Stack flexDirection="column" ml="20px">
      <div>
        <TextContainer>
          <Caption>Client Overview</Caption>
        </TextContainer>
      </div>
      <div>
        <TextContainer>
          <h1>
            <Heading>Microsoft Corporation </Heading>
          </h1>
        </TextContainer>
      </div>
      <HeaderContent />
    </Stack>
  </Stack>
)

export default PageController;
