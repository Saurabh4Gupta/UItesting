import React, { useState, useEffect } from 'react'
import { Button, Modal } from '@dentsu-ui/components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import Toast from '@dentsu-ui/components/dist/cjs/components/Toast';
import Form from './Form'
import useCustomForm from '../../hooks/useCustomForm';
import validationRule from '../../utils/validate';
import { options, monthOptions, reportingYear, data } from '../Mock/mockData'
import { dataFieldCms as PageContent } from '../../cms';


const EditData = (props) => {
  const { cmsData, isModalOpen, handleModal, requestId, handleEditData } = props;
  const [isReadyToSubmit, setIsReadyToSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const filterCompleteList = data.data.filter(
    (item) => item.id === requestId,
  );
  const initialValues = {
    localMarket: filterCompleteList[0].localMarket,
    name: filterCompleteList[0].name,
    briefing: filterCompleteList[0].briefing,
    reportingYear:{ value: filterCompleteList[0].reportingYear, label: filterCompleteList[0].reportingYear },
    actualData:filterCompleteList[0].actualData,
    forecastData: filterCompleteList[0].forecastData,
    dueDate: new Date(),
    assignTo: { value: 'UK', label: 'Ryan Killick' },
  };
  const { handleChange, values, forecastOptions,
    handleSelectField, handleSubmit,
    errors, handleCancel } = useCustomForm({ initialValues, validate: validationRule });

  useEffect(() => {
    const isAnyValidationError = errors && !!(errors.localMarket || errors.name
      || errors.briefing || errors.dueDate || errors.assignTo || errors.forecastData
      || errors.forecastData || errors.reportingYear);
    const isAllValuesFilled = values.localMarket && values.name && values.assignTo
      && values.dueDate && values.forecastData && values.actualData && values.briefing && values.reportingYear;
    setIsReadyToSubmit(isAllValuesFilled && !isAnyValidationError);
  }, [errors, values]);
  const closeModalHandler = () => {
    handleModal(false)
    handleCancel();
    const toast = new Toast();

    return toast({
      title: '',
      content: PageContent.toastRequestEdited,
      status: 'success',
    });
  }
  const onSubmit = () => {
    handleSubmit();
    if (isReadyToSubmit) {
      setLoading(true);
      handleEditData(values)
      setTimeout(() => {
        setLoading(false);
        closeModalHandler()
        // updateData(values)
      }, 1000);
    }
  }
  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModalHandler}>
        <Modal.Header hasCloseButton title={cmsData.editDataRequest} />
        <Modal.Body>
          <Form
            values={values}
            handleChange={handleChange}
            handleSelectField={handleSelectField}
            errors={errors}
            cmsData={cmsData}
            options={options}
            monthOptions={monthOptions}
            dueDate={values.dueDate}
            reportingYear={reportingYear}
            forecastOptions={forecastOptions}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalHandler}>
            {cmsData.cancel}
          </Button>
          <Button isLoading={loading} onClick={onSubmit}>{cmsData.save}</Button>
        </Modal.Footer>
      </Modal>
    </>
)
};
EditData.propTypes = {
    cmsData: PropTypes.object,
    isModalOpen: PropTypes.bool,
    handleModal: PropTypes.func,
    requestId:PropTypes.string,
    handleEditData: PropTypes.func,
  }
  EditData.defaultProps = {
    cmsData: {},
    isModalOpen: false,
    handleModal: () => { },
    requestId:PropTypes.string,
    handleEditData: PropTypes.func,
  }
export default withRouter(EditData);
