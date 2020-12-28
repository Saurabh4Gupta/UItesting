/* eslint-disable react/prop-types */
import React from 'react';

import { FormField, Dropzone } from '@dentsu-ui/components';
import constant from '../../utils/constant';

const Form = (props) => {
  const { MAX_FILE_SIZE, ALLOWED_FILE_TYPES } = constant;
  const { onProcessFile, handleFileChange, errors, cmsData, setError } = props;


  return (
    <>
      <FormField
        label={cmsData.uploadFileLabel}
        hint={cmsData.templateFileHint}
        {...errors}
      >
        <Dropzone
          allowMultiple={false}
          dropValidation
          allowFileTypeValidation
          onUpdateFiles={(fileItems) => {
            handleFileChange(fileItems);
          }}
          onError={(error) => {
            setError(error.main)
          }}
          onProcessFile={(error) => onProcessFile(error)}
          maxFiles={1}
          maxFileSize={MAX_FILE_SIZE}
          labelMaxFileSizeExceeded={cmsData.uploadFileLargeMessage}
          labelFileTypeNotAllowed={cmsData.labelFileTypeNotAllowed}
          server="./"
          acceptedFileTypes={ALLOWED_FILE_TYPES}
        />
      </FormField>
    </>
  );
};

export default Form;
