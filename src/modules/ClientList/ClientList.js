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


const ClientList = (props) => {
  const { cmsData } = props;
  const showClientDetails = (clientCode) => {
  props.history.push(`/datafield/${clientCode}`);
  };
  return (
    <>
      <Box mb="200px" ml="40px" mr="40px">
        <Page title={cmsData.viewClientsHeading} description={cmsData.viewClientsCaption}>
          <List
            hasTotal={false}
            isSearchable={false}
            items={clientList}
            renderItem={(item, index) => {
            const { title, clientCode, avatar } = item;
            return (
              <List.Row
                key={index}
                metadata={(
                  <Link
                    style={{ color : 'black', textDecoration : 'none' }}
                    url={`/datafield/${clientCode}`}
                  >
                    {title}
                  </Link>
                )}
                media={(
                  <Link>
                    <Image
                      src={avatar}
                      size="30px"
                      fallbackSrc="https://via.placeholder.com/150"
                      onClick={() => showClientDetails(clientCode)}
                    />
                  </Link>
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
)
};

ClientList.propTypes = {
  cmsData: PropTypes.object,
  history: PropTypes.object,
}
ClientList.defaultProps = {
  cmsData: {},
  history: {},
}

export default ClientList;
