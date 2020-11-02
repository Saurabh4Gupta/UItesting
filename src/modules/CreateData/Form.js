/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import {
  Select,
  Modal,
  Button,
  FormField,
  TextInput,
  Textarea,
  DateInput,
  Dropzone,
  BulletedList,
} from '@dentsu-ui/components';
import constant from '../../utils/constant';

const Form = (props) => {
  const { MAX_FILE_SIZE } = constant;
  const { values, handleChange, onSubmit, handleSelectField, errors, closeModal } = props;

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
  return (
    <Modal isOpen="true" onClose={closeModal}>
      <Modal.Header hasCloseButton title="Create New Data Request" />
      <Modal.Body>
        <FormField
          {...(errors.localMarket ? { error: errors.localMarket } : {})}
          label="Local Market"
          hint="Choose the market you want to create a data request for"
        >
          <Select
            menuPosition="fixed"
            name="localMarket"
            options={options}
            onChange={(selected) => handleSelectField(selected, 'localMarket')}
            value={values.localMarket}
          />
        </FormField>
        <FormField
          {...(errors.name ? { error: errors.name } : {})}
          label="Name"
          hint="Give your data request a name that will be viewed by all recipients"
        >
          <TextInput
            name="name"
            maxLength={255}
            value={values.name}
            onChange={handleChange}
          />
        </FormField>
        <FormField
          label="Briefing"
          {...(errors.briefing ? { error: errors.briefing } : {})}
          hint="Write a detailed description of what is required from this data request"
        >
          <Textarea
            maxLength={4000}
            isFullWidth="true"
            placeholder=""
            name="briefing"
            value={values.briefing}
            onChange={handleChange}
          />
        </FormField>

        <FormField
          label="Attach tracker template file"
          hint="Choose an Excel tracker template to accompany your data request"
        >
          <Dropzone
            allowMultiple={false}
            allowReorder
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
        <BulletedList>
          {files.map((file) => (
            <BulletedList.Item>
              {file.file.name}
              {' '}
              -
              {file.file.size}
              B -
              {file.file.type}
            </BulletedList.Item>
          ))}
        </BulletedList>
        {/* <FormField
          label="Select date range"
          hint="Enter the date range of actual spend data that you require">
          <DateRangeInput
            dateFormat="DD/MM/YYYY"
            parseDate={(date) => new Date(date)}
            formatDate={(date) => date.toLocaleDateString()}
            onChange={(date) => {
              if (date[1] && date[0]) {
                return setInitialValues({
                  ...values,
                  startDate: date[0].toLocaleDateString(),
                  endDate: date[1].toLocaleDateString(),
                });
              }
            }}
          />
          </FormField> */}

        <FormField
          {...(errors.dueDate ? { error: errors.dueDate } : {})}
          label="Due date"
          hint="Enter the date that you require the data request by"
        >
          <DateInput
            placeholder="DD/MM/YYYY"
            dateFormat="DD/MM/YYYY"
            parseDate={(date) => new Date(date)}
            formatDate={(date) => date.toLocaleDateString()}
            onChange={(date) => handleSelectField(date, 'dueDate')}
          />
        </FormField>

        <FormField
          label="Assign To"
          {...(errors.assignTo ? { error: errors.assignTo } : {})}
          hint={`Only the person or team you assign this to will have access. Once you click 'Create' ,
           they will be sent email notifications asking them to fill in the data request.`}
        >
          <Select
            menuPosition="fixed"
            options={assignToOptions}
            onChange={(selected) => handleSelectField(selected, 'assignTo')}
            value={values.assignTo}
          />
        </FormField>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Cancel
        </Button>
        <Button onClick={onSubmit}>Create</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Form;
