import Button from '@dentsu-ui/components/dist/cjs/components/Button';
import Modal from '@dentsu-ui/components/dist/cjs/components/Modal';
import React from 'react';

import PropTypes from 'prop-types';
import { dataFieldCms as PageContent } from '../../../../cms/dataFieldCms';

const ShowMoreBriefing = (props) => {
  const { isToShowModal, clicked, briefing } = props;

  const closeModalHandler = () => {
    clicked(false);
  };
  return (
    <>
      <Modal isOpen={isToShowModal} onClose={closeModalHandler}>
        <Modal.Header hasCloseButton title={PageContent.briefLabel} />
        <Modal.Body>{briefing}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalHandler}>
            {PageContent.close}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

ShowMoreBriefing.propTypes = {
  isToShowModal: PropTypes.bool,
  clicked: PropTypes.func,
  briefing: PropTypes.string,
};
ShowMoreBriefing.defaultProps = {
  isToShowModal: false,
  clicked: () => {},
  briefing: '',
};

export default ShowMoreBriefing;
