/* eslint-disable radix */
import React from 'react';
import { List, Link, Image, Stack, Icon, Divider, Chip, Button } from '@dentsu-ui/components';
import Box from '@dentsu-ui/components/dist/cjs/components/Box';
import Card from '@dentsu-ui/components/dist/cjs/components/Card';
import { versionHistory } from '../Mock/mockData';
// import { dataFieldCms as PageContent } from '../../cms';


const VersionHistory = (props) => {
  console.log('versionHistory', versionHistory.data.length);
  return (
    <>
      <Box ml="60%" mr="65px" mt="20px" mb="100px">
        <Card>
          <Card.Title>
            Version history
          </Card.Title>
          <List
            hasTotal={false}
            isSearchable={false}
            items={versionHistory.data}
            total={versionHistory.data.length}
            renderItem={(item, index) => {
              const { name, size, type, version } = item;
              const dataLength = versionHistory.data.length;
              return (
                <Link url="/DataMappings.xlsx" style={{ color: 'black' }}>
                  <Stack
                    flexDirection="row"
                    justifyContent="space-between"
                    style={{ border: '1px solid #f6f6f6' }}
                    mb="2"
                    width="370px"
                    mt="2"

                  >
                    <Box mt="12px" ml="12px">
                      <Card.Thumbnail>
                        <Image
                          htmlWidth={40}
                          height={40}
                          objectFit="contain"
                          src="/microsoft-excel-icon.png"
                          fallbackSrc="https://via.placeholder.com/150"
                        />
                      </Card.Thumbnail>
                    </Box>

                    <Stack flexDirection="column" mb="20px">
                      <Box style={{ fontSize: '12px' }} mt="15px" ml="10px">
                        <b>
                          {name}
                          {version}
                        </b>
                      </Box>
                      <Box style={{ fontSize: '12px' }} ml="10px" mt="7px">
                        {size}
                        <Divider orientation="vertical" />
                        {type}
                        {dataLength > 1 ? (
                          <>
                            {version === `V${dataLength - 1}.0` ? (
                              <>
                                <Divider orientation="vertical" />
                                <Chip variant="status" status="neutral" style={{ fontSize: '8px' }}>
                                  current version
                                </Chip>
                              </>
                            ) : false}
                          </>
                        ) : (
                          <>
                            <Divider orientation="vertical" />
                            <Chip variant="status" status="neutral" style={{ fontSize: '8px' }}>
                              current version
                            </Chip>
                          </>
                          )}
                      </Box>
                    </Stack>
                    <Box>
                      <Icon
                        style={{ marginTop: '15px', marginRight: '10px', marginLeft: '25px' }}
                        icon="download"
                        color="blue"
                        size="14"
                      />
                    </Box>
                  </Stack>
                </Link>
              );
            }}


          />
          <Button variant="ghost" size="small" marginTop="50px" style={{ color: 'black' }}>
            Load more
            <Icon
              style={{ marginTop: '15px', marginLeft: '10px' }}
              icon="refresh"
              color="blue"
              size="14"
            />
          </Button>

        </Card>

      </Box>
    </>
  )
}

export default VersionHistory;
