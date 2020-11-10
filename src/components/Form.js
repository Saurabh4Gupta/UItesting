/* eslint-disable react/prop-types */
import React from 'react';

import {
  FormField,
  Dropzone
} from '@dentsu-ui/components';
import constant from '../utils/constant';

const Form = (props) => {
  const { MAX_FILE_SIZE, ALLOWED_FILE_TYPES } = constant;
  const { files, handleFileChange, errors, cmsData } = props;
 // const [files, setFiles] = useState([]);
 console.log(files,"++++++++++",handleFileChange,"+",errors)
  const handleInit = () => {
    console.log('Dropzone instance has initialised', files);
  };

  return <>
        <FormField
            label={cmsData.uploadFileLabel}
            hint={cmsData.templateFileHint}
            {...(errors ? { error: errors } : {})}
          >
            <Dropzone
              allowMultiple={false}
              onInit={() => handleInit()}
              onUpdateFiles={(fileItems) => {
                handleFileChange(fileItems)
              }}
              name="fileUpload"
              //value={values.fileUpload}
              maxFiles={1}
              maxFileSize={MAX_FILE_SIZE}
              server="./"
              acceptedFileTypes={ALLOWED_FILE_TYPES}
              dropValidation
            />
          </FormField>
    </>
  
};

export default Form;
