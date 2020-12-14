import React from 'react';
import { Modal, Button } from '@dentsu-ui/components';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router';
import Toast from '@dentsu-ui/components/dist/cjs/components/Toast';
import { dataFieldCms as PageContent } from '../../cms';


const MoveToComplete = (props) => {
  const { cmsData, setModalOpen, modalOpen, requestId } = props;
  const history = useHistory();
  const location = useLocation();

  const query = new URLSearchParams(location.search);

  const clientCode = query.get('client_code');

  const onCloseModal = () => {
    setModalOpen(false);
  };

  const onSubmit = (id) => {
    setModalOpen(false);
    console.log(id);
    const queryString = `client_code=${clientCode}`;
    history.push({
      pathname: '/datafield',
      search: `?${queryString}`,
      state: { requestId: id  },
    });
    const toast = new Toast();

    return toast({
      title: '',
      content: PageContent.toastMovedToComplete,
      status: 'success',
    });
  };
  return (
    <>
      <Modal
        isFullHeight={false}
        width="500px"
        isOpen={modalOpen}
        onClose={onCloseModal}
      >
        <Modal.Header
          hasCloseButton
          title={cmsData.moveToCompleteConfirmation}
        />
        <Modal.Body>
          <p>{cmsData.moveToCompleteDescription}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onCloseModal}>
            {cmsData.deleteButtonCancelMessage}
          </Button>
          <Button onClick={() => onSubmit(requestId)}>
            {cmsData.yesContinue}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
MoveToComplete.propTypes = {
  setModalOpen: PropTypes.func,
  modalOpen: PropTypes.bool,
  cmsData: PropTypes.object,
  requestId: PropTypes.string,
};

MoveToComplete.defaultProps = {
  setModalOpen: () => {},
  modalOpen: false,
  cmsData: {},
  requestId: PropTypes.string,
};
export default MoveToComplete;
