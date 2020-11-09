import React, { useState } from 'react';
import { Modal, Button, Dropzone, FormField, Paragraph } from '@dentsu-ui/components';
import PropTypes from 'prop-types';
import constant from '../../utils/constant';

const UploadFile = (props) => {
  const { MAX_FILE_SIZE, ALLOWED_FILE_TYPES } = constant;
  const { cmsData, modalOpen, setModalOpen } = props;

  const [files, setFiles] = useState(
    { files: [] },
  );

  const handleSubmit = (fileLength) => {
    if (!fileLength || fileLength === 0) {
      return setError(true);
    }

    return setModalOpen(false);
  };
  const handleInit = () => {
    console.log('Dropzone instance has initialised');
  };

  const onCloseModal = () => {
    setModalOpen(false);
    setFiles({ files: [] });
  };

  return (
    <>
      <Modal
        isFullHeight={false}
        width="540px"
        isOpen={modalOpen}
        onClose={onCloseModal}
      >
        <Modal.Header title="Upload new file" />
        <Modal.Body>
          <FormField
            label={cmsData.uploadFileLabel}
            hint={cmsData.templateFileHint}
          >
            <Dropzone
              allowMultiple={false}
              onInit={() => handleInit()}
              onUpdateFiles={(fileItems) => {
                setFiles(fileItems);
              }}
              maxFiles={1}
              maxFileSize={MAX_FILE_SIZE}
              server="./"
              acceptedFileTypes={ALLOWED_FILE_TYPES}
              dropValidation
            />
          </FormField>
          {error && <Paragraph>No file in the Dropzone</Paragraph>}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={onCloseModal}
          >
            cancel
          </Button>
          <Button onClick={() => handleSubmit(files.length)}>Upload</Button>
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
