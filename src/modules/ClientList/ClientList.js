import React, { useState, useEffect } from 'react';
import { Box, List, Link, Image, Page } from '@dentsu-ui/components';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { clientList } from '../Mock/mockData';
import Loader from '../../components/loading';

const ClientList = (props) => {
  const [isLoading, setLoading] = useState(true);
  const { cmsData } = props;
  const history = useHistory();
  const showClientDetails = (clientCode) => {
    const queryString = `client_code=${clientCode}`;
    history.push({
      pathname: '/datafield',
      search: `?${queryString}`,
    });
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      <Box mb="200px" ml="40px" mr="40px">
        <Page
          title={cmsData.viewClientsHeading}
          description={cmsData.viewClientsCaption}
        >
          {isLoading ? (
            <Loader />
          ) : (
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
                        style={{ color: 'black', textDecoration: 'none' }}
                        onClick={() => showClientDetails(clientCode)}
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
                      <Link
                        iconLeft="layers"
                        onClick={() => showClientDetails(clientCode)}
                      >
                        {cmsData.viewDetails}
                      </Link>
                  )}
                  />
                );
              }}
            />
          )}
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
