import React from 'react';
import { shallow } from 'enzyme';
import  DataField from './DataField';

describe('<EmptyState />', () => {
  let wrapper;
  const props = {
    match: {
      path: './url',
      params:{
        clientCode: 'MC',
      },

    },
  }
  beforeAll(() => {
    wrapper = shallow(<DataField {...props} />);
  })
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
  it('handleTabIndex to be defined', () => {
    const handler = wrapper.find('DataList').prop('handleTabIndex');
    expect(handler()).not.toBeNull();
  })
  it('handleModal to be defined', () => {
    const handler = wrapper.find('CreateData').prop('handleModal');
    expect(handler()).not.toBeNull();
  })
  it('handleDeleteModel to be defined', () => {
    const handler = wrapper.find('DataList').prop('handleDeleteModel');
    expect(handler()).not.toBeNull();
  })
  it('deleteRequest to be defined', () => {
    const handler = wrapper.find('DeleteData').prop('deleteRequest');
    expect(handler()).not.toBeNull();
  })
  it('handleToggleData to be defined', () => {
    const handler = wrapper.find('DataList').prop('handleToggleData');
    expect(handler()).not.toBeNull();
  })
})
