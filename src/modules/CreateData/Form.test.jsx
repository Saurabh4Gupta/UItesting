import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';
import { dataFieldCms as cmsData } from '../../cms';
import { options, monthOptions, reportingYear } from '../Mock/mockData'


describe('Success test cases for: UploadFile component', () => {
  let wrapper;
  describe('Snapshot test for  UploadFile component', () => {
    beforeEach(() => {
      const handleSelectField = jest.fn();
      const forecastOptions = [];
      const errors = {};
     const handleChange = jest.fn();

     const values = {
      localMarket: '',
      name: '',
      briefing: '',
      reportingYear: '',
      actualData: '',
      forecastData: '',
      dueDate: '',
      assignTo: '',
    };
      wrapper = shallow(<Form
        values={values}
        handleChange={handleChange}
        handleSelectField={handleSelectField}
        errors={errors}
        cmsData={cmsData}
        options={options}
        monthOptions={monthOptions}
        reportingYear={reportingYear}
        forecastOptions={forecastOptions}
      />)
    });

   it('invoking handleFileChange functions', () => {
    expect(wrapper.find('Select').at(0).prop('onChange')())
    expect(wrapper.find('Select').at(1).prop('onChange')())
    expect(wrapper.find('Select').at(2).prop('onChange')())
    expect(wrapper.find('Select').at(3).prop('onChange')())
    expect(wrapper.find('Select').at(4).prop('onChange')())
   })

   it('Test to match ', () => {
    expect(wrapper.find('Dropzone').at(0).prop('onUpdateFiles')())
    expect(wrapper.find('Dropzone').at(0).prop('onInit')())
   });

   it('Test to match ', () => {
     expect(wrapper.find('ForwardRef').at(1).prop('parseDate')('DD/MM/YYYY'))
     expect(wrapper.find('ForwardRef').at(1).prop('onChange')())
   });

    it('Renders correctly', () => {
      expect(wrapper.exists()).toBe(true);
    });
  });
});
