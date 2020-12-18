import React from 'react';
import { shallow } from 'enzyme';
import ShowMoreBriefing from './ShowMoreBriefing';

describe('Test cases for tracker template', () => {
  let wrapper;
  const props = {
    clicked: true,
  }

  beforeAll(() => {
    wrapper = shallow(<ShowMoreBriefing {...props} />);
  });
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
});
