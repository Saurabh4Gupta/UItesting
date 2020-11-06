import React from 'react';
import ClientList from './ClientList';
import { dataFieldCms as PageContent } from '../../cms';

const ViewClientList = () => <ClientList cmsData={PageContent} />;

export default ViewClientList;
