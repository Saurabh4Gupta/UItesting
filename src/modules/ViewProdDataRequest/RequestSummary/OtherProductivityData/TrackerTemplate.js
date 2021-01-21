import React from 'react';

import Image from '@dentsu-ui/components/dist/cjs/components/Image';

import Icon from '@dentsu-ui/components/dist/cjs/components/Icon';
import Stack from '@dentsu-ui/components/dist/cjs/components/Stack';
import Caption from '@dentsu-ui/components/dist/cjs/components/Caption';
import Box from '@dentsu-ui/components/dist/cjs/components/Box';
import Link from '@dentsu-ui/components/dist/cjs/components/Link';
import { dataFieldCms as PageContent } from '../../../../cms/dataFieldCms';

const TrackerTemplate = (props) => {
  const { trackerTemplate, name, localMarket } = props;
  const trackerTemplateName = `${name} ${localMarket.value} - ${trackerTemplate[0].name}`
  console.log('tracker', localMarket)
  return (
    <>
      <Stack flexDirection="column">

        <Box mt="20px" mb="10px">
          <Caption style={{ color: 'gray' }}>
            {PageContent.trackerTemplate}
          </Caption>
        </Box>
        <Link url="/DataMappings.xlsx">
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
        </Link>
      </Stack>
    </>
  )
};

export default TrackerTemplate;
