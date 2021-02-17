
import React from 'react';
import { shallow } from 'enzyme';
import CreateData from './CreateData';
import { dataFieldCms as PageContent } from '../../cms';

describe('Success test cases for: Loader component', () => {
  let wrapper;
  const props = {
    isReadyToSubmit: true,
    cmsData: {},
    market: { value: 'UK', label: 'United Kingdom' },
    isModalOpen: false,
    addRequest: jest.fn(),
    handleModal: jest.fn(),
    setDataCreated: jest.fn(false),
    handleChange: { target: { name: 'United Kingdom', value: 'UK' } },
    setLoading: jest.fn(),
    closeModalHandler: jest.fn(),
    onSubmit: jest.fn(),
  }


  describe('Snapshot test for Loader component', () => {
    beforeEach(() => {
      wrapper = shallow(<CreateData {...props} cmsData={PageContent} />);
    });
    it('Test to match the snapsot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('Test click event', () => {
      wrapper.find({ children: PageContent.createNewDataRequest }).simulate('click');
    });
    it('Test click event', () => {
      wrapper.find({ children: PageContent.cancel }).simulate('click');
    });
    it('Test click event', () => {
      wrapper.find({ children: PageContent.create }).simulate('click');
    });
    it('Renders correctly', () => {
      expect(wrapper.exists()).toBe(true);
    });
  });
});

describe('Failure test cases for: Duplicate data page', () => { })