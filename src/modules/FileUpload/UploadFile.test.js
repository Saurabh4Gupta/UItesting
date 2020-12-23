import React from 'react';
import { shallow } from 'enzyme';
import UploadFile from './UploadFile';
import { dataFieldCms as PageContent } from '../../cms'


describe('Success test cases for: UploadFile component', () => {
  let wrapper;
  
  const setFiles = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState")
    useStateSpy.mockImplementation((files) => [files, setFiles]);

  const props = {
    cmsData:PageContent,
    error: null,
    onSubmit: jest.fn(),
    onClick: jest.fn(),
    validate:useStateSpy.mockImplementation((files) => [files, setFiles]),
    setModalOpen:jest.fn(false)
};
    
  describe('Snapshot test for  UploadFile component', () => {
    beforeEach(() => {
      wrapper = shallow(<UploadFile {...props}/>);
    });

    it('Test Upload click event', () => {
     wrapper.find({ children: PageContent.upload }).simulate('click')
     });
   
    it('Test Cancel click event', () => {
      wrapper.find({ children: PageContent.cancel }).simulate('click');
    });
   
   it('invoking handleFileChange functions', () => {
    const errorMsg = 'Upload tracker template';
    const fn = jest.fn(errorMsg);
    const pageControls = wrapper.find('ForwardRef').at(2).find('Form');
    expect(pageControls.prop('handleFileChange')());
    expect(pageControls.prop('setError')(fn));
    expect(pageControls.prop('setError')())
   })

    it('Test to match the snapsot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('Renders correctly', () => {
      expect(wrapper.exists()).toBe(true);
    });
  });
});
