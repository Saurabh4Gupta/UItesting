/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-closing-bracket-location */
import React, { useContext } from 'react';
import { Box, List, Link, Image, Page } from '@dentsu-ui/components';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { ClientList as ClientListContext } from '../../contexts/marketOptions';

const ClientList = (props) => {
  const { cmsData } = props;
  const history = useHistory();
  const showClientDetails = (clientCode) => {
    const queryString = `client_code=${clientCode}`;
    history.push({
      pathname: '/datafield',
      search: `?${queryString}`,
    });
  };

  const clientlist = useContext(ClientListContext);
  return (
    <>
      <Box mb="200px" ml="40px" mr="40px">
        <Page
          title={cmsData.viewClientsHeading}
          description={cmsData.viewClientsCaption}>
          <List
            hasTotal={false}
            isSearchable={false}
            //  items={clientList}
            items={clientlist}
            renderItem={(item, index) => {
              const { name, code, avatar } = item;
              return (
                <List.Row
                  key={index}
                  metadata={
                    <Link
                      style={{ color: 'black', textDecoration: 'none' }}
                      onClick={() => showClientDetails(code)}>
                      {name}
                    </Link>
                  }
                  media={
                    <Link>
                      <Image
                        src={avatar}
                        size="30px"
                        fallbackSrc="https://via.placeholder.com/150"
                        onClick={() => showClientDetails(code)}
                      />
                    </Link>
                  }
                  actions={
                    <Link
                      iconLeft="layers"
                      onClick={() => showClientDetails(code)}>
                      {cmsData.viewDetails}
                    </Link>
                  }
                />
              );
            }}
          />
        </Page>
      </Box>
    </>
  );
};

ClientList.propTypes = {
  cmsData: PropTypes.object,
};
ClientList.defaultProps = {
  cmsData: {},
};

export default ClientList;
