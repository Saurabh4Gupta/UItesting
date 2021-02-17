import React, { useContext } from 'react';
import { Page, Select, FormField } from '@dentsu-ui/components';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { dataFieldCms as PageContent } from '../../cms';
import { MetaDataContext, FlagIt } from '../../contexts/marketOptions';

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
    isComplete,
    pageMetadata,
    handleMoveToCompleteModal,
  } = props;
  const { isViewProduct } = param;

  const { marketOptions, clientMetaData } = useContext(MetaDataContext);

  const { name, clientCode, avatar } = clientMetaData;
  const userPermissionInfo = useContext(FlagIt);

  let userUploadPermission = false;
  let userEditDeletePermission = false;

  userPermissionInfo.forEach(item => {
    if (item.resource === 'PTF') {
      userUploadPermission = true;
    } else if (item.resource === 'PDR') {
    userEditDeletePermission = true;
    }
  })

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
          isViewProduct && !isComplete && userUploadPermission === true
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
          && !isComplete && userEditDeletePermission === true && [
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
                value={market || { value: 'All', label: 'All Markets' }}
                onChange={handleMarket}
              />
            </FormField>
          )
        }
        status={
          isComplete
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
  isComplete: PropTypes.bool,
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
  isComplete: false,
  pageMetadata: '',
  handleMoveToCompleteModal: () => {},
};
export default PageController;
