import React from 'react';
import { shallow } from 'enzyme';
import UploadFile from './UploadFile';
import { dataFieldCms as PageContent } from '../../cms';

describe('Success test cases for: UploadFile component', () => {
  let wrapper;

  describe('Snapshot test for  UploadFile component', () => {
    beforeEach(() => {
      wrapper = shallow(<UploadFile cmsData={PageContent} />);
    });

    it('Test Upload click event', () => {
      wrapper.find({ children: PageContent.upload }).simulate('click');
    });
    it('Test Cancel click event', () => {
      wrapper.find({ children: PageContent.cancel }).simulate('click');
    });
    it('Test Cancel click event', () => {
      wrapper.debug().handleFileChange([]);
      console.log('[TESTING]', wrapper.debug())

     // wrapper.find({ children: 'Cancel' }).simulate('click');
    });

   it('invoking handleFileChange functions', () => {
    const pageControls = wrapper.find('ForwardRef').at(2).find('Form');
    expect(pageControls.prop('handleFileChange')());
   })

    it('Test to match the snapsot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('Renders correctly', () => {
      expect(wrapper.exists()).toBe(true);
    });
  });
});
