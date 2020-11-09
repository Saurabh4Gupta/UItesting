import React, { useState } from 'react';
import { Modal, Button, Dropzone, FormField, Paragraph } from '@dentsu-ui/components';
import PropTypes from 'prop-types';
import constant from '../../utils/constant';

const UploadFile = (props) => {
  const { MAX_FILE_SIZE, ALLOWED_FILE_TYPES } = constant;
  const { cmsData } = props;
  
  const [error, setError] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const [files, setFiles] = useState(
    { files: [] },
  );

  const handleSubmit = (fileLength) => {

    if (!fileLength || fileLength === 0) {
      return setError(true);
      } 
      
     
      setModalOpen(false);
      
    
  };

  const handleCreateData = () => {
    setModalOpen(true);
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
              dropValidation={true}
            />
          </FormField>
          {error &&  <Paragraph>No file in the Dropzone</Paragraph>}
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
      <Button bg="rgba(220,220,220,0.4)" icon="upload" onClick={handleCreateData}>
        {cmsData.uploadButtonText}
      </Button>
    </>
  );
};
UploadFile.propTypes = {
  cmsData: PropTypes.object,
}

UploadFile.defaultProps = {
  cmsData: {},
}
export default UploadFile;