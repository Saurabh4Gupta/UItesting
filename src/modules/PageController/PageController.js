import React, { useContext } from 'react';
import { Page, Select, FormField } from '@dentsu-ui/components';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { dataFieldCms as PageContent } from '../../cms';
import { MetaDataContext } from '../../contexts/marketOptions';

const PageController = (props) => {
  const history = useHistory();
  // const query = new URLSearchParams(location.search);
  // const clientCode = query.get('client_code');
  const {
    param,
    market,
    handleMarket,
    children,
    handleUploadModal,
    pageTitle,
    isCompleted,
    pageMetadata,
    handleMoveToCompleteModal,
  } = props;
  const { isViewProduct } = param;

  const { marketOptions, clientMetaData } = useContext(MetaDataContext);

  const { name, clientCode, avatar } = clientMetaData;

  const contentToShow = isViewProduct
    ? `Back to ${name}`
    : `${PageContent.backLabel}`;
  const clientNavigationHandler = () => (isViewProduct
      ? history.replace(`/datafield?client_code=${clientCode}`)
      : history.replace('/'));

  return (
    <>
      <Page
        metadata={pageMetadata}
        title={!isViewProduct ? name : pageTitle}
        thumbnail={`/${avatar}`}
        breadcrumbs={[
          {
            content: contentToShow,
            onClick: clientNavigationHandler,
          },
        ]}
        primaryAction={
          isViewProduct && !isCompleted
            ? {
                content: `${PageContent.uploadButtonText}`,
                onClick: () => handleUploadModal(),
                isDisabled: false,
                icon: 'upload',
              }
            : false
        }
        secondaryActions={
          isViewProduct
          && !isCompleted && [
            {
              content: 'Move to complete',
              onClick: () => handleMoveToCompleteModal(),
              isDisabled: false,
            },
          ]
        }
        controls={
          !isViewProduct && (
            <FormField>
              <Select
                width={200}
                options={marketOptions}
                value={market}
                onChange={handleMarket}
              />
            </FormField>
          )
        }
        status={
          isCompleted
            ? { type: 'neutral', label: 'Complete', hasStatusLight: true }
            : ''
        }
      >
        {children}
      </Page>
    </>
  );
};

PageController.propTypes = {
  param: PropTypes.object,
  market: PropTypes.object,
  handleMarket: PropTypes.func,
  children: PropTypes.node,
  handleUploadModal: PropTypes.func,
  pageTitle: PropTypes.string,
  isCompleted: PropTypes.bool,
  pageMetadata: PropTypes.string,
  handleMoveToCompleteModal: PropTypes.func,
};

PageController.defaultProps = {
  param: { isViewProduct: false },
  market: { value: '', label: 'All markets' },
  children: '',
  handleMarket: () => {},
  handleUploadModal: () => {},
  pageTitle: '',
  isCompleted: false,
  pageMetadata: '',
  handleMoveToCompleteModal: () => {},
};
export default PageController;
