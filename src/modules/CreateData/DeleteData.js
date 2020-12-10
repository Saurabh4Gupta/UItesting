import React from 'react';
import { Modal, Button } from '@dentsu-ui/components';
import PropTypes from 'prop-types';
import { dataFieldCms as PageContent } from '../../cms';

const DeleteData = (props) => {
  const { deleteModalData, setModalOpen, deleteRequest } = props;
  const { isDeleteModal, requestId } = deleteModalData;
  return (
    <>
      <Modal
        isFullHeight={false}
        width="500px"
        isOpen={isDeleteModal}
        onClose={() => setModalOpen({ isDeleteModal:false, requestId:'' })}
      >
        <Modal.Header hasCloseButton title={PageContent.popUpTitle} />
        <Modal.Body>
          <p>{PageContent.deletePopConfimationMessage}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalOpen({ isDeleteModal:false, requestId:'' })}>
            {PageContent.deleteButtonCancelMessage}
          </Button>
          <Button onClick={() => deleteRequest(requestId)}>{PageContent.deleteButtonDeleteMessage}</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
DeleteData.propTypes = {
  setModalOpen: PropTypes.func,
  deleteRequest: PropTypes.func,
  deleteModalData: PropTypes.object,
};

DeleteData.defaultProps = {
  setModalOpen: () => {},
  deleteRequest: () => {},
  deleteModalData:{},
};
export default DeleteData;
