import React, { useCallback, useState } from 'react';

import {
  Select,
  Modal,
  Button,
  FormField,
  TextInput,
  Textarea,
  DateRangeInput,
  DateInput,
  Dropzone,
  Paragraph,
  BulletedList,
} from '@dentsu-ui/components';
import '@dentsu-ui/components/styles.css';

const Form = (props) => {
  const ALLOWED_FILE_TYPES = [
    '.xls',
    '.xlsx',
    '.csv',
    '.xlsb',
    '.xlsm',
    '.xlt',
    '.xltm',
    '.xltx',
  ];
  const MAX_FILE_SIZE = '20MB';

  const [inputValues, setInputValues] = useState({
    localMarket: '',
    name: '',
    briefing: '',
    startDate: null,
    endDate: null,
    dueDate: '',
    assignTo: '',
  });

  const [errors, setErrors] = useState({});

  const [files, setFiles] = useState([]);

  const handleInit = () => {
    console.log('Dropzone instance has initialised');
  };

  const options = [
    {
      value: 'ARG',
      label: 'Argentina',
    },
    {
      value: 'AUS',
      label: 'Australia',
    },
    {
      value: 'BEL',
      label: 'Belgium',
    },
    {
      value: 'UK',
      label: 'UK',
    },
  ];

  const assignToOptions = [
    {
      value: 'ARG',
      label: 'Argentina',
    },
    {
      value: 'AUS',
      label: 'Australia',
    },
    {
      value: 'BEL',
      label: 'Belgium',
    },
    {
      value: 'UK',
      label: 'UK',
    },
  ];

  const onSubmit = () => {
    let errorList = {};

    if (!inputValues.localMarket) {
      errorList['localMarket'] = 'This field cannot be blank';
    }
    if (!inputValues.name) {
      errorList['name'] = 'This field cannot be blank';
    }
    if (!inputValues.briefing) {
      errorList['briefing'] = 'This field cannot be blank';
    }
    if (!inputValues.dueDate) {
      errorList['dueDate'] = 'This field cannot be blank';
    }
    if (!inputValues.assignTo) {
      errorList['assignTo'] = 'This field cannot be blank';
    }
    if (Object.keys(errorList).length < 1) {
      props.closeModal();
    } else {
      setErrors(errorList);
    }
  };

  const inputChangeHandler = (event) => {
    setInputValues({ ...inputValues, [event.target.name]: event.target.value });
    clearErrorMessage(event.target.name);
  };

  const selectChangeHandler = (selected, fieldName) => {
    setInputValues({ ...inputValues, [fieldName]: selected });
    clearErrorMessage(fieldName);
  };

  const clearErrorMessage = (fieldName) => {
    if (errors[fieldName]) {
      let errorList = { ...errors };
      delete errorList[fieldName];
      setErrors(errorList);
    }
  };

  return (
    <Modal isOpen="true" onClose={props.closeModal}>
      <Modal.Header hasCloseButton={true} title="Create New Data Request" />
      <Modal.Body>
        <FormField
          {...(errors.localMarket ? { error: errors.localMarket } : {})}
          label="Local Market"
          hint="Choose the market you want to create a data request for">
          <Select
            menuPosition="fixed"
            name="localMarket"
            options={options}
            onChange={(selected) =>
              selectChangeHandler(selected, 'localMarket')
            }
            value={inputValues.localMarket}
          />
        </FormField>
        <div
          style={{
            marginBottom: 24,
          }}>
          <FormField
            {...(errors.name ? { error: errors.name } : {})}
            label="Name"
            hint="Give your data request a name that will be viewed by all recipients">
            <TextInput
              name="name"
              maxLength={255}
              value={inputValues.name}
              onChange={inputChangeHandler}
            />
          </FormField>
        </div>

        <FormField
          label="Briefing"
          {...(errors.briefing ? { error: errors.briefing } : {})}
          hint="Write a detailed description of what is required from this data request">
          <Textarea
            maxLength={4000}
            isFullWidth="true"
            placeholder=""
            name="briefing"
            value={inputValues.briefing}
            onChange={inputChangeHandler}
          />
        </FormField>

        <FormField
          label="Attach tracker template file"
          hint="Choose an Excel tracker template to accompany your data request">
          <Dropzone
            allowMultiple={false}
            allowReorder={true}
            onInit={() => handleInit()}
            onUpdateFiles={(fileItems) => {
              setFiles(fileItems);
            }}
            maxFiles={1}
            maxFileSize={MAX_FILE_SIZE}
            server="./"
            acceptedFileTypes={['image/jpeg']}
          />
        </FormField>
        {/* <Paragraph isBold>Debug</Paragraph>
        {files.length === 0 && <Paragraph>No file in the Dropzone</Paragraph>} */}
        <BulletedList>
          {files.map((file, index) => (
            <BulletedList.Item key={index}>
              {file.file.name} - {file.file.size}B - {file.file.type}
            </BulletedList.Item>
          ))}
        </BulletedList>

        <FormField
          label="Select date range"
          hint="Enter the date range of actual spend data that you require">
          <DateRangeInput
            dateFormat="DD/MM/YYYY"
            parseDate={(date) => new Date(date)}
            formatDate={(date) => date.toLocaleDateString()}
            onChange={(date) => {
              if (date[1] && date[0]) {
                return setInputValues({
                  ...inputValues,
                  startDate: date[0].toLocaleDateString(),
                  endDate: date[1].toLocaleDateString(),
                });
              }
            }}
          />
        </FormField>

        <FormField
          {...(errors.dueDate ? { error: errors.dueDate } : {})}
          label="Due date"
          hint="Enter the date that you require the data request by">
          <DateInput
            placeholder="DD/MM/YYYY"
            dateFormat="DD/MM/YYYY"
            parseDate={(date) => new Date(date)}
            formatDate={(date) => date.toLocaleDateString()}
            onChange={(date) =>
              setInputValues({
                ...inputValues,
                dueDate: date.toLocaleDateString(),
              })
            }
          />
        </FormField>

        <FormField
          label="Assign To"
          {...(errors.assignTo ? { error: errors.assignTo } : {})}
          hint={`Only the person or team you assign this to will have access. Once you click 'Create' ,
           they will be sent email notifications asking them to fill in the data request.`}>
          <Select
            menuPosition="fixed"
            options={assignToOptions}
            onChange={(selected) => selectChangeHandler(selected, 'asssignTo')}
            value={inputValues.assignTo}
          />
        </FormField>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.closeModal}>
          Cancel
        </Button>
        <Button onClick={onSubmit}>Send</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Form;
