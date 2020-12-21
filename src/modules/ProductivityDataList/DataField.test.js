import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'
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
    wrapper = shallow(
      <MemoryRouter>
        <DataField {...props} />
      </MemoryRouter>,
    ).dive().dive().dive();
  })
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
