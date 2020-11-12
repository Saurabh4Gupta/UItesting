import React from 'react';
import {
  Box,
  List,
  Link,
  Image,
  Page,
} from '@dentsu-ui/components';
import PropTypes from 'prop-types';
import { clientList } from '../Mock/mockData';

const ClientList = ({ cmsData }) => (
  <>
    <Box mb="200px" ml="40px" mr="40px">
      <Page title={cmsData.viewClientsHeading} description={cmsData.viewClientsCaption}>
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
      </Page>
    </Box>

  </>
);

ClientList.propTypes = {
  cmsData: PropTypes.object,
}
ClientList.defaultProps = {
  cmsData: {},
}

export default ClientList;
