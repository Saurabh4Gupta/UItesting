/* eslint-disable react/prop-types */
import React from 'react';
import { Menu } from '@dentsu-ui/components';

const ActionBtn = (props) => {
  const { moveToCompleteAction, actionName, deleteBtn } =  props;
  return (
    <Menu>
      <Menu.Button />
      <Menu.List>
        <Menu.Item onClick={moveToCompleteAction}>{ actionName }</Menu.Item>
        <Menu.Item>{deleteBtn}</Menu.Item>
      </Menu.List>
    </Menu>
  )
}
export default ActionBtn;
