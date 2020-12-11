import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router';
import Box from '@dentsu-ui/components/dist/cjs/components/Box';
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
  const [prodRequest, setProdRequest] = useState(
    data.find((request) => request.id === +requestId),
  );

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
  }, []);

  const handleEditData = (values) => {
    setProdRequest({
      ...prodRequest,
      localMarket: values.localMarket,
      dueDate: values.dueDate.toLocaleDateString(),
      name: values.name,
      briefing: values.briefing,
      actualData: values.actualData,
      forecastData: values.forecastData,
      reportingYear: values.reportingYear.value,
      assignTo: 'Ryan Manton',
    });
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
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
            localMarket={prodRequest.localMarket.label}
            filterDataBy={filterDataBy}
            pageTitle={prodRequest.name}
            pageMetadata={prodRequest.clientMarket}
            handleUploadModal={handleUploadModal}
            isCompleted={prodRequest.isCompleted}
          >
            <RequestSummary
              prodRequest={prodRequest}
              handleEditData={handleEditData}
            />
            <Box mt="30px">
              <VersionHistory />
            </Box>
          </PageController>
        </>
      )}
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
