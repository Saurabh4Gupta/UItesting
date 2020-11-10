import React, { useState, useEffect } from 'react'
import { Caption, Subheading, TextContainer, Button, Stack, Modal } from '@dentsu-ui/components';
import PropTypes from 'prop-types';
import Form from './Form'
import useCustomForm from '../../hooks/useCustomForm';
import validationRule from '../../utils/validate';
import { options, monthOptions, updateData } from '../Mock/mockData'

const CreateData = (props) => {
  const { cmsData, market, isModalOpen, handleModal, setDataCreated } = props;
  const [isReadyToSubmit, setIsReadyToSubmit] = useState(false);
  const initialValues = {
    localMarket: market,
    name: '',
    briefing: '',
    actualData: '',
    forecastData: '',
    dueDate: '',
    assignTo: '',
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
      // mutation will be done here
      closeModalHandler();

      updateData(values)
      setDataCreated(true)
    }
  }
  const handleCreateData = () => {
    handleModal(true);
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
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" data-test="handle-modal" onClick={closeModalHandler}>
            {cmsData.cancel}
          </Button>
          <Button data-test="handle-button" onClick={onSubmit}>{cmsData.create}</Button>
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
        <Button variant="secondary" iconLeft="add" data-test="handle-create" onClick={handleCreateData}>
          {cmsData.createNewDataRequest}
        </Button>
      </Stack>
    </>
  )
};
CreateData.propTypes = {
  cmsData: PropTypes.object,
  market: PropTypes.string,
  isModalOpen: PropTypes.bool,
  handleModal: PropTypes.func,
  setDataCreated: PropTypes.func,
}
CreateData.defaultProps = {
  cmsData: {},
  market: 'UK',
  isModalOpen: false,
  handleModal: () => { },
  setDataCreated: () => false,
}

export default CreateData;
