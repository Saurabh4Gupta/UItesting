import React from 'react';
const [modalOpen, setModalOpen] = useState(false);
const DeleteData = () => {

  const handleDelete = () => {
    console.log('Hello deleted');
    setModalOpen(false);
  }
  return <>
    <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} >
      <Modal.Header hasCloseButton={true} title="Delete this data requests" />
      <Modal.Body>
        <p>
          Are you sure want to delete this request?
       </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setModalOpen(false)}>
          cancel
</Button>
        <Button onClick={handleDelete}>
          Send
</Button>
      </Modal.Footer>
    </Modal>
  </>
}
export default DeleteData;
