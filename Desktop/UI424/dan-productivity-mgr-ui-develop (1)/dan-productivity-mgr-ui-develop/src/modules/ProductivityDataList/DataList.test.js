import React from 'react';
import { shallow } from 'enzyme';
import DataList from './DataList';

describe('<EmptyState />', () => {
  let wrapper;
  let wrapper2;
  let wrapper3;

  const props = {
    setCompleteDataList: jest.fn(),
    tabIndex: 0,
    mockData: {
      data: [
        {
          id: 1,
          client: 'Microsoft',
          localMarket: { value: 'UK', label: 'United Kingdom' },
          status: 'Overdue',
          clientMarket: 'Microsoft United Kingdom',
          name: 'Productivity Q2 2020',
          briefing: 'Lorem Ipsum.',
          dueDate: '13/07/2020',
          updatedAt: '29/10/20 at 14:32',
          createdAt: '2020-08-14',
          assignTo: [
            {
              value: 'ryanKillick',
              label: 'Ryan Killick',
              userImage: 'user1.png',
            },
          ],
          reportingYear: {
            value: 'April 2020  -  March 2021',
            label: 'April 2020  -  March 2021',
          },
          actualData: { value: 4, label: '4 months' },
          forecastData: { value: 8, label: '8 months' },
          isActive: true,
          isDeleted: false,
          year: '2020',
          quarter: 'Q2',
          totalTenure: '2020 Q2',
          isCompleted: false,
        },
      ],
    },
    cmsData: 'data',
    handleModal: jest.fn(),
    handleToggleData: jest.fn(),
    handleTabIndex: jest.fn(),
    loading: false,
    clientCode: 'MC',
    market: {
      value: '',
      label: 'All markets',
    },
    completeDataList: {
      totalCount: 1,
      data: [],
    },
    dataList: {
      totalCount: 1,
      data: {
        id: 1,
        client: 'Microsoft',
        localMarket: { value: 'UK', label: 'United Kingdom' },
        status: 'Overdue',
        clientMarket: 'Microsoft United Kingdom',
        name: 'Productivity Q2 2020',
        briefing: 'Lorem Ipsum',
        dueDate: '13/07/2020',
        updatedAt: '29/10/20 at 14:32',
        createdAt: '2020-08-14',
        assignTo: [],
        reportingYear: {
          value: 'April 2020  -  March 2021',
          label: 'April 2020  -  March 2021',
        },
        actualData: { value: 4, label: '4 months' },
        forecastData: { value: 8, label: '8 months' },
        isActive: true,
        isDeleted: false,
        year: '2020',
        quarter: 'Q2',
        totalTenure: '2020 Q2',
      },
      setDataList: jest.fn(),
      setCompleteDataList: jest.fn(),
      setMarket: jest.fn(),
    },
  };
  const prop2 = {
    cmsData: 'data',
    handleModal: jest.fn(),
    handleToggleData: jest.fn(),
    tabIndex: 0,
    isCompleted: false,
    loading: true,
    handleTabIndex: jest.fn(),
    handleDeleteModel: jest.fn(),
    clientCode: 'MC',
    market: {
      value: '',
      label: 'All markets',
    },
    completeDataList: {
      totalCount: 1,
      data: ['data'],
    },
    dataList: {
      totalCount: 1,
      data: {
        id: 1,
        client: 'Microsoft',
        localMarket: { value: 'UK', label: 'United Kingdom' },
        status: 'Overdue',
        clientMarket: 'Microsoft United Kingdom',
        name: 'Productivity Q2 2020',
        briefing: 'Lorem Ipsum',
        dueDate: '13/07/2020',
        updatedAt: '29/10/20 at 14:32',
        createdAt: '2020-08-14',
        assignTo: [],
        reportingYear: {
          value: 'April 2020  -  March 2021',
          label: 'April 2020  -  March 2021',
        },
        actualData: { value: 4, label: '4 months' },
        forecastData: { value: 8, label: '8 months' },
        isActive: false,
        isDeleted: false,
        year: '2020',
        quarter: 'Q2',
        totalTenure: '2020 Q2',
        isCompleted: false,
      },
      setDataList: jest.fn(),
      setCompleteDataList: jest.fn(),
      setMarket: jest.fn(),
    },
  };
  const prop3 = {
    cmsData: 'data',
    handleModal: jest.fn(),
    handleToggleData: jest.fn(),
    tabIndex: 0,
    isCompleted: false,
    loading: false,
    handleTabIndex: jest.fn(),
    handleDeleteModel: jest.fn(),
    clientCode: 'MC',
    market: {
      value: '',
      label: 'All markets',
    },
    completeDataList: {
      totalCount: 0,
      data: [],
    },
    dataList: {
      totalCount: 0,
      data: [],
    },
    setDataList: jest.fn(),
    setCompleteDataList: jest.fn(),
    setMarket: jest.fn(),
  };
  beforeAll(() => {
    wrapper = shallow(<DataList {...props} />);
    wrapper2 = shallow(<DataList {...prop2} />);
    wrapper3 = shallow(<DataList {...prop3} />);
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper2).toMatchSnapshot();
    expect(wrapper3).toMatchSnapshot();
  });
  it('handleModal to be defined', () => {
    const handler = wrapper.find('CreateData').prop('handleModal');
    expect(handler()).not.toBeNull();
  });
  it('handleTabIndex to be defined', () => {
    const handler = wrapper.find('Tabs').prop('onChange');
    expect(handler()).not.toBeNull();
  });
  it('handleDelete to be defined', () => {
    const handler = wrapper.find('TableList').at(0).prop('handleDelete')(1);
    expect(handler).not.toBeNull();
  });
  it('handleDeleteModel to be defined', () => {
    const handler = wrapper.find('TableList').at(0).prop('handleDeleteModel');
    expect(handler()).not.toBeNull();
  });
  it('handleMoveToCompleteModel to be defined', () => {
    const handler = wrapper
      .find('TableList')
      .at(0)
      .prop('handleMoveToCompleteModel');
    expect(handler()).not.toBeNull();
  });
  it('searchChangeHandler to be defined', () => {
    const handler = wrapper.find('TableList').at(1).prop('search');
    expect(handler()).not.toBeNull();
  });
  it('addRequest to be defined', async () => {
    const handler = await wrapper.find('CreateData').prop('addRequest')({
      localMarket: { label: 'test' },
    });
    expect(handler).toBeNull();
  });
  it('handleMoveToOngoing to be defined', () => {
    const handler = wrapper.find('TableList').at(1).prop('handleMoveToOngoing')(
      1,
    );
    expect(handler).not.toBeNull();
  });
  it('handleMoveToCompleteData', () => {
    const handler = wrapper
      .find('TableList')
      .at(0)
      .prop('handleMoveToCompleteData')(1);
    expect(handler).not.toBeNull();
  });
});
