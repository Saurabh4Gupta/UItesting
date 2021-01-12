import React from 'react';
import { shallow } from 'enzyme';
import OtherProductivityData from './OtherProductivityData';

describe('test cases for Table list', () => {
    let wrapper;
    const props = {
        handleEditData: jest.fn(),
        prodRequest : { },
        handleCreateData: jest.fn(),
        value: 'April 2020  -  March 2021',
    };
    const values = {
         id: 1,
        dueDate: '23/12/2020',
        actualData: { value: 4, label: '4 months' },
        forecastData: { value: 8, label: '8 months' },
        assignTo:[{ value: 'ryanKillick', label: 'Ryan Killick', userImage:'user1.png' }],
        reportingYear: { value: 'April 2020  -  March 2021', label: 'April 2020  -  March 2021' },
        isCompleted:true,
    }

    describe('Snapshot test for  OtherProductivityData component', () => {
    beforeAll(() => {
      wrapper = shallow(<OtherProductivityData {...props} isCompleted value={values} />);
      wrapper.instance().handleCreateData()
      expect(wrapper.find('EditData').prop('handleModal')())
      expect(wrapper.find('Box').prop('reportingYear')())
    });
    it('Test to match the snapsot', async (done) => {
        expect(wrapper).toMatchSnapshot();
        done();
      });
  });
});
describe('Failure test cases for: Duplicate data page', () => { });
