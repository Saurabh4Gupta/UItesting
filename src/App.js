import React, { Suspense } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './apollo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Frame, Loading, Page, Tabs, Select, Image, TextContainer } from '@dentsu-ui/components';
import "./app.css"
import Layout from '@dentsu-ui/components/dist/cjs/components/Layout';
import Box from '@dentsu-ui/components/dist/cjs/components/Box';
import Stack from '@dentsu-ui/components/dist/cjs/components/Stack';
import Caption from '@dentsu-ui/components/dist/cjs/components/Caption';
import Heading from '@dentsu-ui/components/dist/cjs/components/Heading';
import Overview from './modules/Overview/Overview';

const Application = (props) => {

  return (
    <Router {...props}>
      <ApolloProvider client={client}>
        <Frame>
          <Box bg="rgba(220,220,220,0.4)" className="main">
            <Page metadata={<Title />} breadcrumbs={[{
              content: 'Back to Clients',
              url: '/'
            }]} primaryAction={{
              content: 'Upload new file',
              icon: 'upload',
              onClick: () => console.log('Create button clicked'),
              isDisabled: false
            }} />
          </Box>
          <Switch>
            <Route exact path="/">
              <Overview />
            </Route>
          </Switch>
        </Frame>
      </ApolloProvider>
    </Router >
  );
};

export default Application;


const HeaderContent = () => {
  return <Stack flex="row" mt="30px" >
    <Box width={200} mr="10px" >
      <Select placeholder="Currency GBP(Default)" width={100} />
    </Box>
    <Box width={130} mr="10px">
      <Select placeholder="All Markets" />
    </Box>
    <Box width={150} mr="10px">
      <Select placeholder="Year to Date" style={{ backgound: 'none' }} />
    </Box>

  </Stack>
}

const Title = () => {
  return <Stack>
    <Image src="abc.ico" fallbackSrc="https://via.placeholder.com/150" isRounded htmlWidth="110" htmlHeight="110" />
    <Stack flexDirection="column" ml="20px">
      <div>
        <TextContainer>
          <Caption>Client Overview</Caption>
        </TextContainer>
      </div>
      <div>
        <TextContainer>
          <h1> <Heading>Microsoft Corporation </Heading></h1>
        </TextContainer>
      </div>
      <HeaderContent />
    </Stack>
  </Stack >
}
