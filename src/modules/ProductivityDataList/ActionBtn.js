import React from 'react';
import { Menu } from '@dentsu-ui/components';
import PropTypes from 'prop-types';
import { dataFieldCms } from '../../cms/dataFieldCms'

const ActionBtn = (props) => {
  const {
    handleToggleData,
    handleMoveToCompleteModel,
    actionName,
    deleteBtn,
    showStatus,
    handleDeleteModel,
  } = props;
  return (
    <>
      <Menu>
        <Menu.Button />
        <Menu.List>
          <Menu.Item onClick={actionName === dataFieldCms.moveToComplete
            ? handleMoveToCompleteModel : handleToggleData}
          >
            {actionName}
          </Menu.Item>
          {showStatus === false ? (
            ''
          ) : (
            <Menu.Item onClick={handleDeleteModel}>
              {deleteBtn}
            </Menu.Item>
            )}
        </Menu.List>
      </Menu>
    </>
  );
};
ActionBtn.propTypes = {
  handleToggleData: PropTypes.func.isRequired,
  actionName: PropTypes.string.isRequired,
  deleteBtn: PropTypes.string.isRequired,
  showStatus: PropTypes.bool.isRequired,
  handleDeleteModel: PropTypes.func,
  handleMoveToCompleteModel: PropTypes.func.isRequired,
};
ActionBtn.defaultProps = {
  handleDeleteModel: true,
};

export default ActionBtn;
