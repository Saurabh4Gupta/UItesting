import React from 'react';
import { shallow } from 'enzyme';
import  DataList from './DataList';

describe('<EmptyState />', () => {
  let wrapper;
  let wrapper2;
  let wrapper3;

  const props1 = {
    cmsData: 'data',
    market:{
      label: 'All Market',
      value: '',
    },
    clientCode:'MC',
    dataList:{
      totalCount: 3,
      data:['testData1', 'testData2', 'testData3'],
    },
    setDataList:jest.fn(),
    loading:false,
    updateOngoingList:jest.fn(),
    originalOngingList:{
      totalCount:4,
      data:['testData1', 'testData2', 'testData3', 'testData4'],
    },
    setOriginalOngoingList:jest.fn(),
  }
  const props2 = {
    cmsData: 'data',
    market:{
      label: 'All Market',
      value: '',
    },
    clientCode:'MC',
    dataList:{
      totalCount: 0,
      data:[''],
    },
    setDataList:jest.fn(),
    loading:false,
    updateOngoingList:jest.fn(),
    originalOngingList:{
      totalCount:4,
      data:[],
    },
    setOriginalOngoingList:jest.fn(),
  }
  const props3 = {
    cmsData: 'data',
    market:{
      label: 'All Market',
      value: '',
    },
    clientCode:'MC',
    dataList:{
      totalCount: 0,
      data:[''],
    },
    setDataList:jest.fn(),
    loading:true,
    updateOngoingList:jest.fn(),
    originalOngingList:{
      totalCount:4,
      data:['data1', 'data2', 'data3'],
    },
    originalCompleteData:{
      completedData:['data1', 'data2', 'data3'],
    },
    setOriginalOngoingList:jest.fn(),
  }
  beforeAll(() => {
    wrapper = shallow(<DataList {...props1} />);
    wrapper2 = shallow(<DataList {...props2} />)
    wrapper3 = shallow(<DataList {...props3} />)
  })
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper2).toMatchSnapshot();
    expect(wrapper3).toMatchSnapshot();
  })

  it('handleTabIndex to be defined', () => {
    const handler = wrapper.find('Tabs').at(0).prop('onChange');
    expect(handler()).not.toBeNull();
  })
  it('handleDeleteModel to be defined', () => {
    const handler = wrapper.find('TableList').prop('handleDeleteModel');
    expect(handler()).not.toBeNull();
  })
  it('deleteRequest to be defined', () => {
    const handler = wrapper.find('TableList').prop('deleteRequest');
    expect(handler()).not.toBeNull();
  })
  it('handleToggleData to be defined', () => {
    const handler = wrapper.find('TableList').prop('handleToggleData');
    expect(handler()).not.toBeNull();
  })
  it('searchChangeHandler to be defined', () => {
    const handler = wrapper.find('TableList').at(0).props('search');
    expect(handler).not.toBeNull();
  })
})
