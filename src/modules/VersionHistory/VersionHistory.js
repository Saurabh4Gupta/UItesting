import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  FileLockup,
  Layout,
  IconButton,
  List,
  Card,
  Button,
  Stack,
  Link,
} from '@dentsu-ui/components';
import { slice, concat } from 'lodash';
import { dataFieldCms as PageContent } from '../../cms';


const VersionHistory = (props) => {
  const { trackerFiles, tracketTemplate } = props;
  const reversedData = trackerFiles.length ? [...trackerFiles].reverse() : [{
    id: 1,
    name: tracketTemplate[0].name,
    type: 'xls',
    size: '242KB',
    version: 'Template',
    dataRequest: '',
    blobId: '',
    createdAt: '2020-12-01',
  }]
  const len = reversedData.length;
  const lattestVersion = reversedData[0].version;

  const LIMIT = 10;
  const [list, setList] = useState(slice(reversedData, 0, LIMIT));
  const [index, setIndex] = useState(LIMIT);

  const loadMore = () => {
    const newIndex = index + LIMIT;
    const newList = concat(list, slice(reversedData, index, newIndex));
    setIndex(newIndex);
    setList(newList);
  };

  const downloadButton = (
    <Link url="/DataMappings.xlsx" style={{ color: 'black' }}>
      <IconButton variant="ghost" icon="download" size="small" />
    </Link>
);

  return (
    <>
      <Layout>
        <Layout.Section size="2/3">
          <Layout.Panel>
            {/* <FileLockup name="Microsoft UK " extension="xls" filesize={123450000} hasStatus statusLabel="Current version" action={menu} /> */}
          </Layout.Panel>
        </Layout.Section>
        <Layout.Section size="1/3">
          <Layout.Panel>
            <Card.Title>{PageContent.versionHistoryTitle}</Card.Title>

            <List
              hasTotal={false}
              isSearchable={false}
              items={list}
              total={reversedData.length}
              renderItem={(item) => {
                const { name, size, type, version } = item;
                return (
                  <FileLockup
                    style={{ padding: '20px' }}
                    name={`${name} ${version}`}
                    extension={type}
                    filesize={size}
                    hasStatus={version === lattestVersion}
                    statusLabel={version === lattestVersion ? PageContent.currentVersionText : ''}
                    statusVariant="positive"
                    action={downloadButton}
                    size="medium"
                  />
                )
              }}
            />

            {len >= 10 && list.length < len ? (
              <Stack justifyContent="center" style={{ marginTop: '25px' }}>
                <Button
                  variant="ghost"
                  size="small"
                  iconRight="refresh"
                  style={{ color: 'black' }}
                  onClick={loadMore}
                >
                  {PageContent.loadMoreText}
                </Button>
              </Stack>
            ) : (
                false
              )}
          </Layout.Panel>
        </Layout.Section>
      </Layout>
    </>
  )
};
VersionHistory.propTypes = {
  trackerFiles: PropTypes.arrayOf(PropTypes.object),
  tracketTemplate: PropTypes.arrayOf(PropTypes.object),

};
VersionHistory.defaultProps = {
  tracketTemplate: PropTypes.arrayOf(PropTypes.object),
  trackerFiles: [],
};

export default VersionHistory;
