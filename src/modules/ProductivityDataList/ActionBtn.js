import React from 'react';
import { Menu } from '@dentsu-ui/components';
import PropTypes from 'prop-types';
import DeleteData from '../CreateData/DeleteData';

const ActionBtn = (props) => {
  const { handleToggleData, actionName, deleteBtn, showStatus, deleteRequest, setIsDeleteModal, isDeleteModal } =  props;
  return (
    <>
      <DeleteData
        modalOpen={isDeleteModal}
        setModalOpen={setIsDeleteModal}
        deleteRequest={deleteRequest}
      />
      <Menu>
        <Menu.Button />
        <Menu.List>
          <Menu.Item onClick={handleToggleData}>{ actionName }</Menu.Item>
          {
          showStatus === false ? '' :  <Menu.Item onClick={() => setIsDeleteModal(true)}>{deleteBtn}</Menu.Item>
        }
        </Menu.List>
      </Menu>
    </>
  )
}
ActionBtn.propTypes = {
  handleToggleData: PropTypes.func.isRequired,
  actionName: PropTypes.string.isRequired,
  deleteBtn: PropTypes.string.isRequired,
  showStatus: PropTypes.string.isRequired,
  deleteRequest: PropTypes.func.isRequired,
  setIsDeleteModal: PropTypes.func.isRequired,
  isDeleteModal: PropTypes.bool.isRequired,
};

export default ActionBtn;
