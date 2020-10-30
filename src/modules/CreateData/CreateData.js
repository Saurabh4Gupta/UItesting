import React, { useState } from 'react'
import Stack from '@dentsu-ui/components/dist/cjs/components/Stack';
import Box from '@dentsu-ui/components/dist/cjs/components/Box';
import Button from '@dentsu-ui/components/dist/cjs/components/Button';
import TextContainer from '@dentsu-ui/components/dist/cjs/components/TextContainer';
import Subheading from '@dentsu-ui/components/dist/cjs/components/Subheading';
import Caption from '@dentsu-ui/components/dist/cjs/components/Caption';
import Modal from '@dentsu-ui/components/dist/cjs/components/Modal';
import FormModal from './Form'

const CreateData = () => {
  const [formData, setFormData] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  

 
  const handleCreateData = () => {
    console.log('HERE')
    setModalOpen(true);
  }

  const closeModalHandler = () => {
    setModalOpen(false)
  }

  console.log('[RENDERING CREATE DATA]')

  return <>
  {modalOpen && <FormModal closeModal={closeModalHandler}/>}
    <Box m="10px">
      <Stack flexDirection="row" justifyContent="space-between">
        <Stack>
          <TextContainer>
            <Subheading>
              Productivity data requests
       </Subheading>
            <Caption>
              View the active and previous data request that are available
       </Caption>
          </TextContainer>
        </Stack>
        <Button variant="secondary" iconLeft="add" onClick={handleCreateData}>Create new data request</Button>
      </Stack>
    </Box>
  </>
}

export default CreateData;
