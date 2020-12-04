
import React from 'react';
import { shallow } from 'enzyme';
import CreateData from './CreateData';
import { dataFieldCms as PageContent } from '../../cms';

describe('Success test cases for: Loader component', () => {
let wrapper;
const props = {
  isReadyToSubmit: true,
cmsData: {},
market: 'UK',
isModalOpen: false,
handleModal: () => { },
setDataCreated: () => false,
handleChange: () => {},
}

describe('Snapshot test for Loader component', () => {
beforeEach(() => {
wrapper = shallow(<CreateData {...props} cmsData={PageContent} />);
});
it('Test to match the snapsot', () => {
expect(wrapper).toMatchSnapshot();
});

it('Test click event', () => {
wrapper.find({ children: PageContent.createNewDataRequest }).simulate('click');
});
it('Test click event', () => {
wrapper.find({ children: PageContent.cancel }).simulate('click');
});
it('Test click event', () => {
wrapper.find({ children: PageContent.create }).simulate('click');
});
it('find locak market field', () => {
  wrapper.find('label.localMarket').find('select');
});
it('Renders correctly', () => {
expect(wrapper.exists()).toBe(true);
});
});
});

describe('Failure test cases for: Duplicate data page', () => { })
