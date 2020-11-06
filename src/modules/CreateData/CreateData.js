import React, { useState, useEffect } from 'react'
import { Caption, Subheading, TextContainer, Button, Stack, Modal } from '@dentsu-ui/components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import Form from './Form'
import useCustomForm from '../../hooks/useCustomForm';
import validationRule from '../../utils/validate';

const CreateData = (props) => {
  const { cmsData, market, isModalOpen, handleModal } = props;
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

  const onSubmit = () => {
    handleSubmit();
    if (isReadyToSubmit) {
      // mutation will be done here
      handleModal(false);
    }
  }
  const handleCreateData = () => {
    handleModal(true);
  };
  const closeModalHandler = () => {
    handleModal(false)
    handleCancel();
  }
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
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalHandler}>
            {cmsData.cancel}
          </Button>
          <Button onClick={onSubmit}>{cmsData.create}</Button>
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
  )
};
CreateData.propTypes = {
  cmsData: PropTypes.object,
  market: PropTypes.string,
  isModalOpen: PropTypes.bool,
  handleModal: PropTypes.func,
}
CreateData.defaultProps = {
  cmsData: {},
  market: 'UK',
  isModalOpen: false,
  handleModal: () => { },
}

export default withRouter(CreateData);
