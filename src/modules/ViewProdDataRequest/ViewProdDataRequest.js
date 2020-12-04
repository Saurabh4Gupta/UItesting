import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router';
import PageController from '../PageController/PageController';
import { dataFieldCms as PageContent } from '../../cms';
import withPageController from '../../hoc/withPageController';
import UploadFile from '../FileUpload/UploadFile';
import RequestSummary from './RequestSummary/RequestSummary';
import { data as prodRequests } from '../Mock/mockData';
import Loader from '../../components/loading';
import VersionHistory from '../VersionHistory/VersionHistory';

const ViewProdDataRequest = (props) => {
  const { param } = props;
  const { data } = prodRequests;

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const requestId = query.get('request_id');
  const prodRequest = data.find((request) => request.id === +requestId);

  const [isUploadModal, setIsUploadModeal] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [filterDataBy] = useState({
    currency: { label: 'GBP (Default)', value: 'gbp' },
    year: { label: 'Year to date', value: '' },
  });

  const handleUploadModal = () => {
    setIsUploadModeal(true);
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [])
  const handleEditData = (values) => {
    prodRequest.localMarket = values.localMarket;
    prodRequest.dueDate = '01/01/2021';
    prodRequest.name = values.name;
    prodRequest.briefing = values.briefing;
    prodRequest.actualData = values.actualData;
    prodRequest.forecastData = values.forecastData;
    prodRequest.reportingYear = 'April 2021 - March 2022';
    prodRequest.assignTo = 'Ryan Manton';
    console.log('valueuueue', prodRequest.name)
  }
  return (
    <>
      {
      isLoading ? <Loader /> : (
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
            handleUploadModal={handleUploadModal}
            isCompleted={prodRequest.isCompleted}
          />
          <RequestSummary prodRequest={prodRequest} handleEditData={handleEditData} />
          <VersionHistory />
        </>
)
    }
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
