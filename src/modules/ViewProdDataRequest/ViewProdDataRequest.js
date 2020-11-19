import React from 'react';
import PropTypes from 'prop-types';
import PageController from '../PageController/PageController';

const ViewProdDataRequest = (props) => {
  const { id } = props;

  return (
    <PageController
      isToShowDataRequest
      clientCode={id}
      setIsUploadModal={false}
      {...props}
    />
  );
};
ViewProdDataRequest.propTypes = {
  id: PropTypes.string,
};
ViewProdDataRequest.defaultProps = {
  id: '',
};
export default ViewProdDataRequest;
