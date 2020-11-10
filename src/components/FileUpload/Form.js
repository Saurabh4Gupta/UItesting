/* eslint-disable react/prop-types */
import React from 'react';

import {
  FormField,
  Dropzone,
} from '@dentsu-ui/components';
import constant from '../../utils/constant';

const Form = (props) => {
  const { MAX_FILE_SIZE, ALLOWED_FILE_TYPES } = constant;
  const { files, handleFileChange, errors, cmsData } = props;
  const handleInit = () => {
    console.log('Dropzone instance has initialised', files);
  };

  return (
    <>
      <FormField
        label={cmsData.templateFileLabel}
        hint={cmsData.templateFileHint}
        {...errors}
      >
        <Dropzone
          allowMultiple={false}
          allowReorder
          onInit={() => handleInit()}
          onUpdateFiles={(fileItems) => {
            handleFileChange(fileItems);
          }}
          maxFiles={1}
          maxFileSize={MAX_FILE_SIZE}
          server="./"
          acceptedFileTypes={ALLOWED_FILE_TYPES}
        />
      </FormField>
    </>
  )
};

export default Form;
