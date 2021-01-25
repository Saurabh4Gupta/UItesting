/* eslint-disable operator-linebreak */
import React, { useState, useEffect, useContext } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { Button, Modal } from '@dentsu-ui/components';
import PropTypes from 'prop-types';

import Toast from '@dentsu-ui/components/dist/cjs/components/Toast';
import moment from 'moment';
import Form from './Form';
import useCustomForm from '../../hooks/useCustomForm';
import { checkValidation, validationRule } from '../../utils/validate';
import { monthOptions, reportingYearData } from '../Mock/mockData';

import { GET_USERS } from './queries';
import { MetaDataContext } from '../../contexts/marketOptions';
import FILE_UPLOAD from '../FileUpload/mutation';
import CREATE_DATA_REQUEST from './mutation';
import { getInitialValues } from '../../utils/formValues';
import EDIT_DATA_REQUEST from './editMutation';

const toast = Toast();
const CreateData = (props) => {
  const {
    cmsData,
    market,
    isModalOpen,
    handleModal,
    refetch,
    setMarket,
    isEdit,
    prodRequest,
    handleEditData
  } = props;

  const [isReadyToSubmit, setIsReadyToSubmit] = useState(false);

  const [uploadFile, { loading: fileLoading, error: fileError }] = useMutation(
    FILE_UPLOAD,
  );
  const [createDataRequest, { loading, error, data: createData }] = useMutation(
    CREATE_DATA_REQUEST,
  );
  const [
    editDataRequest,
    { loading: editLoading, error: editError, data: editData },
  ] = useMutation(EDIT_DATA_REQUEST);

  // console.log("+editData",editData)
  const [userData, setUserData] = useState([]);

  // const [files, setFiles] = useState([]);
  const { loading: userLoading, error: userError, data: userList } = useQuery(
    GET_USERS,
  );

  const initialValues = getInitialValues({
    isEdit,
    market,
    data: prodRequest || null,
  });

  console.log(prodRequest);

  const {
    handleChange,
    values,
    handleSelectField,
    handleSubmit,
    errors,
    handleCancel,
    handleOwners,
    setErrors,
    setValues,
    forecastOptions,
  } = useCustomForm({ initialValues, validate: validationRule });
  // console.log("outside of use effet +++++++++view",values.localMarket)
  useEffect(() => {
    if (userList) {
      const { data } = userList.getUsers;
      setUserData(data);
    }
  }, [userList]);

  const closeModalHandler = () => {
    handleModal(false);
    handleCancel();
  };

  useEffect(() => {
    if (createData) {
      const { status } = createData.createDataRequests;
      if (status === 200) {
        setMarket(values.localMarket);
        closeModalHandler();
        refetch();
        return toast({
          title: cmsData.toastRequestCreated,
          status: 'success',
        });
      }
    }
  }, [createData]);

  useEffect(() => {
    if (editData) {
      const { status  , data} = editData.editDataRequest;
      if (status === 200) {
        closeModalHandler();
        values.reportingYear = data.reportingYear
        handleEditData({...data , ...values})
        return toast({
          title: cmsData.toastRequestEdited,
          status: 'success',
        });
      }
    }
  }, [editData]);

  useEffect(() => {
    const { isAllValuesFilled, isAnyValidationError } = checkValidation(
      values,
      errors,
    );
    console.log('READY TO SUBMIT')
    console.log(isAllValuesFilled)
    console.log(isAnyValidationError)


    setIsReadyToSubmit(isAllValuesFilled && !isAnyValidationError);
  }, [errors, values]);

  useEffect(() => {
    if (fileError) {
      toast({
        title: '',
        content: fileError.message,
        status: 'danger',
      });
    }
  }, [fileError, error, userError]);

  useEffect(() => {
    handleChange({ target: { name: 'localMarket', value: market } });
  }, [market]);

  /* parsing file to base64 */

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
        file: { fileUrl, filename: file.name, size: file.size },
      }));
      setErrors((prevState) => ({
        ...prevState,
        file: '',
      }));
    };
  };

  /* On submit */


  async function onSubmit() {
    // handleSubmit();
    if (true) {
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

      // if (status !== 200) {
      //   setErrors((prevState) => ({
      //     ...prevState,
      //     file: cmsData.fileUploadFailed,
      //   }));
      //   return;
      // }
      if (isEdit) {
        const { id } = values;

        const reqData = {
          overviewId: localMarket.overviewId,
          blobId: '16109702688125',
          actualData,
          forecastData,
          name,
          briefing,
          reportingYear: moment(reportingYear.value).format('YYYY'),
          dueDate,
          id,
          owners: assignTo,
          filename: 'name.xlsx',
        };

        //console.log('DATA HITTING THE API ', reqData);

        editDataRequest({ variables: { data: reqData } });
      } else {
        const { file } = values;

        const { data: uploadData } = await uploadFile({ variables: { file } });
        const { data: fileData, status } = uploadData.uploadFile;

        const reqData = {
          overviewId: localMarket.overviewId,
          blobId: fileData.blobId,
          actualData,
          forecastData,
          name,
          briefing,
          reportingYear: moment(reportingYear.value).format('YYYY'),
          dueDate,
          owners: assignTo,
          filename: fileData.filename,
        };

        createDataRequest({ variables: { data: reqData } });
      }
    }
  }
  const { marketOptions } = useContext(MetaDataContext);
  const formMarketOption = marketOptions.filter((item) => item.value !== 'All');

  if (isEdit) {
    values.localMarket = prodRequest.localMarket;
    values.id = prodRequest.originalId;
  }

  const modalHeader = !isEdit
    ? cmsData.createNewDataRequest
    : cmsData.editDataRequest;

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModalHandler}>
        <Modal.Header hasCloseButton title={modalHeader} />
        <Modal.Body>
          <Form
            values={values}
            handleChange={handleChange}
            handleSelectField={handleSelectField}
            errors={errors}
            cmsData={cmsData}
            options={formMarketOption}
            monthOptions={monthOptions}
            reportingYear={reportingYearData}
            handleOwners={handleOwners}
            setFiles={handleFile}
            userList={userData}
            loading={userLoading}
            forecastOptions={forecastOptions}
            isEdit={isEdit}
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
    </>
  );
};
CreateData.propTypes = {
  cmsData: PropTypes.object,
  market: PropTypes.object,
  isModalOpen: PropTypes.bool,
  handleModal: PropTypes.func,
  refetch: PropTypes.func,
  setMarket: PropTypes.func,
  isEdit: PropTypes.bool,
  prodRequest: PropTypes.object,
};
CreateData.defaultProps = {
  cmsData: {},
  market: 'UK',
  isModalOpen: false,
  handleModal: () => {},
  refetch: () => {},
  setMarket: () => {},
  isEdit: false,
  prodRequest: {},
};

export default CreateData;
