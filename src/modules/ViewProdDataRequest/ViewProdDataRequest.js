import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Link } from '@dentsu-ui/components';
import PageController from '../PageController/PageController';
import EditData from '../CreateData/EditData'
import { dataFieldCms as PageContent } from '../../cms';

const ViewProdDataRequest = (props) => {
  const { match } = props;
  const { params } = match;
  const { id } = params;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [market] = useState('');
  const handleModal = (value) => {
    setIsModalOpen(value);
  };
  const handleCreateData = () => {
    handleModal(true);
  };
  return (
    <>
      <PageController
        isToShowDataRequest
        clientCode={id}
        setIsUploadModal={false}
        {...props}
      />
      <Box m="45px" mb="200px">
        <Link iconLeft="edit" onClick={handleCreateData}>
          {PageContent.editRequest}
        </Link>
      </Box>
      <EditData
        cmsData={PageContent}
        market={market}
        isModalOpen={isModalOpen}
        handleModal={handleModal}
      />
    </>
  );
};
ViewProdDataRequest.propTypes = {
  match: PropTypes.object,
};
ViewProdDataRequest.defaultProps = {
  match: {},
};
export default ViewProdDataRequest;
