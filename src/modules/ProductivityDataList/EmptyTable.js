/* eslint-disable react/prop-types */
import React from 'react';
import {
  Paragraph,
  EmptyState,
} from '@dentsu-ui/components';
import { dataFieldCms as PageContent } from '../../cms'

const EmptyTable = () => (
  <EmptyState
    layout="horizontal"
    size="small"
    image="create"
    actions={{
          secondary: {
            label: PageContent.emptyLabel,
            url: 'http://www.google.com',
            onClick: () => alert('Secondary action callback fired!'),
            isDisabled: false,
            isExternal: true,
            iconLeft: 'add',
            iconRight: null,
            isLoading: false,
          },
        }}
  >
    <Paragraph>
      { PageContent.emptyProductivityDatarequestCaption }
    </Paragraph>
  </EmptyState>
  );

export default EmptyTable;
