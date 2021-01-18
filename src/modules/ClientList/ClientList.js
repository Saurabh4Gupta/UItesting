import React from 'react';
// import React, { useState } from 'react';
import { Box, List, Link, Image, Page } from '@dentsu-ui/components';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { useQuery } from '@apollo/client';
// import { clientList } from '../Mock/mockData';
import Loader from '../../components/loading';
import Error from '../../components/Error/Error'
import GET_LIST_CLIENT from './query';

const ClientList = (props) => {
 // const [isLoading, setLoading] = useState(true);
  const { cmsData } = props;
  const history = useHistory();
  const showClientDetails = (clientCode) => {
    const queryString = `client_code=${clientCode}`;
    history.push({
      pathname: '/datafield',
      search: `?${queryString}`,
    });
  };
  const { data, error, loading } = useQuery(GET_LIST_CLIENT, {
    notifyOnNetworkStatusChange: true,
  });
  // useEffect(() => {
  //   if (data) {
  //     setClientData(data);
  //   }
  //   if (loading) return <Loader />;
  //   if (error) return <Error />;
  //   }, [data, error, loading]);
  if (loading) return <Loader />;
  if (error) return <Error />;
  // if (data) { setClientData(data) }
 // console.log('clientData', clientData.getClientsList.data);
  return (
    <>
      <Box mb="200px" ml="40px" mr="40px">
        <Page
          title={cmsData.viewClientsHeading}
          description={cmsData.viewClientsCaption}
        >
          {/* {isLoading ? (
            <Loader />
          ) : ( */}
          <List
            hasTotal={false}
            isSearchable={false}
            //  items={clientList}
            items={data.getClientsList.data}
            renderItem={(item, index) => {
                const { name, code, avatar } = item;
                return (
                  <List.Row
                    key={index}
                    metadata={(
                      <Link
                        style={{ color: 'black', textDecoration: 'none' }}
                        onClick={() => showClientDetails(code)}
                      >
                        {name}
                      </Link>
                    )}
                    media={(
                      <Link>
                        <Image
                          src={avatar}
                          size="30px"
                          fallbackSrc="https://via.placeholder.com/150"
                          onClick={() => showClientDetails(code)}
                        />
                      </Link>
                    )}
                    actions={(
                      <Link
                        iconLeft="layers"
                        onClick={() => showClientDetails(code)}
                      >
                        {cmsData.viewDetails}
                      </Link>
                  )}
                  />
                );
              }}
          />
          {/* )} */}
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
