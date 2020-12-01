import React from 'react';
import { Page, Select, FormField } from '@dentsu-ui/components';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router';
import { clientList, year, currency, assignToOptions } from '../Mock/mockData';

const PageController = (props) => {
  const history = useHistory();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const clientCode = query.get('client_code');

  const {
    param,
    filterDataBy,
    handleMarket,
    children,
    handleUploadModal,
    pageTitle,
  } = props;
  const { isViewProduct } = param;
  const { title, avatar } = clientList.find(
    (client) => client.clientCode === clientCode,
  );
  const contentToShow = isViewProduct ? `Back to ${title}` : 'Back to Clients';
  const clientNavigationHandler = () => (isViewProduct
      ? history.replace(`/datafield?client_code=${clientCode}`)
      : history.replace('/'));

  return (
    <>
      <Page
        metadata={isViewProduct ? 'Microsoft United Kingdom' : 'Client Overview'}
        title={!isViewProduct ? title : pageTitle}
        thumbnail={`/${avatar}`}

        breadcrumbs={[
          {
            content: contentToShow,
            onClick: clientNavigationHandler,
          },
        ]}
        primaryAction={
          isViewProduct
            ? {
                content: 'Upload new file',
                onClick: () => handleUploadModal(),
                isDisabled: false,
                icon: 'upload',
              }
            : false
        }
        controls={(
          <>
            {!isViewProduct && (
              <FormField>
                <Select
                  width={200}
                  options={currency}
                  value={filterDataBy.currency}
                />
              </FormField>
            )}
            {!isViewProduct && (
              <FormField>
                <Select
                  width={200}
                  options={assignToOptions}
                  value={filterDataBy.market}
                  onChange={(selected, event) => {
                    handleMarket(selected, event);
                  }}
                />
              </FormField>
            )}
            {!isViewProduct && (
              <FormField>
                <Select width={200} options={year} value={filterDataBy.year} />
              </FormField>
            )}
          </>
        )}
      >
        {children}
      </Page>
    </>
  );
};

PageController.propTypes = {
  param: PropTypes.object,
  filterDataBy: PropTypes.object,
  handleMarket: PropTypes.func,
  children: PropTypes.node,
  handleUploadModal: PropTypes.func,
  pageTitle: PropTypes.string,
};
PageController.defaultProps = {
  param: { isViewProduct: false },
  filterDataBy: {
    market: { label: 'All Markets', value: '' },
    currency: { value: 'gbp', label: 'Currency GBP (default' },
    year: { value: '', label: 'Year to date' },
  },
  children: '',
  handleMarket: () => {},
  handleUploadModal: () => {},
  pageTitle: '',
};
export default PageController;
