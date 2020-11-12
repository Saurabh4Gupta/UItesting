
import React from 'react';
import { shallow } from 'enzyme';
import ClientList from './ClientList';
import { dataFieldCms as PageContent } from '../../cms';


describe('Success test cases for: ViewClientList component', () => {
  let wrapper;

  describe('Snapshot test for  ClientList component', () => {
    beforeEach(() => {
      wrapper = shallow(<ClientList cmsData={PageContent} />);
    });

    it('Test to find List row', () => {
     // expect(wrapper).toMatchSnapshot();
    //  let listComponent = wrapper.find('List');
    //  expect(listComponent.find('List.Row').exists()).toBe(true);

    // expect(description.text()).toEqual(product.description);

    });

    it('Renders correctly', () => {
      expect(wrapper.exists()).toBe(true);
    });
  });
});

describe('Failure test cases for: Duplicate data page', () => { });
