import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';
import { dataFieldCms as PageContent } from '../../cms';

describe('Success test cases for: Loader component', () => {
  let wrapper;
  describe('Snapshot test for  Loader component', () => {
    beforeEach(() => {
      const fn = jest.fn();
      const files = [];
      const error = {};
      wrapper = shallow(<Form
        handleFileChange={fn}
        files={files}
        errors={error}
        cmsData={PageContent}
      />);
    });

    it('Test to match ', () => {
     wrapper.find('Dropzone').at(0).prop('onUpdateFiles')()
    });

    it('Test to match the snapsot', () => {
      expect(wrapper).toMatchSnapshot();
    });
    it('Renders correctly', () => {
      expect(wrapper.exists()).toBe(true);
    });
  });
});

describe('Failure test cases for: Duplicate data page', () => {});
