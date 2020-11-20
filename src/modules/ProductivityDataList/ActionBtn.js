import React from 'react';
import { Menu } from '@dentsu-ui/components';
import PropTypes from 'prop-types';

const ActionBtn = (props) => {
  const { handleToggleData, actionName, deleteBtn, showStatus } =  props;
  return (
    <Menu>
      <Menu.Button />
      <Menu.List>
        <Menu.Item onClick={handleToggleData}>{ actionName }</Menu.Item>
        {
          showStatus === false ? '' :  <Menu.Item>{deleteBtn}</Menu.Item>
        }
      </Menu.List>
    </Menu>
  )
}
ActionBtn.propTypes = {
  handleToggleData: PropTypes.func.isRequired,
  actionName: PropTypes.string.isRequired,
  deleteBtn: PropTypes.string.isRequired,
  showStatus: PropTypes.object.isRequired,
};

export default ActionBtn;
