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
  Stack,
  Box,
} from '@dentsu-ui/components';
import constant from '../../utils/constant';
import { assignToOptions, options, monthOptions } from '../Mock/mockData'

const Form = (props) => {
  const { MAX_FILE_SIZE, ALLOWED_FILE_TYPES } = constant;
  const { values, handleChange, onSubmit, handleSelectField, errors, closeModal, isModalOpen, cmsData } = props;

  const [files, setFiles] = useState([]);

  const handleInit = () => {
    console.log('Dropzone instance has initialised');
  };

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <Modal.Header hasCloseButton title={cmsData.createNewDataRequest} />
      <Modal.Body>
        <FormField
          {...(errors.localMarket ? { error: errors.localMarket } : {})}
          label={cmsData.localMarketLabel}
          hint={cmsData.localMarketHint}
        >
          <Select
            placeholder={cmsData.selectPlaceHolder}
            name="localMarket"
            options={options}
            onChange={(selected, event) => handleSelectField(selected, event)}
            value={
              options.find(key => key.value === values.localMarket)
            }
          />
        </FormField>
        <FormField
          {...(errors.name ? { error: errors.name } : {})}
          label={cmsData.nameLabel}
          hint={cmsData.nameHint}
        >
          <TextInput
            name="name"
            maxLength={255}
            value={values.name}
            onChange={handleChange}
          />
        </FormField>
        <FormField
          label={cmsData.briefLabel}
          {...(errors.briefing ? { error: errors.briefing } : {})}
          hint={cmsData.briefHint}
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
          label={cmsData.templateFileLabel}
          hint={cmsData.templateFileHint}
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
            acceptedFileTypes={ALLOWED_FILE_TYPES}
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
        <Stack flex="row">
          <Box mr="30px">
            <FormField
              label={cmsData.actualDataLabel}
              {...(errors.actualData ? { error: errors.actualData } : {})}
              hint={cmsData.actualDataHint}
            >
              <Select
                name="actualData"
                options={monthOptions}
                value={values.actualData}
                placeholder={cmsData.selectPlaceHolder}
                onChange={(selected, event) => {
                  handleSelectField(selected, event)
                }}
              />
            </FormField>
          </Box>
          <Box>
            <FormField
              label={cmsData.forecastDataLabel}
              {...(errors.forecastData ? { error: errors.forecastData } : {})}
              hint={cmsData.actualDataHint}
            >
              <Select
                name="forecastData"
                placeholder={cmsData.selectPlaceHolder}
                value={values.forecastData}
                options={monthOptions}
                onChange={(selected, event) => {
                  handleSelectField(selected, event)
                }}
              />

            </FormField>
          </Box>
        </Stack>
        <FormField
          {...(errors.dueDate ? { error: errors.dueDate } : {})}
          label={cmsData.dueDateLabel}
          hint={cmsData.dueDateHint}
        >
          <DateInput
            placeholder={cmsData.datePlaceHolder}
            dateFormat="DD/MM/YYYY"
            parseDate={(date) => new Date(date)}
            formatDate={(date) => date.toLocaleDateString()}
            onChange={(date, event) => handleSelectField(date, event)}
          />
        </FormField>

        <FormField
          label={cmsData.assignToLabel}
          {...(errors.assignTo ? { error: errors.assignTo } : {})}
          hint={cmsData.assignToHint}
        >
          <Select
            menuPosition="fixed"
            options={assignToOptions}
            name="assignTo"
            placeholder={cmsData.selectPlaceHolder}
            onChange={(selected, event) => handleSelectField(selected, event)}
            value={values.assignTo}
          />
        </FormField>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          {cmsData.cancel}
        </Button>
        <Button onClick={onSubmit}>{cmsData.create}</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Form;
