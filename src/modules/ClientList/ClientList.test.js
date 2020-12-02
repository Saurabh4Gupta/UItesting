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
      //  const listComponent = wrapper.find('List').props()
      //  .renderItem({item:  { title: 'American Express', avatar: '', clientCode: 'AE' }});
      console.log(wrapper.debug());
      wrapper.showClientDetails('AB');
      // setProps
      // listComponent.setProps({ items: clientList });

      //  const key = wrapper
      //          .find('List')
      //          .props()
      //          .renderItem({id: 3});

      // expect(listComponent.children().length)
      // console.log('children', listComponent)
      // console.log('children', listComponent.dive())

      // wrapper.find('List').simulate('click')

      // expect(description.text()).toEqual(product.description);
    });

    it('Renders correctly', () => {
      expect(wrapper.exists()).toBe(true);
    });
  });
});

describe('Failure test cases for: Duplicate data page', () => {});
