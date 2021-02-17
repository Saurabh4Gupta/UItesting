import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Image from '@dentsu-ui/components/dist/cjs/components/Image';
import { useLazyQuery } from '@apollo/client';
import Icon from '@dentsu-ui/components/dist/cjs/components/Icon';
import Stack from '@dentsu-ui/components/dist/cjs/components/Stack';
import Caption from '@dentsu-ui/components/dist/cjs/components/Caption';
import Box from '@dentsu-ui/components/dist/cjs/components/Box';
import { dataFieldCms as PageContent } from '../../../../cms/dataFieldCms';
import { DOWNLOAD_FILE } from '../../queries';

const TrackerTemplate = (props) => {
  const { trackerTemplate, name, localMarket } = props;
  const [getDownloadFile, { data }] = useLazyQuery(DOWNLOAD_FILE);
  const [urlData, setUrlData] = useState();
  const trackerTemplateName = `${name} ${localMarket.value} - ${trackerTemplate[0].name}`

  useEffect(() => {
    getDownloadFile({ variables: { id: trackerTemplate[0].blobId } })
    if (data) {
      setUrlData(data.downloadFile.data)
    }
  }, [data]);

  return (
    <>
      <Stack flexDirection="column">

        <Box mt="20px" mb="10px">
          <Caption style={{ color: 'gray' }}>
            {PageContent.trackerTemplate}
          </Caption>
        </Box>
        <a href={urlData} download={trackerTemplate[0].name}>
          <Box>
            <Stack flexDirection="row">
              <Image
                src="/microsoft-excel-icon.png"
                fallbackSrc="https://via.placeholder.com/150"
                htmlWidth="30"
                htmlHeight="30"
              />
              <p
                style={{
                  margin: 'auto 6px',
                  fontSize: '13px',
                  fontWeight: '700',
                  color: 'black',
                }}
              >
                {trackerTemplateName}
                {/* Microsoft UK - Prod Template.xlsx */}
                {' '}
              </p>
              <Icon
                style={{ margin: 'auto 6px' }}
                icon="download"
                color="blue"
              />
            </Stack>
          </Box>
        </a>
      </Stack>
    </>
  )
};

TrackerTemplate.propTypes = {
  trackerTemplate: PropTypes.object,
  localMarket: PropTypes.string,
  name: PropTypes.string,
};
TrackerTemplate.defaultProps = {
  trackerTemplate: PropTypes.object,
  localMarket: PropTypes.string,
  name: PropTypes.string,
};

export default TrackerTemplate;
