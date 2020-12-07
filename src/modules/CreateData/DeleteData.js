import React from 'react';
import { Modal, Button } from '@dentsu-ui/components';
import PropTypes from 'prop-types';

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
        <Modal.Header hasCloseButton title="Are you sure you want to delete?" />
        <Modal.Body>
          <p>Once deleted, this data request will no longer be available. </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalOpen({ isDeleteModal:false, requestId:'' })}>
            No, cancel
          </Button>
          <Button onClick={() => deleteRequest(requestId)}>Yes, delete</Button>
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
