/* eslint-disable react/prop-types */
import React from 'react';
import {
  Paragraph,
  EmptyState,
} from '@dentsu-ui/components';

const EmptyTable = () => {
  return (
    <div
      style={{
        background: '#f8f8f8',
        height: '100vh',
      }}>
      <EmptyState
        layout="horizontal"
        size="small"
        image="create"
        actions={{
          secondary: {
            label: 'Add a new data request',
            url: 'http://www.google.com',
            onClick: () => alert('Secondary action callback fired!'),
            isDisabled: false,
            isExternal: true,
            iconLeft: 'add',
            iconRight: null,
            isLoading: false,
          },
        }}>
        <Paragraph>
          No productivity data requests have been moved to this section yet.
        </Paragraph>
      </EmptyState>
    </div>
  );
};

export default EmptyTable;
