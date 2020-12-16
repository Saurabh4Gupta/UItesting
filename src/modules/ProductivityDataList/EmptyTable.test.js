import React from 'react';
import { shallow } from 'enzyme';
import {  EmptyTable } from './EmptyTable';

describe('<EmptyState />', () => {
  let wrapper;
  const props = {
    defaultText: 'Test',
    handleModal: jest.fn(),
    }
  beforeAll(() => {
    wrapper = shallow(<EmptyTable {...props} />);
  })
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
  it('should call handleDelete', () => {
    wrapper.find('ForwardRef').at(0).prop('actions').secondary.onClick()
    expect(wrapper.props().handleModel).not.toBeNull();
  });
})
