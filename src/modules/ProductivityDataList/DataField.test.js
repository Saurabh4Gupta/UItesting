import React from 'react';
import { shallow } from 'enzyme';
import { DataField }  from './DataField';

describe('<EmptyState />', () => {
  let wrapper;
  const props = {
    param: [],
    useLocation: () => ({
        pathname: '/datafield',
        search: '?client_code=MC',
        hash: '',
        key: 't7nwlp',
    }),
  }
  beforeAll(() => {
    wrapper = shallow(<DataField {...props} />);
  })
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
