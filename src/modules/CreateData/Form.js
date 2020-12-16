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
  ChipInput,
} from '@dentsu-ui/components';
import constant from '../../utils/constant';

const Form = (props) => {
  const { MAX_FILE_SIZE, ALLOWED_FILE_TYPES } = constant;
  const { values, handleChange, handleSelectField, errors, cmsData, options, monthOptions, dueDate, reportingYear,
    forecastOptions, userList } = props;
  const [files, setFiles] = useState([]);
  const handleInit = () => {
    console.log('Dropzone instance has initialised', files);
  };
  const now = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(now.getFullYear() + 1);
  return (
    <>
      <FormField
        label={cmsData.localMarketLabel}
        {...(errors.localMarket ? { error: errors.localMarket } : {})}
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
      <Stack flex="row">
        <Box width="350px">
          <FormField
            label={cmsData.reportingYearLabel}
            {...(errors.reportingYear ? { error: errors.reportingYear } : {})}
            hint={cmsData.reportingYearHint}
          >
            <Select
              name="reportingYear"
              options={reportingYear}
              value={values.reportingYear}
              placeholder={cmsData.selectPlaceHolder}
              onChange={(selected, event) => {
                handleSelectField(selected, event)
              }}
            />
          </FormField>
        </Box>
      </Stack>
      <Stack flex="row">
        <Box mr="30px" width="50%">
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
        <Box width="50%">
          <FormField
            isDisabled={!forecastOptions}
            label={cmsData.forecastDataLabel}
            {...(errors.forecastData ? { error: errors.forecastData } : {})}
            hint={cmsData.forecastDataHint}
          >
            <Select
              name="forecastData"
              placeholder={cmsData.selectPlaceHolder}
              value={values.forecastData}
              options={forecastOptions}
              onChange={(selected, event) => handleSelectField(selected, event)}
            />

          </FormField>
        </Box>
      </Stack>
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
          onChange={(date) => handleSelectField(date.toLocaleDateString(), { name: 'dueDate' })}
          minDate={new Date()}
          maxDate={new Date(maxDate)}
          value={dueDate}
        />
      </FormField>

      <FormField
        label={cmsData.assignToLabel}
        {...(errors.assignTo ? { error: errors.assignTo } : {})}
        hint={cmsData.assignToHint}
      >
        <ChipInput
          options={userList}
          isMulti
          name="assignTo"
          value={values.assignTo}
          onChange={(selected, event) => {
            handleSelectField(selected, event)
          }}
        />
      </FormField>
    </>
  )
};

export default Form;
