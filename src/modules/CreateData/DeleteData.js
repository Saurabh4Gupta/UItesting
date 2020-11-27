import React from 'react';
import { Modal, Button } from '@dentsu-ui/components';
import PropTypes from 'prop-types';

const DeleteData = (props) => {
  const { modalOpen, setModalOpen, handleDelete } = props;
  return (
    <>
      <Modal
        isFullHeight={false}
        width="500px"
        isOpen={modalOpen}
        onClose={() => setModalOpen({ value: false })}
      >
        <Modal.Header hasCloseButton title="Are you sure you want to delete?" />
        <Modal.Body>
          <p>Once deleted, this data request will no longer be available. </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalOpen({ value: false })}>
            No, cancel
          </Button>
          <Button onClick={handleDelete}>Yes, delete</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
DeleteData.propTypes = {
  modalOpen: PropTypes.bool,
  setModalOpen: PropTypes.func,
  deleteRequest: PropTypes.func,
};

DeleteData.defaultProps = {
  modalOpen: false,
  setModalOpen: () => { },
  deleteRequest: () => { },
};
export default DeleteData;
