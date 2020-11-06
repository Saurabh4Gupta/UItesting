/* eslint-disable react/prop-types */
import React from 'react';
import {
  Paragraph,
  EmptyState,
} from '@dentsu-ui/components';
import { withRouter } from 'react-router-dom';
import { dataFieldCms as PageContent } from '../../cms'

const EmptyTable = (props) => (
  <EmptyState
    layout="horizontal"
    size="small"
    image="create"
    actions={{
      secondary: {
        label: PageContent.emptyLabel,
        onClick: () => props.handleModal(true),
        isDisabled: false,
        isExternal: true,
        iconLeft: 'add',
        iconRight: null,
        isLoading: false,
      },
    }}
  >
    <Paragraph>
      {PageContent.emptyProductivityDatarequestCaption}
    </Paragraph>
  </EmptyState>
);

export default withRouter(EmptyTable);
