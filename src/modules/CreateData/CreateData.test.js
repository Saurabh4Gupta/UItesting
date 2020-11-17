import React from 'react';
import { shallow } from 'enzyme';
import CreateData from './CreateData';

describe('Success test cases for: Loader component', () => {
  let wrapper;

  describe('Snapshot test for  Loader component', () => {
    beforeEach(() => {
      wrapper = shallow(<CreateData />);
    });

    // it('Test to match the snapsot', () => {
    //   expect(wrapper).toMatchSnapshot();
    // });

    it('Renders correctly', () => {
      expect(wrapper.exists()).toBe(true);
    });
  });
});

describe('Failure test cases for: Duplicate data page', () => { });
