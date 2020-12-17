import React from 'react';
import { shallow } from 'enzyme';
import RequestSummary from './RequestSummary'


describe('Success test cases for: PageController component', () => {
  let wrapper;
  describe('Snapshot test for  PageController component', () => {
    beforeAll(() => {
      wrapper = shallow(<RequestSummary />);
    });

    it('Test to match the snapsot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('Renders correctly', () => {
      // console.log("wrapper", wrapper)
      expect(wrapper.exists()).toBe(true);
    });
  });
});

describe('Failure test cases for: Duplicate data page', () => { });
