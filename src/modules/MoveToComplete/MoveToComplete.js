import React from 'react';
import { Modal, Button } from '@dentsu-ui/components';
import PropTypes from 'prop-types';

const MoveToComplete = (props) => {
  const { cmsData, setModalOpen, modalOpen, handleMoveToComplete } = props;
  const onCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Modal
        isFullHeight={false}
        width="500px"
        isOpen={modalOpen}
        onClose={onCloseModal}
      >
        <Modal.Header hasCloseButton title={cmsData.moveToCompleteConfirmation} />
        <Modal.Body>
          <p>{cmsData.moveToCompleteDescription}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onCloseModal}>
            {cmsData.deleteButtonCancelMessage}
          </Button>
          <Button onClick={handleMoveToComplete}>{cmsData.yesContinue}</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
MoveToComplete.propTypes = {
  setModalOpen: PropTypes.func,
  modalOpen: PropTypes.bool,
  cmsData: PropTypes.object,
  handleMoveToComplete: PropTypes.func,
};

MoveToComplete.defaultProps = {
  setModalOpen: () => { },
  modalOpen: false,
  cmsData: {},
  handleMoveToComplete: () => { },
};
export default MoveToComplete;
