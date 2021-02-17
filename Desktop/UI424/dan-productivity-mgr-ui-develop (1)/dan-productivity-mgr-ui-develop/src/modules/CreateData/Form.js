/* eslint-disable react/prop-types */
import React from 'react';

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
import Loader from '../../components/loading';

const Form = (props) => {
  const { MAX_FILE_SIZE, ALLOWED_FILE_TYPES } = constant;
  const {
    values,
    handleChange,
    handleSelectField,
    errors,
    cmsData,
    options,
    monthOptions,
    reportingYear,
    forecastOptions,
    userList,
    handleOwners,
    setFiles,
    loading,
    isEdit,
    dueDate,
  } = props;

  if (loading) return <Loader />;
  const now = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(now.getFullYear() + 1);
  return (
    <>
      <FormField
        label={cmsData.localMarketLabel}
        {...(errors.localMarket && !isEdit
          ? { error: errors.localMarket }
          : {})}
        hint={cmsData.localMarketHint}
        isDisabled={isEdit}
      >
        <Select
          placeholder={cmsData.selectPlaceHolder}
          name="localMarket"
          options={options}
          onChange={(selected, event) => handleSelectField(selected, event)}
          value={options.find((key) => key.value === values.localMarket.value)}
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
              value={reportingYear.find(
                (key) => key.value === values.reportingYear,
              )}
              placeholder={cmsData.selectPlaceHolder}
              onChange={(selected, event) => {
                handleSelectField(selected, event);
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
              value={monthOptions.find(
                (key) => key.value === values.actualData,
              )}
              placeholder={cmsData.selectPlaceHolder}
              onChange={(selected, event) => {
                handleSelectField(selected, event);
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
              value={monthOptions.find(
                (key) => key.value === values.forecastData,
              )}
              options={forecastOptions}
              onChange={(selected, event) => handleSelectField(selected, event)}
            />
          </FormField>
        </Box>
      </Stack>
      <FormField
        label={cmsData.templateFileLabel}
        hint={cmsData.templateFileHint}
        {...(errors.file ? { error: errors.file } : {})}
      >
        <Dropzone
          allowMultiple={false}
          allowReorder
          onUpdateFiles={(fileItems) => {
            setFiles(fileItems);
          }}
          maxFiles={1}
          maxFileSize={MAX_FILE_SIZE}
          // onAddFileStart={(e) => handleUploadFile(e)}
          acceptedFileTypes={ALLOWED_FILE_TYPES}
          labelMaxFileSizeExceeded={cmsData.uploadFileLargeMessage}
          labelFileTypeNotAllowed={cmsData.labelFileTypeNotAllowed}
          // files={values.file}
        />
      </FormField>
      <FormField
        {...(errors.dueDate ? { error: errors.dueDate } : {})}
        label={cmsData.dueDateLabel}
        hint={cmsData.dueDateHint}
      >
        <DateInput
          placeholder={cmsData.datePlaceHolder}
          dateFormat="YYYY/MM/DD"
          parseDate={(date) => new Date(date).toUTCString()}
          onChange={(date) => handleSelectField(date, { name: 'dueDate' })}
          minDate={new Date()}
          maxDate={new Date(maxDate)}
          value={isEdit ? new Date(values.dueDate || '') : dueDate}
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
          value={userList.filter((obj) => values.assignTo.includes(obj.value))}
          onChange={(selected, event) => handleOwners(selected, event)}
        />
      </FormField>
    </>
  );
};

export default Form;
