/* eslint-disable operator-linebreak */
import React, { useState, useEffect, useContext, useRef } from 'react';
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
import { getInitialValues } from '../../utils/formValues';
import EDIT_DATA_REQUEST from './editMutation';
import { CREATE_DATA_REQUEST } from './mutation';

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
    handleEditData,
    // eslint-disable-next-line react/prop-types
    refetchEdit,
    clientCode,
    clientName,
  } = props;

  const [isReadyToSubmit, setIsReadyToSubmit] = useState(false);

  const firstRender = useRef(true);

  let initialValues;

  const { marketOptions } = useContext(MetaDataContext);
  const formMarketOption = marketOptions.filter((item) => item.value !== 'All');

  const [uploadFile, { loading: fileLoading, error: fileError }] = useMutation(
    FILE_UPLOAD,
  );
  const [
    createDataRequest,
    { loading: createLoading, error, data: createData },
  ] = useMutation(CREATE_DATA_REQUEST);
  const [
    editDataRequest,
    { data: editData, loading: editLoading },
  ] = useMutation(EDIT_DATA_REQUEST);

  const [userData, setUserData] = useState([]);

  const { loading: userLoading, error: userError, data: userList } = useQuery(
    GET_USERS,
  );

  useEffect(() => {
    if (userList) {
      const { data } = userList.getUsers;
      setUserData(data);
    }
  }, [userList]);

  const {
    handleChange,
    values,
    handleSelectField,
    errors,
    handleCancel,
    handleOwners,
    setErrors,
    setValues,
    forecastOptions,
    handleSubmit,
  } = useCustomForm({ initialValues, validate: validationRule });

  useEffect(() => {
    setValues(
      getInitialValues({
        isEdit,
        market,
        data: prodRequest || {},
      }),
    );
  }, []);

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
      const { status, data } = editData.editDataRequest;
      if (status === 200) {
        refetchEdit();
        closeModalHandler();
        values.reportingYear = data.reportingYear;
        handleEditData({ ...data, ...values });
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
    setIsReadyToSubmit(isAllValuesFilled && !isAnyValidationError);
  }, [errors, values]);

  useEffect(() => {
    if (fileError) {
      closeModalHandler();
      toast({
        title: '',
        content: 'Something went wrong!',
        status: 'error',
      });
    }
  }, [fileError, error, userError]);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    handleChange({ target: { name: 'localMarket', value: '' } });
  }, [market]);

  /* parsing file to base64 */

  const handleFile = (fileItems) => {
    if (fileItems.length === 0) {
      setValues((prevState) => ({
        ...prevState,
        file: [],
        blobId: '',
      }));
      return;
    }
    // debugger;
    // if (isEdit && values.blobId) return;
    const reader = new FileReader();
    const { file } = fileItems[0];
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      const fileUrl = reader.result;
      setValues((prevState) => ({
        ...prevState,
        file: [{ fileUrl, filename: file.name, size: file.size }],
      }));
      setErrors((prevState) => ({
        ...prevState,
        file: '',
      }));
    };
  };

  const handleCreateSubmit = async (data) => {
    if (values.blobId === '') {
      const { data: uploadData } = await uploadFile({
        variables: { file: values.file[0] },
      });
      const {
        data: { blobId, filename },
      } = uploadData.uploadFile;
      setValues((prevState) => ({
        ...prevState,
        blobId,
        filename,
      }));
      data.blobId = blobId;
      data.filename = filename;
    }
    createDataRequest({ variables: { data } });
  };

  const handleEditSubmit = async (data) => {
    if (values.blobId === '') {
      const { data: uploadData } = await uploadFile({
        variables: { file: values.file[0] },
      });
      const {
        data: { blobId, filename },
      } = uploadData.uploadFile;
      setValues((prevState) => ({
        ...prevState,
        blobId,
        filename,
      }));
      data.blobId = blobId;
      data.filename = filename;
    }
    editDataRequest({ variables: { data } });
  };

  /* On submit */

  async function onSubmit() {
    handleSubmit();
    if (isReadyToSubmit) {
      const {
        localMarket,
        name,
        briefing,
        actualData,
        forecastData,
        dueDate,
        assignTo,
        reportingYear,
        blobId,
        filename,
        id,
      } = values;

      const emails = userData.filter((item) => assignTo.includes(item.value))
      const email = emails.map(e => e.email).join(',');

      const reqData = {
        overviewId: localMarket.overviewId,
        actualData,
        forecastData,
        name: name.trim(),
        briefing: briefing.trim(),
        reportingYear: moment(reportingYear.value).format('YYYY'),
        dueDate: moment(dueDate).format('YYYY-MM-DD'),
        owners: assignTo,
        blobId,
        filename,
        id,
        marketName: localMarket.label,
        clientCode,
        clientName,
        email,
      };
      if (isEdit) return handleEditSubmit(reqData);
      return handleCreateSubmit(reqData);
    }
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
          <Button
            isLoading={createLoading || fileLoading || editLoading}
            onClick={onSubmit}
          >
            {isEdit ? cmsData.save : cmsData.create}
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
  handleEditData: PropTypes.func,
  refetch: PropTypes.func,
  setMarket: PropTypes.func,
  isEdit: PropTypes.bool,
  prodRequest: PropTypes.object,
  clientCode: PropTypes.string,
  clientName: PropTypes.string,
};
CreateData.defaultProps = {
  cmsData: {},
  market: 'UK',
  isModalOpen: false,
  handleModal: () => { },
  handleEditData: () => { },
  refetch: () => { },
  setMarket: () => { },
  isEdit: false,
  prodRequest: {},
  clientCode: PropTypes.string,
  clientName: PropTypes.string,
};

export default CreateData;
