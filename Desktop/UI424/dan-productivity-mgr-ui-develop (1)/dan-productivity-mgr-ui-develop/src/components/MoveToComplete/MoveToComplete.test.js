import React from 'react';
import { shallow } from 'enzyme';
import MoveToComplete from './MoveToComplete';

describe('Success test cases for: MoveToComplete component', () => {
  let wrapper;
  const props = {
    setModalOpen: jest.fn(),
  }

  describe('Snapshot test for MoveToComplete component', () => {
    beforeEach(() => {
      wrapper = shallow(<MoveToComplete {...props} />);
    });

    it('Test to match the ForwardRef', async (done) => {
      expect(wrapper).toMatchSnapshot();
      done();
    });

    it('Test to match the snapsot', async () => {
      const fn = wrapper.find('ForwardRef').at(0).prop('onClose');
      expect(fn).toBeInstanceOf(Function);
      fn();
    });

    it('Renders correctly', () => {
      expect(wrapper.exists()).toBe(true);
    });
  });
});

describe('Failure test cases for: Duplicate data page', () => { });
