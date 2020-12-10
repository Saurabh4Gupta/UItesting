/* eslint-disable react/prop-types */
import React from 'react';

import { FormField, Dropzone } from '@dentsu-ui/components';
import constant from '../../utils/constant';

const Form = (props) => {
  const { MAX_FILE_SIZE, ALLOWED_FILE_TYPES } = constant;
  const { handleFileChange, errors, cmsData } = props;

  return (
    <>
      <FormField
        label={cmsData.uploadFileLabel}
        hint={cmsData.templateFileHint}
        {...errors}
      >
        <Dropzone
          allowMultiple={false}
          allowReorder
          onUpdateFiles={(fileItems) => {
            handleFileChange(fileItems);
          }}
          onError={(error) => {
            console.log('[FORM]', error);
          }}
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
