/* eslint-disable radix */
import React, { useState } from 'react';
import {
  List,
  Link,
  Image,
  Stack,
  Icon,
  Divider,
  Chip,
  Button,
} from '@dentsu-ui/components';
import Box from '@dentsu-ui/components/dist/cjs/components/Box';
import Card from '@dentsu-ui/components/dist/cjs/components/Card';
import { slice, concat } from 'lodash';
import Layout from '@dentsu-ui/components/dist/cjs/components/Layout';
import Paragraph from '@dentsu-ui/components/dist/cjs/components/Paragraph';
import { versionHistory } from '../Mock/mockData';

const VersionHistory = () => {
  const len = versionHistory.data.length;
  const LIMIT = 10;
  const [list, setList] = useState(slice(versionHistory.data, 0, LIMIT));
  const [index, setIndex] = useState(LIMIT);

  const loadMore = () => {
    const newIndex = index + LIMIT;
    const newList = concat(list, slice(versionHistory.data, index, newIndex));
    setIndex(newIndex);
    setList(newList);
  };
  return (
    <Layout>
      <Layout.Section>
        <Card>{/* <h1>Comments</h1> */}</Card>
      </Layout.Section>
      <Layout.Section size="1/3">
        <Card>
          <Card.Title>Version history</Card.Title>
          <List
            hasTotal={false}
            isSearchable={false}
            items={list}
            total={versionHistory.data.length}
            renderItem={(item) => {
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
                      <Box mt="15px" ml="10px">
                        <Paragraph style={{ fontSize: '12px' }} isBold>
                          {`${name} ${version}`}
                        </Paragraph>
                      </Box>
                      <Box style={{ fontSize: '12px' }} ml="10px" mt="7px">
                        {size}
                        <Divider orientation="vertical" />
                        {type}
                        {dataLength > 1 && (
                          <>
                            {version === `V${dataLength - 1}.0` && (
                              <>
                                <Divider orientation="vertical" />
                                <Chip
                                  variant="status"
                                  status="neutral"
                                  style={{ fontSize: '8px' }}
                                >
                                  current version
                                </Chip>
                              </>
                            )}
                          </>
                        )}
                      </Box>
                    </Stack>
                    <Box>
                      <Icon
                        style={{
                          marginTop: '15px',
                          marginRight: '10px',
                          marginLeft: '25px',
                        }}
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
          {len >= 10 && list.length < len ? (
            <Box style={{ margin: '10px auto' }}>
              <Button
                variant="ghost"
                size="small"
                iconRight="refresh"
                style={{ color: 'black' }}
                onClick={loadMore}
              >
                Load more
              </Button>
            </Box>
          ) : (
            false
          )}
        </Card>
      </Layout.Section>
    </Layout>
  );
};

export default VersionHistory;
