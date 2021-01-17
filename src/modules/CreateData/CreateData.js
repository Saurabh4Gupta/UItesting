import React, { useState, useEffect } from 'react';
import {
  Caption,
  Subheading,
  TextContainer,
  Button,
  Stack,
  Modal,
} from '@dentsu-ui/components';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/client';
import Toast from '@dentsu-ui/components/dist/cjs/components/Toast';
import Form from './Form';
import useCustomForm from '../../hooks/useCustomForm';
import validationRule from '../../utils/validate';
import {
  options,
  monthOptions,
  reportingYear,
  userList,
} from '../Mock/mockData';
import FILE_UPLOAD from '../FileUpload/mutation';
import CREATE_DATA_REQUEST from './mutation';

const toast = Toast();
const CreateData = (props) => {
  const { cmsData, market, isModalOpen, handleModal } = props;
  const [isReadyToSubmit, setIsReadyToSubmit] = useState(false);

  const [uploadFile, { loading: fileLoading, error: fileError }] = useMutation(
    FILE_UPLOAD,
  );
  const [createDataRequest, { loading, error, data: createData }] = useMutation(
    CREATE_DATA_REQUEST,
  );
  const initialValues = {
    localMarket: market,
    blobId: '',
    name: '',
    briefing: '',
    reportingYear: '',
    actualData: '',
    forecastData: '',
    dueDate: '',
    assignTo: [],
    file: [],
  };

  const {
    handleChange,
    values,
    forecastOptions,
    handleSelectField,
    handleSubmit,
    errors,
    handleCancel,
    handleOwners,
    setErrors,
    setValues,
  } = useCustomForm({ initialValues, validate: validationRule });

  useEffect(() => {
    const isAnyValidationError =      errors
      && !!(
        errors.localMarket
        || errors.name
        || errors.briefing
        || errors.dueDate
        || errors.assignTo
        || errors.forecastData
        || errors.forecastData
        || errors.reportingYear
      );
    const isAllValuesFilled =      values.localMarket
      && values.name
      && values.assignTo
      && values.dueDate
      && values.forecastData
      && values.actualData
      && values.briefing
      && values.reportingYear;
    setIsReadyToSubmit(isAllValuesFilled && !isAnyValidationError);
  }, [errors, values]);

  const closeModalHandler = () => {
    handleModal(false);
    handleCancel();
  };

  useEffect(() => {
    closeModalHandler();
    if (fileError) {
      return toast({
        title: '',
        content: fileError.message,
        status: 'danger',
      });
    }
  }, [fileError, error]);

  useEffect(() => {
    handleChange({ target: { name: 'localMarket', value: market } });
  }, [market]);

  useEffect(() => {
    if (createData) {
      closeModalHandler();
      return toast({
        title: '',
        content: cmsData.toastRequestCreated,
        status: 'success',
      });
    }
  }, [loading, error, createData, fileLoading]);

  const handleCreateData = () => {
    handleModal(true);
  };
  const handleFile = (fileItems) => {
    if (fileItems.length === 0) {
      setValues((prevState) => ({
        ...prevState,
        file: [],
      }));
      return;
    }
    const reader = new FileReader();
    const { file } = fileItems[0];
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      const fileUrl = reader.result;
      setValues((prevState) => ({
        ...prevState,
        file: { fileUrl, filename: file.name },
      }));
      setErrors((prevState) => ({
        ...prevState,
        file: '',
      }));
    };
  };

  const onSubmit = async () => {
    handleSubmit();
    if (isReadyToSubmit) {
      const { file } = values;
      const { data } = await uploadFile({ variables: { file } });
      const { data: fileData, status } = data.uploadFile;
      if (status !== 200) {
        setErrors((prevState) => ({
          ...prevState,
          file: 'File Upload faild try again',
        }));
        return;
      }
      const {
        localMarket,
        name,
        briefing,
        actualData,
        forecastData,
        dueDate,
        assignTo,
        reportingYear,
      } = values;
      const reqData = {
        overviewId: localMarket.overViewId,
        blobId: fileData.blobId,
        name,
        briefing,
        reportingYear: reportingYear.value,
        actualData: actualData.value,
        forecastData: forecastData.value,
        dueDate,
        owners: assignTo,
        filename: fileData.filename,
      };

      createDataRequest({ variables: { data: reqData } });
    }
  };

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModalHandler}>
        <Modal.Header hasCloseButton title={cmsData.createNewDataRequest} />
        <Modal.Body>
          <Form
            values={values}
            handleChange={handleChange}
            handleSelectField={handleSelectField}
            errors={errors}
            cmsData={cmsData}
            options={options}
            monthOptions={monthOptions}
            reportingYear={reportingYear}
            forecastOptions={forecastOptions}
            userList={userList}
            handleOwners={handleOwners}
            setFiles={handleFile}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalHandler}>
            {cmsData.cancel}
          </Button>
          <Button isLoading={loading || fileLoading} onClick={onSubmit}>
            {cmsData.create}
          </Button>
        </Modal.Footer>
      </Modal>
      <Stack flexDirection="row" justifyContent="space-between">
        <Stack>
          <TextContainer>
            <Subheading>{cmsData.productivityDatarequestHeading}</Subheading>
            <Caption isAssistive>
              {cmsData.productivityDatarequestCaption}
            </Caption>
          </TextContainer>
        </Stack>
        <Button variant="secondary" iconLeft="add" onClick={handleCreateData}>
          {cmsData.createNewDataRequest}
        </Button>
      </Stack>
    </>
  );
};
CreateData.propTypes = {
  cmsData: PropTypes.object,
  market: PropTypes.object,
  isModalOpen: PropTypes.bool,
  handleModal: PropTypes.func,
};
CreateData.defaultProps = {
  cmsData: {},
  market: 'UK',
  isModalOpen: false,
  handleModal: () => {},
};

export default CreateData;
