import React from 'react';
import { shallow } from 'enzyme';
import Briefing from './Briefing';
import { dataFieldCms as PageContent } from '../../../../cms';


describe('Test cases for Briefing', () => {
  let wrapper;
  const props1 = {
    clicked: jest.fn(),
    briefing: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industrys standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only
      five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s with
      the release of Letraset sheets containing Lorem Ipsum passages, and
      more recently with desktop publishing software like Aldus PageMaker
      including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
      the printing industry.Lorem Ipsum is simply dummy text of the printing
      and typesetting industry. Lorem Ipsum has been the industrys standard
      dummy text ever since the 1500s and it still is.
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industrys standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only
      five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s with
      the release of Letraset sheets containing Lorem Ipsum passages, and
      more recently with desktop publishing software like Aldus PageMaker
      including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
      the printing industry.Lorem Ipsum is simply dummy text of the printing
      and typesetting industry. Lorem Ipsum has been the industrys standard
      dummy text ever since the 1500s and it still is.
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industrys standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only
      five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s with
      the release of Letraset sheets containing Lorem Ipsum passages, and
      more recently with desktop publishing software like Aldus PageMaker
      including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
      the printing industry.Lorem Ipsum is simply dummy text of the printing
      and typesetting industry. Lorem Ipsum has been the industrys standard
      dummy text ever since the 1500s and it still is.`,
  }

  const props2 = {
    clicked: jest.fn(),
    briefing: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industrys standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only
      five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s with
      the release of Letraset sheets containing Lorem Ipsum passages, and
      more recen`,
  }


  it('should match the snapshot', () => {
    wrapper = shallow(<Briefing {...props1} />);
    expect(wrapper).not.toBeNull();
  })

  it('should match the snapshot', () => {
    wrapper = shallow(<Briefing {...props2} />);
    expect(wrapper).not.toBeNull()
  })

  it('should test show more click event', () => {
    wrapper = shallow(<Briefing {...props1} />);
    wrapper.find({ children: PageContent.showMore }).simulate('click');
  });
});
