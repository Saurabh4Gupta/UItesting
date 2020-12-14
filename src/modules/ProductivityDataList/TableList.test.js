import React from 'react';
import { shallow } from 'enzyme';
import TableList from './TableList';

describe('test cases for Table list', () => {
  let wrapper;
  const props = {
    cmsData: {
      dueDate: '2020-08-25',
    },
    data: ['test1', 'test2', 'test3'],
    handleToggleData: jest.fn(),
    actionName: 'test',
    showStatus: true,
    handleDeleteModel: jest.fn(),
    clientCode: 'MC',
  };
  const list = {
    id: 1,
    client: 'Microsoft',
    localMarket: { label: 'United Kingdom', value: 'UK' },
    status: 'Overdue',
    name: 'Productivity Q2 2020',
    updatedAt: '29/10/20 at 14:32',
    actualData: { value: 4, label: '4 months' },
    forecastData: { value: 8, label: '8 months' },
    year: '2020',
    quarter: 'Q2',
  };
  beforeAll(() => {
    wrapper = shallow(<TableList {...props} />);
  });
  it('should match snapshot', () => {
    wrapper.find('List').props().renderItem(list);
    expect(wrapper).toMatchSnapshot();
  });
});
