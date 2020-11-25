/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import {
  Select,
  FormField,
  TextInput,
  Textarea,
  DateInput,
  Dropzone,
  Stack,
  Box,
} from '@dentsu-ui/components';
import constant from '../../utils/constant';

const Form = (props) => {
  const { MAX_FILE_SIZE, ALLOWED_FILE_TYPES } = constant;
  const { values, handleChange, handleSelectField, errors, cmsData, options, monthOptions, dueDate } = props;
  const [files, setFiles] = useState([]);
  const handleInit = () => {
    console.log('Dropzone instance has initialised', files);
  };
  return (
    <>
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
            options.find(key => key.value === values.localMarket.value)
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
        {...(errors.actualData ? { error: errors.actualData } : {})}
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
          labelMaxFileSizeExceeded={cmsData.uploadFileLargeMessage}
          labelFileTypeNotAllowed={cmsData.labelFileTypeNotAllowed}
        />

      </FormField>
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
          onChange={(date) => handleSelectField(date, { name: 'dueDate' })}
          minDate={new Date()}
          value={dueDate}
        />
      </FormField>

      <FormField
        label={cmsData.assignToLabel}
        {...(errors.assignTo ? { error: errors.assignTo } : {})}
        hint={cmsData.assignToHint}
      >
        <Select
          menuPosition="fixed"
          options={options}
          name="assignTo"
          placeholder={cmsData.selectPlaceHolder}
          onChange={(selected, event) => handleSelectField(selected, event)}
          value={
            options.find(key => key.value === values.assignTo.value)
          }
        />
      </FormField>
    </>
  )
};

export default Form;
