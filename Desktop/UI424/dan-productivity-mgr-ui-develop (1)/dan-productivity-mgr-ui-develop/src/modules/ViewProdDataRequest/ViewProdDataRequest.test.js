import React from 'react';
import { shallow } from 'enzyme';
import ViewProdDataRequest from './ViewProdDataRequest';

describe('Success test cases for: ViewProdDataRequest component', () => {
  let wrapper;
  const props = {
    param: { clientCode:'MC' },
    handleMoveToCompleteModal: jest.fn(),
    handleEditData: jest.fn(),
    useHistory: jest.fn(),
    handleUploadModal: jest.fn(),
    clientCode:'MC',
  }
  jest.mock('react-router-dom', () => ({
    useLocation: jest.fn().mockReturnValue({
      pathname: '/datafield',
      search: '',
    }),
}));
  describe('Snapshot test for  ViewProdDataRequest component', () => {
    beforeAll(() => {
      wrapper = shallow(<ViewProdDataRequest {...props} isViewProduct />);
    });

    it('Test to match the snapsot', () => {
      expect(wrapper).toMatchSnapshot();
     });
  });
});

 describe('Failure test cases for: Duplicate data page', () => { });
