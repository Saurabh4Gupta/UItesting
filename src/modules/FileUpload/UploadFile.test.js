
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
      wrapper.find({ children: 'Upload' }).simulate('click');
    });
    it('Test Cancel click event', () => {
      wrapper.find({ children: 'Cancel' }).simulate('click');
    });
    it('Test Cancel click event', () => {
      wrapper.debug().handleFileChange([]);
      console.log('[TESTING]', wrapper.debug())

     // wrapper.find({ children: 'Cancel' }).simulate('click');
    });

  //   it('on submitting, a submit handler function should be triggered on click event', () => {
  //     const fn = jest.fn();
  //     //wrapper = shallow(<UploadFile cmsData={PageContent} />);
  //     let tree = create(<UploadFile onClick={fn} />);
  //     const button = tree.root.findByType('Modal.Modal.Footer.Button')
  //       button.onClick()
  //       // Verify callback is invoked
  //  expect(fn.mock.calls.length).toBe(1);
  //     // wrapper.find('Modal.Modal.Footer.Button').simulate('change', {
  //     //   target: {
  //     //     value: fn,
  //     //   },
  //     // });
  //     //wrapper.find('Button').simulate('click');
  //    // expect(fn).toHaveBeenCalled();
  //   });

  //  it('file upload',()=>{
  //   const setFiles = jest.fn();
  //   const handleClick = jest.spyOn(React, "useState");
  //   handleClick.mockImplementation(files => [files, setFiles]);
    // wrapper.find("Form").simulate('change',{
    //   target: {
    //     value: {setFiles(files)}
    //           },
    // });
    // const [error, setError] = useState({});
    // const [files, setFiles] = useState([]);

    // expect(setFiles).toBeTruthy();
    // })


    it('Test to match the snapsot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('Renders correctly', () => {
      expect(wrapper.exists()).toBe(true);
    });
  });
});
