import React from 'react';
import { shallow } from 'enzyme';
import ShowMoreBriefing from './ShowMoreBriefing';
import { dataFieldCms as PageContent } from '../../../../cms';


describe('Test cases for tracker template', () => {
  let wrapper;
  const props = {
    clicked: jest.fn(),
  }

  beforeAll(() => {
    wrapper = shallow(<ShowMoreBriefing {...props} />);
  });
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should test the close modal event', () => {
    wrapper.find({ children: PageContent.close }).simulate('click');
  });
});
