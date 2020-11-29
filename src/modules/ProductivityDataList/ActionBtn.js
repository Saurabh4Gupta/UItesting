import React from 'react';
import { Menu } from '@dentsu-ui/components';
import PropTypes from 'prop-types';

const ActionBtn = (props) => {
  const {
    handleToggleData,
    actionName,
    deleteBtn,
    showStatus,
    objId,
    handleDeleteModel,
  } = props;
  return (
    <>
      <Menu>
        <Menu.Button />
        <Menu.List>
          <Menu.Item onClick={handleToggleData}>{actionName}</Menu.Item>
          {showStatus === false ? (
            ''
          ) : (
            <Menu.Item onClick={() => handleDeleteModel(objId)}>
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
  objId: PropTypes.number.isRequired,
};
ActionBtn.defaultProps = {
  handleDeleteModel: true,
};

export default ActionBtn;
