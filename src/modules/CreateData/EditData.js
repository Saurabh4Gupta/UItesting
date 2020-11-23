import React, { useState, useEffect } from 'react'
import { Button, Modal } from '@dentsu-ui/components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import Form from './Form'
import useCustomForm from '../../hooks/useCustomForm';
import validationRule from '../../utils/validate';
import { options, updateData } from '../Mock/mockData'

const EditData = (props) => {
  const { cmsData, isModalOpen, handleModal } = props;
  const [isReadyToSubmit, setIsReadyToSubmit] = useState(false);
  const initialValues = {
    localMarket: { value: 'UK', label: 'United Kingdom' },
    name: 'Productivity Q2 2020',
    briefing: 'Give some details about this quarter',
    actualData: { value: 0, label: '0' },
    forecastData: { value: 12, label: '12' },
    dueDate: '2020-11-23',
    assignTo: { value: 'UK', label: 'United Kingdom' },
  };
  const { handleChange, values,
    handleSelectField, handleSubmit,
    errors, handleCancel } = useCustomForm({ initialValues, validate: validationRule });

  useEffect(() => {
    const isAnyValidationError = errors && !!(errors.localMarket || errors.name
      || errors.briefing || errors.dueDate || errors.assignTo || errors.forecastData
      || errors.forecastData);
    const isAllValuesFilled = values.localMarket && values.name && values.assignTo
      && values.dueDate && values.forecastData && values.actualData && values.briefing;
    setIsReadyToSubmit(isAllValuesFilled && !isAnyValidationError);
  }, [errors, values]);
  const closeModalHandler = () => {
    handleModal(false)
    handleCancel();
  }
  const onSubmit = () => {
    handleSubmit();
    if (isReadyToSubmit) {
      // console.log('??????????', values);
    closeModalHandler()
    updateData(values)
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
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalHandler}>
            {cmsData.cancel}
          </Button>
          <Button onClick={onSubmit}>{cmsData.save}</Button>
        </Modal.Footer>
      </Modal>
    </>
)
};
EditData.propTypes = {
    cmsData: PropTypes.object,
    isModalOpen: PropTypes.bool,
    handleModal: PropTypes.func,
  }
  EditData.defaultProps = {
    cmsData: {},
    isModalOpen: false,
    handleModal: () => { },
  }
export default withRouter(EditData);
