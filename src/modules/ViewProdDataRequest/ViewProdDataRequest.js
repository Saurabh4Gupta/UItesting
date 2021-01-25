import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import PropTypes from 'prop-types';
import { useLocation, useHistory } from 'react-router';
import Box from '@dentsu-ui/components/dist/cjs/components/Box';
import Toast from '@dentsu-ui/components/dist/cjs/components/Toast';
import PageController from '../PageController/PageController';
import { dataFieldCms as PageContent } from '../../cms';
import withPageController from '../../hoc/withPageController';
import UploadFile from '../FileUpload/UploadFile';
import RequestSummary from './RequestSummary/RequestSummary';
import { data as mockData } from '../Mock/mockData';
import Loader from '../../components/loading';
// import VersionHistory from '../VersionHistory/VersionHistory';
import MoveToComplete from '../../components/MoveToComplete/MoveToComplete';
import { GET_DATA_REQUESTS } from './queries';
import { parsedDataList } from '../../utils/helper';

const ViewProdDataRequest = (props) => {
  const { param, clientMetaData, marketOptions } = props;
  const { name, avatar, clientCode } = clientMetaData;
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const requestId = query.get('request_id');
  const [prodRequest, setProdRequest] = useState([]);
  const history = useHistory();

  const { loading, error, data: dataRequests } = useQuery(GET_DATA_REQUESTS, {
    variables: { id: requestId },
  });
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
    if (loading) {
      setLoading(false)
    }
    if (error) return `Error! ${error}`;
    if (dataRequests) {
      const { data } = dataRequests.getDataRequests;
      const parsedRes = parsedDataList(data, marketOptions, name)
      console.log(parsedRes)
      setProdRequest(parsedRes)
    }
  }, [dataRequests, loading, error]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleEditData = (values) => {
    setProdRequest([{
      ...prodRequest[0],
      ...values
    }]);
  };
  const handleMoveToComplete = async (flag) => {
    let isSuccess;
    await mockData.data.forEach((item) => {
      if (item.id.toString() === requestId) {
        if (!flag) {
          isSuccess = false;
          return;
        }
        item.isCompleted = true;
        isSuccess = true;
      }
    });

    console.log('VIEW PROD',prodRequest[0])

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
      <Box mb="200px">
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
            {prodRequest.length
                ? (
                  <PageController
                    param={param}
                    localMarket={prodRequest[0].localMarket.label}
                    // pageTitle={prodRequest.name}
                    pageTitle={prodRequest[0].name}
                    pageMetadata={`${name} ${prodRequest[0].localMarket.label}`}
                    handleUploadModal={handleUploadModal}
                    isCompleted={prodRequest.isCompleted}
                    handleMoveToCompleteModal={handleMoveToCompleteModal}
                    clientList={{ name, avatar, clientCode }}
                  >
                    <RequestSummary
                      // prodRequest={prodRequest}
                      prodRequest={prodRequest[0]}
                      name={name}
                      localMarket={prodRequest[0].localMarket.label}
                      handleEditData={handleEditData}
                    />
                    <Box mt="30px">
                      {/* <VersionHistory tracketTemplate={prodRequest[0].tracketTemplate} trackerFiles={prodRequest[0].trackerFiles} /> */}
                      {/* <VersionHistory /> */}
                    </Box>
                  </PageController>
                ) : null}
          </>
          )}
      </Box>
    </>
  );
};
ViewProdDataRequest.propTypes = {
  param: PropTypes.object,
  clientMetaData: PropTypes.object,
  marketOptions: PropTypes.object,
};
ViewProdDataRequest.defaultProps = {
  param: {},
  clientMetaData: PropTypes.object,
  marketOptions: PropTypes.object,
};
export default withPageController(ViewProdDataRequest, { isViewProduct: true });
