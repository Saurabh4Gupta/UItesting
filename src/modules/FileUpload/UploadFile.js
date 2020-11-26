import React, { useState } from 'react';
import { Modal, Button } from '@dentsu-ui/components';
import PropTypes from 'prop-types';
import Form from '../../components/FileUpload/Form';


const UploadFile = (props) => {
  const { cmsData, modalOpen, setModalOpen } = props;
  const [error, setError] = useState({});
  const [files, setFiles] = useState([]);

  const validate = () => {
    if (!files.length) {
      setError({ error: 'Upload tracker template' })
      return false;
    }

    // setError({});
    return true;
  }

  const onSubmit = () => {
    const isValid = validate();
    console.log('++', isValid)
    if (isValid) {
      setModalOpen(false)
      // setFiles([])
      // setError({})
    }
  };

  const onCloseModal = () => {
    setModalOpen(false);
    setError({})
    setFiles([])
  };
  const handleFileChange = (fileItems) => {
    validate();
    setFiles(fileItems);
    setError({})
  }
  return (
    <>
      <Modal
        isFullHeight={false}
        width="650px"
        isOpen={modalOpen}
        onClose={onCloseModal}
      >
        <Modal.Header title="Upload new file" />
        <Modal.Body>

          <Form
            handleFileChange={handleFileChange}
            files={files}
            errors={error}
            cmsData={cmsData}
          />

        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={onCloseModal}
          >
            {cmsData.cancel}
          </Button>
  <Button onClick={() => onSubmit()}>{cmsData.upload}</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
UploadFile.propTypes = {
  cmsData: PropTypes.object,
  modalOpen: PropTypes.bool,
  setModalOpen: PropTypes.func,
}

UploadFile.defaultProps = {
  cmsData: {},
  modalOpen: false,
  setModalOpen: () => { },
}
export default UploadFile;
