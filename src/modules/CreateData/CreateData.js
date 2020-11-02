import React, { useState } from 'react'
import { Caption, Subheading, TextContainer, Button, Stack } from '@dentsu-ui/components';
import FormModal from './Form'
import useCustomForm from '../../hooks/useCustomForm';
import validationRule from '../../utils/validate';

const CreateData = () => {
  const initialValues = {
    localMarket: '',
    name: '',
    briefing: '',
    startDate: null,
    endDate: null,
    dueDate: '',
    assignTo: '',
  };
  const [modalOpen, setModalOpen] = useState(false);

  const onSubmit = () => {

  }
  const { handleChange, values, handleSelectField, handleSubmit, errors } = useCustomForm({ initialValues, onSubmit, validate: validationRule });
  const handleCreateData = () => {
    console.log('HERE')
    setModalOpen(true);
  };

  const closeModalHandler = () => {
    setModalOpen(false)
  }

  return (
    <>
      {modalOpen && (
      <FormModal
        values={values}
        handleChange={handleChange}
        onSubmit={handleSubmit}
        handleSelectField={handleSelectField}
        errors={errors}
        closeModal={closeModalHandler}
      />
)}

      <Stack flexDirection="row" justifyContent="space-between">
        <Stack>
          <TextContainer>
            <Subheading>Productivity data requests</Subheading>
            <Caption>
              View the active and previous data request that are available
            </Caption>
          </TextContainer>
        </Stack>
        <Button variant="secondary" iconLeft="add" onClick={handleCreateData}>
          Create new data request
        </Button>
      </Stack>
    </>
)
};

export default CreateData;
