import React from 'react';
import { Modal, Button } from '@dentsu-ui/components';
import PropTypes from 'prop-types';
import { dataFieldCms } from '../../cms/dataFieldCms'

const DeleteData = (props) => {
  const { deleteModalData, setModalOpen, handleDelete,
    handleMoveToCompleteData, setIsMoveToCompleteModel, moveToCompleteModelData } = props;
  const { isDeleteModal, requestId } = deleteModalData;
  const { isMoveToComplete, requestID } = moveToCompleteModelData;

  const requestChangeHandler = () => {
    if (!isDeleteModal) {
      setIsMoveToCompleteModel({ isMoveToComplete: false, requestID: '' })
    } else {
      setModalOpen({ isDeleteModal: false, requestId: '' });
    }
  }
  const requestChangeHandlerOnSubmit = () => {
    console.log('>>>>>>.requestChangeHandlerOnSubmit');
    if (!isDeleteModal) {

      handleMoveToCompleteData(requestID);
      setIsMoveToCompleteModel({ isMoveToComplete: false, requestID: '' });
    } else {
      console.log('>>>>>>.isDeleteModal', requestID);
      handleDelete(requestId);
      setModalOpen({ isDeleteModal: false, requestId: '' });
    }
  }

  return (
    <>
      <Modal
        isFullHeight={false}
        width="500px"
        isOpen={isDeleteModal || isMoveToComplete}
        onClose={() => setModalOpen({ isDeleteModal: false, requestId: '' }) || setIsMoveToCompleteModel({ isDeleteModal: false, requestID: '' })}
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
            onClick={
              requestChangeHandler
            }
          >
            {dataFieldCms.noCancel}
          </Button>
          <Button
            onClick={
              requestChangeHandlerOnSubmit
            }
          >
            {!isDeleteModal ? dataFieldCms.yesContinue : dataFieldCms.yesDelete}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
DeleteData.propTypes = {
  setModalOpen: PropTypes.func,
  handleDelete: PropTypes.func,
  deleteModalData: PropTypes.object,
  handleMoveToCompleteData: PropTypes.func,
  setIsMoveToCompleteModel: PropTypes.func,
  moveToCompleteModelData: PropTypes.object,
};

DeleteData.defaultProps = {
  setModalOpen: () => { },
  handleDelete: () => { },
  deleteModalData: {},
  handleMoveToCompleteData: () => { },
  setIsMoveToCompleteModel: () => { },
  moveToCompleteModelData: {},
};
export default DeleteData;
