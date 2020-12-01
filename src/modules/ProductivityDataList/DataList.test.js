import React from 'react';
import { shallow } from 'enzyme';
import  DataList from './DataList';

describe('<EmptyState />', () => {
  let wrapper;
  const props = {
    cmsData: 'data',
    handleModal: jest.fn(),
    ongoingDataList:{
      totalCount: 3,
      data:['testData1', 'testData2', 'testData3'],
    },
    completeDataList: {
      completedCount:0,
      completedData: ['data1', 'data2'],
    },
    handleToggleData:jest.fn(),
    tabIndex:1,
    handleTabIndex:jest.fn(),
    handleDeleteModel:jest.fn(),
    clientCode:'MC',
  }
  beforeAll(() => {
    wrapper = shallow(<DataList {...props} />);
  })
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
