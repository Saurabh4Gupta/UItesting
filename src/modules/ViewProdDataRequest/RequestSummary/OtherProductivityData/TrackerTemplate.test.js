import React from 'react';
import { shallow } from 'enzyme';
import TrackerTemplate from './TrackerTemplate';

describe('Test cases for tracker template', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<TrackerTemplate />);
  });
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
});
