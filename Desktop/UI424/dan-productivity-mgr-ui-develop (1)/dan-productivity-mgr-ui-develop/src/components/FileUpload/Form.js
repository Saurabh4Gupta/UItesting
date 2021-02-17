/* eslint-disable react/prop-types */
import React from 'react';

import { FormField, Dropzone } from '@dentsu-ui/components';
import constant from '../../utils/constant';

const Form = (props) => {
  const { MAX_FILE_SIZE, ALLOWED_FILE_TYPES } = constant;
  const {
    onProcessFile,
    handleFileChange,
    errors,
    cmsData,
    setError,
    handleUploadFile,
  } = props;

  return (
    <>
      <FormField
        label={cmsData.uploadFileLabel}
        hint={cmsData.templateFileHint}
        {...errors}
      >
        <Dropzone
          allowMultiple={false}
          allowFileTypeValidation
          onAddFileStart={(e) => handleUploadFile(e)}
          onUpdateFiles={(fileItems) => {
            handleFileChange(fileItems);
          }}
          onError={(error) => {
            setError(error.main);
          }}
          onProcessFile={(error) => onProcessFile(error)}
          maxFiles={1}
          maxFileSize={MAX_FILE_SIZE}
          labelMaxFileSizeExceeded={cmsData.uploadFileLargeMessage}
          labelFileTypeNotAllowed={cmsData.labelFileTypeNotAllowed}
          acceptedFileTypes={ALLOWED_FILE_TYPES}
        />
      </FormField>
    </>
  );
};

export default Form;
