import React, { useState, useEffect } from 'react';
import { Modal, Button } from '@dentsu-ui/components';
import PropTypes from 'prop-types';
import Form from '../../components/Form';

import useCustomForm from '../../hooks/useCustomForm';
import validationRule from '../../utils/FileValidate';

const UploadFile = (props) => {

  const { cmsData, modalOpen, setModalOpen } = props;
  const [isReadyToSubmit, setIsReadyToSubmit] = useState(false);
  // const initialValues = {
  //   fileUpload: [],
  // };
  const [error, setError] = useState({});
  const [files, setFiles] = useState([]);

 const validate=()=>{
   if(files.length<0){
    setError({error:"Please Select 1 files"})
   }
 }
  // const { values, handleSubmit,
  //   errors, handleCancel } = useCustomForm({ initialValues, validate: validationRule });

  //   useEffect(() => {
  //     const isAnyValidationError = errors && !!(errors.fileUpload);
  //     setIsReadyToSubmit(values.fileUpload.length > 0 && !isAnyValidationError);
  //   }, [errors, values]);

  const onSubmit = () => {
    //handleSubmit();
    if (isReadyToSubmit) {
      // mutation will be done here
      return setModalOpen(false);
    }
    return setModalOpen(true);
  };

  const onCloseModal = () => {
    setModalOpen(false);
   // handleCancel();
  };

  const handleFileChange = (fileItems) => {
    console.log("file change+++++++",fileItems);
   //setValues({ fileUpload:fileItems })
    setFiles(fileItems);
  }

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

          <Form 
           // values={values}
            handleFileChange={handleFileChange}
            files={files}
            //handleSelectField={handleSelectField}
            errors={error}
            cmsData={cmsData}
          />
          {/* <FormField
            label={cmsData.uploadFileLabel}
            hint={cmsData.templateFileHint}
            {...(errors.fileUpload ? { error: errors.fileUpload } : {})}
          >
            <Dropzone
              allowMultiple={false}
              onInit={() => handleInit()}
              onUpdateFiles={(fileItems) => {
                handleFileChange(fileItems)
              }}
              name="fileUpload"
              value={values.fileUpload}
              maxFiles={1}
              maxFileSize={MAX_FILE_SIZE}
              server="./"
              acceptedFileTypes={ALLOWED_FILE_TYPES}
              dropValidation
            />
          </FormField> */}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={onCloseModal}
          >
            cancel
          </Button>
          <Button onClick={() => onSubmit()}>Upload</Button>
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
