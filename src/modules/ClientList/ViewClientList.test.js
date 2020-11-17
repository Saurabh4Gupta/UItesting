
import React from 'react';
import { shallow } from 'enzyme';
import ViewClientList from './ViewClientList';

describe('Success test cases for: ViewClientList component', () => {
  let wrapper;

  describe('Snapshot test for  ViewClientList component', () => {
    beforeEach(() => {
      wrapper = shallow(<ViewClientList />);
    });

    it('Test to match the snapsot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('Renders correctly', () => {
      expect(wrapper.exists()).toBe(true);
    });
  });
});

describe('Failure test cases for: Duplicate data page', () => { });
