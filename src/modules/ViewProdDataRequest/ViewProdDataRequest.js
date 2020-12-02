import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router';
import PageController from '../PageController/PageController';
import { dataFieldCms as PageContent } from '../../cms';
import withPageController from '../../hoc/withPageController';
import UploadFile from '../FileUpload/UploadFile';
import RequestSummary from './RequestSummary/RequestSummary';
import { data as prodRequests } from '../Mock/mockData';

const ViewProdDataRequest = (props) => {
  const { param } = props;
  const { data } = prodRequests;

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const requestId = query.get('request_id');
  const prodRequest = data.find((request) => request.id === +requestId);

  const [isUploadModal, setIsUploadModeal] = useState(false);
  const [filterDataBy] = useState({
    currency: { label: 'GBP (Default)', value: 'gbp' },
    year: { label: 'Year to date', value: '' },
  });

  const handleUploadModal = () => {
    setIsUploadModeal(true);
  };
  return (
    <>
      {isUploadModal && (
        <UploadFile
          modalOpen={isUploadModal}
          setModalOpen={setIsUploadModeal}
          cmsData={PageContent}
        />
      )}
      <PageController
        param={param}
        filterDataBy={filterDataBy}
        pageTitle={prodRequest.name}
        isCompleted={prodRequest.isCompleted}
        handleUploadModal={handleUploadModal}
      />
      <RequestSummary prodRequest={prodRequest} />
    </>
  );
};
ViewProdDataRequest.propTypes = {
  param: PropTypes.object,
};
ViewProdDataRequest.defaultProps = {
  param: {},
};
export default withPageController(ViewProdDataRequest, { isViewProduct: true });
