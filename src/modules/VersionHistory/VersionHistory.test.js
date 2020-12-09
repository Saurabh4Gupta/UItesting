import React from 'react';
import { shallow } from 'enzyme';
import VersionHistory from './VersionHistory';

describe('test cases for Table list', () => {
  let wrapper;
  const list = {
    id: 1,
    name: 'Microsoft Uk - Productivity Report - ',
    type: 'XLS',
    size: '242KB',
    version: 'Template',
    dataRequest: '',
    blobId: '',
    createdAt: '2020-12-01',
  };
  beforeAll(() => {
    wrapper = shallow(<VersionHistory />);
  });
  it('should match snapshot', () => {
    wrapper.find('List').props().renderItem(list);
    expect(wrapper).toMatchSnapshot();
  });
  it('Test loadmore click event', () => {
    wrapper.find({ children: 'Load more' }).simulate('click');
  });
});
