import React from 'react';
import PropTypes from 'prop-types';
import PageController from '../PageController/PageController';

const ViewProdDataRequest = (props) => {
  const { match } = props;
  const { params } = match;
  const { id } = params;

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
  match: PropTypes.object,
};
ViewProdDataRequest.defaultProps = {
  match: {},
};
export default ViewProdDataRequest;
