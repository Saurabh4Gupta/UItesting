import React,  { useEffect, useState } from 'react';
import { Page, Select, FormField } from '@dentsu-ui/components';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router';
import { market as marketOptions } from '../Mock/mockData';
import { dataFieldCms as PageContent } from '../../cms';

const PageController = (props) => {
  const [clientsListsData, setClientsListsData] = useState({});
  const history = useHistory();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const clientCode = query.get('client_code');
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
    clilentsdata,
  } = props;
  const { isViewProduct } = param;
  // const { title, avatar } = clientList.find(
  //   (client) => client.clientCode === clientCode,
  // );
  useEffect(() => {
    if (clilentsdata) {
      setClientsListsData(clilentsdata)
    }
    }, [clilentsdata]);

  if (clientsListsData.getClientsList) {
    const { name, avatar } = clientsListsData.getClientsList.data.find(
    (client) => client.code === clientCode,
    );

  // const { name, avatar } = clilentdata.getClientsList.data.find(
  //   (client) => client.code === clientCode,
  // );
  const contentToShow = isViewProduct ? `Back to ${name}` : `${PageContent.backLabel}`;
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
          isViewProduct && !isCompleted
          && [{
            content: 'Move to complete',
            onClick: () => handleMoveToCompleteModal(),
            isDisabled: false,
          }]
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
          )}
        status={isCompleted ? { type: 'neutral', label: 'Complete', hasStatusLight: true } : ''}
      >
        {children}
      </Page>
    </>
  );
} return null
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
  clilentsdata: PropTypes.JSON,
};

PageController.defaultProps = {
  param: { isViewProduct: false },
  market: { value: '', label: 'All markets' },
  children: '',
  handleMarket: () => { },
  handleUploadModal: () => { },
  pageTitle: '',
  isCompleted: false,
  pageMetadata: '',
  handleMoveToCompleteModal: () => { },
  clilentsdata: PropTypes.JSON,
};
export default PageController;
