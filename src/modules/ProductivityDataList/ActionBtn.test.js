import React from 'react';
import { shallow } from 'enzyme';
import  ActionBtn from './ActionBtn';

describe('<EmptyState />', () => {
  let wrapper;
  const props = {
    handleToggleData: jest.fn(),
    actionName:'test1',
    deleteBtn:'test2',
    showStatus:true,
    objId: 123,
    handleDeleteModel: jest.fn(),
  }
  beforeAll(() => {
    wrapper = shallow(<ActionBtn {...props} />);
  })
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
  it('should render the else part', () => {
    wrapper.find('MenuItem').at(1).props().onClick();
    expect(wrapper.props().handleDeleteModel.calls.length).toBe(1);
  })
})
