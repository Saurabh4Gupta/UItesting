import React, { useState } from 'react';
import { Modal, Button } from '@dentsu-ui/components';
import PropTypes from 'prop-types';
import Toast from '@dentsu-ui/components/dist/cjs/components/Toast';
import Form from '../../components/FileUpload/Form';
import { dataFieldCms as PageContent } from '../../cms';

const UploadFile = (props) => {
  const { cmsData, modalOpen, setModalOpen } = props;
  const [error, setError] = useState({});
  const [files, setFiles] = useState([]);
  const [isDisabled, setDisabled] = useState(true);

  const errorHandler = (errorMsg) => {
    if (errorMsg) {
      setError({ error: `${PageContent.uploadFileErrorMessage}` });
      return true;
    }
    setDisabled(false)
    setError({ error: null });
    return false;
  };

  const validate = () => {
    if (!files.length) {
      setError({ error: `${PageContent.uploadFileErrorMessage}` });
      return false;
    }
    return true;
  };

  const onSubmit = () => {
    const isValid = validate();
    if (isValid) {
      setModalOpen(false);
      if (!error.error && files.length > 0) {
        const toast = new Toast();
        return toast({
          title: '',
          content: PageContent.toastFileUploaded,
          status: 'success',
        });
      }
   }

    return null;
  };

  const onCloseModal = () => {
    setModalOpen(false);
    setError({});
    setFiles([]);
  };

  const handleFileChange = (fileItems) => {
    setDisabled(true)
    setFiles(fileItems);
    setError({ error: null });
    if (files.length > 0) {
      setDisabled(false)
    }
  };
  return (
    <>
      <Modal
        isFullHeight={false}
        width="650px"
        isOpen={modalOpen}
        onClose={onCloseModal}
      >
        <Modal.Header title={PageContent.uploadButtonText} />
        <Modal.Body>
          <Form
            handleFileChange={handleFileChange}
            files={files}
            errors={error}
            cmsData={cmsData}
            setError={errorHandler}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onCloseModal}>
            {cmsData.cancel}
          </Button>
          <Button isDisabled={isDisabled} onClick={() => onSubmit()}>{cmsData.upload}</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
UploadFile.propTypes = {
  cmsData: PropTypes.object,
  modalOpen: PropTypes.bool,
  setModalOpen: PropTypes.func,
};

UploadFile.defaultProps = {
  cmsData: {},
  modalOpen: false,
  setModalOpen: () => {},
};
export default UploadFile;
