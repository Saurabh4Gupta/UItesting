import React, { useState } from 'react';
import Stack from '@dentsu-ui/components/dist/cjs/components/Stack';
import Box from '@dentsu-ui/components/dist/cjs/components/Box';
import Button from '@dentsu-ui/components/dist/cjs/components/Button';
import TextContainer from '@dentsu-ui/components/dist/cjs/components/TextContainer';
import Subheading from '@dentsu-ui/components/dist/cjs/components/Subheading';
import Caption from '@dentsu-ui/components/dist/cjs/components/Caption';
import Modal from '@dentsu-ui/components/dist/cjs/components/Modal';
import Form from './Forms';

const CreateData = () => {
  const [formData, setFormData] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = () => {
    console.log('Hello Data is ');
    setModalOpen(false);
  };
  const handleCreateData = () => {
    setModalOpen(true);
  };

  return (
    <>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <Modal.Header hasCloseButton title="create new data requests" />
        <Modal.Body>
          <Form />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalOpen(false)}>
            cancel
          </Button>
          <Button onClick={handleSubmit}>Send</Button>
        </Modal.Footer>
      </Modal>
      <Box m="30px">
        <Stack flexDirection="row" justifyContent="space-between">
          <Stack>
            <TextContainer>
              <Subheading>Productivity data requests</Subheading>
              <Caption isItalic isSecondary>
                The ongoing and complete productivity data requests created for this client
              </Caption>
            </TextContainer>
          </Stack>
          <Button variant="secondary" iconLeft="add" onClick={handleCreateData}>
            Create new data request
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default CreateData;
