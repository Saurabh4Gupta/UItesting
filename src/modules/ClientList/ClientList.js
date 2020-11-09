import React from 'react';
import {
  Box,
  Caption,
  TextContainer,
  Heading,
  Stack,
  List,
  Link,
  Image,
} from '@dentsu-ui/components';
import PropTypes from 'prop-types';

import { clientList } from '../Mock/mockData';

const ClientList = ({ cmsData }) => (
  <>
    <Stack m="30px 60px">
      <TextContainer>
        <Heading>{cmsData.viewClientsHeading}</Heading>
        <Box mt="10px">
          <Caption isItalic>{cmsData.viewClientsCaption}</Caption>
        </Box>
      </TextContainer>
    </Stack>

    <Stack ml="60px" mr="60px">
      <List
        hasTotal={false}
        isSearchable={false}
        items={clientList}
        renderItem={(item, index) => {
          const { title } = item;
          return (
            <List.Row
              key={index}
              title={title}
              media={(
                <Image
                  src="gibbresh.png"
                  size="30px"
                  fallbackSrc="https://via.placeholder.com/150"
                />
              )}
              actions={(
                <Link iconLeft="layers" url={`/datafield/${item.clientCode}`}>
                  {cmsData.viewDetails}
                </Link>
              )}
            />
          );
        }}
      />
    </Stack>
  </>
);

ClientList.propTypes = {
    cmsData: PropTypes.object,
  }
  ClientList.defaultProps = {
    cmsData: {},
  }

export default ClientList;
