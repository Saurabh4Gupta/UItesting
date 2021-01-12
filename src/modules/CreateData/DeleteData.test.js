import React from 'react';
import { shallow } from 'enzyme';
import DeleteData from './DeleteData';
import { dataFieldCms } from '../../cms';

describe('Success test cases for: DeleteData component', () => {
  let wrapper;
  const props = {
    setModalOpen: jest.fn(),
    deleteRequest: jest.fn(),
    deleteModalData: {},
    handleToggleData: jest.fn(),
    setIsMoveToCompleteModel: jest.fn(),
    moveToCompleteModelData: {},
    isDeleteModal: true,
    // moveToCompleteConfirmation: 'Are you sure you want to move this to complete?',
    // moveToCompleteDescription: 'You will not be able to make any more edits to this request unless it is moved back to "Ongoing".',
    // deletePopUpConfirmation: 'Are you sure you want to delete?',
    // deletePopUpDescription: 'Once deleted, this data request will no longer be available.',
    // noCancel: 'No, cancel',
    // yesContinue: 'Yes, continue',
    // yesDelete: 'Yes, delete',
  }

  describe('Snapshot test for  DeleteData component', () => {
    beforeEach(() => {
      wrapper = shallow(<DeleteData {...props} />);
    });

    it('Test to match the snapsot', async (done) => {
      expect(wrapper).toMatchSnapshot();
      done();
    });

    it('Test to match the snapsot', async () => {
      const fn = wrapper.find('ForwardRef').at(0).prop('onClose');
      expect(fn).toBeInstanceOf(Function);
      fn();
    });

    // it('Test to match the snapsot', () => {
    //   const fn1 = wrapper.find('ForwardRef').at(2).find('Button');
    //   console.debug(fn1)
    //   expect(fn1.prop('onClick')())

    // });
    it('Test click event', () => {
      wrapper.find({ children: dataFieldCms.noCancel }).simulate('click');
    });

    it('Test click event', () => {
      wrapper.find({ children: dataFieldCms.yesContinue  }).simulate('click');
    });

    it('Renders correctly', () => {
      expect(wrapper.exists()).toBe(true);
    });
  });
});

describe('Failure test cases for: Duplicate data page', () => { });
