import React from 'react';
import { shallow } from 'enzyme';
import EditData from './EditData';
import { dataFieldCms as PageContent } from '../../cms';

describe('Success test cases for: Loader component', () => {
    let wrapper;
    const props = {
        cmsData: {},
        market: { value: 'UK', label: 'United Kingdom' },
        isModalOpen: false,
        addRequest: jest.fn(),
        handleModal: jest.fn(),
        setDataCreated: jest.fn(false),
        handleChange: jest.fn(),
        setLoading: jest.fn(),
        closeModalHandler: jest.fn(),
        onSubmit: jest.fn(),
        requestId: '1',
    }
    const localMarket = { value: 'UK', label: 'United Kingdom' }
    const initialValues = {
        localMarket,
    };

    describe('Snapshot test for Loader component', () => {
        beforeAll(() => {
            wrapper = shallow(<EditData.WrappedComponent {...props} cmsData={PageContent} initialValues={initialValues} />);
        });

        it('Test to match the snapsot', () => {
            expect(wrapper).toMatchSnapshot();
        });
    });
});
describe('Failure test cases for: Duplicate data page', () => { });
