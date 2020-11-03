import React, { useState, useEffect } from 'react'
import { Caption, Subheading, TextContainer, Button, Stack } from '@dentsu-ui/components';
import PropTypes from 'prop-types';
import FormModal from './Form'
import useCustomForm from '../../hooks/useCustomForm';
import validationRule from '../../utils/validate';

const CreateData = (props) => {
  const { cmsData, market } = props;
  const initialValues = {
    localMarket: market,
    name: '',
    briefing: '',
    actualData: '',
    forecastData: '',
    dueDate: '',
    assignTo: '',
  };
  const [isModalOpen, setModalOpen] = useState(false);
  const [isReadyToSubmit, setIsReadyToSubmit] = useState(false);

  const onSubmit = () => {
    if (isReadyToSubmit) {
      setModalOpen(false)
    }
  }

  const { handleChange, values,
    handleSelectField, handleSubmit,
    errors, handleCancel } = useCustomForm({ initialValues, onSubmit, validate: validationRule });

  useEffect(() => {
    const isAnyValidationError = errors && !!(errors.localMarket || errors.name
      || errors.briefing || errors.dueDate || errors.assignTo || errors.forecastData
      || errors.forecastData);
    const isAllValuesFilled = values.localMarket && values.name && values.assignTo
      && values.dueDate && values.forecastData && values.actualData && values.briefing;
    setIsReadyToSubmit(isAllValuesFilled && !isAnyValidationError);
  }, [errors, values]);

  const handleCreateData = () => {
    setModalOpen(true);
  };

  const closeModalHandler = () => {
    setModalOpen(false)
    handleCancel();
  }
  return (
    <>
      <FormModal
        values={values}
        handleChange={handleChange}
        onSubmit={handleSubmit}
        handleSelectField={handleSelectField}
        errors={errors}
        isModalOpen={isModalOpen}
        closeModal={closeModalHandler}
        cmsData={cmsData}
      />
      <Stack flexDirection="row" justifyContent="space-between">
        <Stack>
          <TextContainer>
            <Subheading>{cmsData.productivityDatarequestHeading}</Subheading>
            <Caption>
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
}
CreateData.defaultProps = {
  cmsData: {},
  market: 'UK',
}

export default CreateData;
