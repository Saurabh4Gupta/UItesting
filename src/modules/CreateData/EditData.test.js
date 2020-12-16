import React from 'react';
import { shallow } from 'enzyme';
import EditData from './EditData';
import { dataFieldCms as PageContent } from '../../cms';

describe('Success test cases for: Loader component', () => {
let wrapper;
const props = {
cmsData: {},
isModalOpen: false,
handleModal: () => { },
}

describe('Snapshot test for Loader component', () => {
beforeEach(() => {
wrapper = shallow(<EditData {...props} cmsData={PageContent} />);
});

it('Test to match the snapsot', () => {
expect(wrapper).toMatchSnapshot();
});

// it('checking cancel content', () => {
// wrapper.find({ children: PageContent.cancel }).simulate('click');
// });
// it('Test click event', () => {
// wrapper.find({ children: PageContent.cancel }).simulate('click');
// });
// it('Test click event', () => {
// wrapper.find({ children: PageContent.save }).simulate('click');
// });

// it('button function test', () => {
// const fn = wrapper.find('.dentsu-button').at(1).prop('onClick');
// expect(fn).toBeInstanceOf(Function);
// fn();
// });

it('Renders correctly', () => {
expect(wrapper.exists()).toBe(true);
});
});
});
describe('Failure test cases for: Duplicate data page', () => { });
