import React from 'react';
import { shallow } from 'enzyme';
import RequestSummary from './RequestSummary'


describe('Success test cases for: RequestSummary component', () => {
  let wrapper;
  describe('Snapshot test for  RequestSummary component', () => {
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
