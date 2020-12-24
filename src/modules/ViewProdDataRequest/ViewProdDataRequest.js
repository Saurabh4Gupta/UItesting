import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useHistory } from 'react-router';
import Box from '@dentsu-ui/components/dist/cjs/components/Box';
import Toast from '@dentsu-ui/components/dist/cjs/components/Toast';
import PageController from '../PageController/PageController';
import { dataFieldCms as PageContent } from '../../cms';
import withPageController from '../../hoc/withPageController';
import UploadFile from '../FileUpload/UploadFile';
import RequestSummary from './RequestSummary/RequestSummary';
import { getDataById, data as mockData } from '../Mock/mockData';
import Loader from '../../components/loading';
import VersionHistory from '../VersionHistory/VersionHistory';
import MoveToComplete from '../../components/MoveToComplete/MoveToComplete';

const ViewProdDataRequest = (props) => {
  const { param } = props;

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const requestId = query.get('request_id');
  const clientCode = query.get('client_code');
  const [prodRequest, setProdRequest] = useState(getDataById(requestId));
  const history = useHistory();

  const [isUploadModal, setIsUploadModeal] = useState(false);
  const [isRequestModal, setIsRequestModal] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const handleUploadModal = () => {
    setIsUploadModeal(true);
  };
  const handleMoveToCompleteModal = () => {
    setIsRequestModal(true);
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
      reportingYear: values.reportingYear,
      assignTo: values.assignTo,
    });
  };
  const handleMoveToComplete = async (flag) => {
    let isSuccess;
    await mockData.data.forEach((item) => {
      if (item.id.toString() === requestId) {
        if (flag === false) {
          isSuccess = false;
          return;
        }
        item.isCompleted = true;
        isSuccess = true;
      }
    });

    setIsRequestModal(false)
    const toast = new Toast();
    const toastError = new Toast();
    if (isSuccess) {
      const queryString = `client_code=${clientCode}`;
      history.push({
        pathname: '/datafield',
        search: `?${queryString}`,
      });
     return toast({
        title: '',
        content: PageContent.toastMovedToComplete,
        status: 'success',
      });
    }
    return toastError({
      title: '',
      content: PageContent.failurNotificationMsg,
      status: 'error',
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
          {isRequestModal && (
            <MoveToComplete
              modalOpen={isRequestModal}
              setModalOpen={setIsRequestModal}
              cmsData={PageContent}
              handleMoveToComplete={() => handleMoveToComplete(false)}
            />
          )}
          <PageController
            param={param}
            localMarket={prodRequest.localMarket.label}
            pageTitle={prodRequest.name}
            pageMetadata={prodRequest.clientMarket}
            handleUploadModal={handleUploadModal}
            isCompleted={prodRequest.isCompleted}
            handleMoveToCompleteModal={handleMoveToCompleteModal}
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
