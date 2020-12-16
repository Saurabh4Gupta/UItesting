import React, { useState } from 'react';
import { Modal, Button } from '@dentsu-ui/components';
import PropTypes from 'prop-types';
import Toast from '@dentsu-ui/components/dist/cjs/components/Toast';
import Form from '../../components/FileUpload/Form';
import { dataFieldCms as PageContent } from '../../cms';
import constant from '../../utils/constant';

const UploadFile = (props) => {
  const { cmsData, modalOpen, setModalOpen } = props;
  const [error, setError] = useState({});
  const [files, setFiles] = useState([]);

  const errorHandler = (errorMsg) => {
    if (errorMsg) {
      setError({ error: `${PageContent.uploadFileErrorMessage}` });
      return true;
    }

        setError({ error: null });
        return false;
  };

  const validate = () => {
    if (!files.length) {
      setError({ error: `${PageContent.uploadFileErrorMessage}` });
      return false;
    }
    if (files.length) {
      const fileType = files[0].file.name.split('.')[1];
      if (constant.VALID_FILE_TYPES.includes(fileType)) {
        setError({ error: null });
        return true;
      }

        setError({ error: `${PageContent.uploadFileErrorMessage}` });
        return false;
    }
    return true;
  };

  const onSubmit = () => {
    const isValid = validate();
    if (isValid) {
      setModalOpen(false);
      if (!error.error) {
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
    validate();
    setFiles(fileItems);
    setError({ error: null });
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
};

UploadFile.defaultProps = {
  cmsData: {},
  modalOpen: false,
  setModalOpen: () => {},
};
export default UploadFile;
