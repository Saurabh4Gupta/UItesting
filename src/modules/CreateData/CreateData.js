import React, { useState } from 'react'
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

  const onSubmit = () => {

  }
  const { handleChange, values,
    handleSelectField, handleSubmit,
    errors, handleCancel } = useCustomForm({ initialValues, onSubmit, validate: validationRule });
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
