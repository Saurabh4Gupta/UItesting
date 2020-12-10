import React from 'react';
import { Modal, Button } from '@dentsu-ui/components';
import PropTypes from 'prop-types';
import { dataFieldCms } from '../../cms/dataFieldCms'

const DeleteData = (props) => {
  const { deleteModalData, setModalOpen, deleteRequest,
    handleToggleData, setISMoveTOCompleteModel, moveToCompleteModelData } = props;
  const { isDeleteModal, requestId } = deleteModalData;
  const { isMoveToComplete, requestID } = moveToCompleteModelData;
  return (
    <>
      <Modal
        isFullHeight={false}
        width="500px"
        isOpen={isDeleteModal || isMoveToComplete}
        onClose={() => setModalOpen({ isDeleteModal: false, requestId: '' }) || setISMoveTOCompleteModel({ isDeleteModal: false, requestID: '' })}
      >
        <Modal.Header hasCloseButton title={!isDeleteModal ? dataFieldCms.moveToCompleteConfirmation : dataFieldCms.deletePopUpConfirmation} />
        <Modal.Body>
          <p>
            {!isDeleteModal ? dataFieldCms.moveToCompleteDescription : dataFieldCms.deletePopUpDescription}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              // eslint-disable-next-line no-unused-expressions
              !isDeleteModal ? setISMoveTOCompleteModel({ isDeleteModal: false, requestID: '' })
                : setModalOpen({ isDeleteModal: false, requestId: '' })
            }
            }
          >
            No, cancel
          </Button>
          <Button
            // eslint-disable-next-line no-unused-expressions
            onClick={() => { !isDeleteModal ? handleToggleData(requestID) : deleteRequest(requestId) }}
          >
            {!isDeleteModal ? 'Yes, continue' : 'Yes, delete'}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
DeleteData.propTypes = {
  setModalOpen: PropTypes.func,
  deleteRequest: PropTypes.func,
  deleteModalData: PropTypes.object,
  handleToggleData: PropTypes.func,
  setISMoveTOCompleteModel: PropTypes.func,
  moveToCompleteModelData: PropTypes.object,
};

DeleteData.defaultProps = {
  setModalOpen: () => { },
  deleteRequest: () => { },
  deleteModalData: {},
  handleToggleData: () => { },
  setISMoveTOCompleteModel: () => { },
  moveToCompleteModelData: {},
};
export default DeleteData;
