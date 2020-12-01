import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Link } from '@dentsu-ui/components';
import PageController from '../PageController/PageController';
import EditData from '../CreateData/EditData'
import { dataFieldCms as PageContent } from '../../cms';
import withPageController from '../../hoc/withPageController';
import UploadFile from '../FileUpload/UploadFile';

const ViewProdDataRequest = (props) => {
  const { param } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUploadModal, setIsUploadModeal] = useState(false);
  const [filterDataBy] = useState({
    currency: { label: 'GBP (Default)', value: 'gbp' },
    year: { label: 'Year to date', value: '' },
  });
  const handleModal = (value) => {
    setIsModalOpen(value);
  };

  const handleCreateData = () => {
    handleModal(true);
  };
  const handleUploadModal = () => {
    setIsUploadModeal(true)
  }
  return (
    <>
      {isUploadModal && <UploadFile modalOpen={isUploadModal} setModalOpen={setIsUploadModeal} cmsData={PageContent} />}
      <PageController param={param} filterDataBy={filterDataBy} handleUploadModal={handleUploadModal}>
        <Box mb="200px">
          <Link iconLeft="edit" onClick={handleCreateData}>
            {PageContent.editRequest}
          </Link>
        </Box>
        <EditData
          cmsData={PageContent}
          market={filterDataBy.market}
          isModalOpen={isModalOpen}
          handleModal={handleModal}
        />
      </PageController>
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
