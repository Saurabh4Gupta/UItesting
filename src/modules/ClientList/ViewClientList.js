import React from 'react';
import ClientList from './ClientList';
import { dataFieldCms as PageContent } from '../../cms';

const ViewClientList = (props) => <ClientList cmsData={PageContent} {...props} />;

export default ViewClientList;
