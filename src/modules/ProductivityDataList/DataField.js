import React from 'react';
import CreateData from '../CreateData/CreateData';
import Overview from '../Overview/Overview';
import PageController from '../PageController/PageController';
import DataList from './DataList';


const DataField = (props) => {
  return <>
    <PageController />
    <Overview />
    <CreateData />
    <DataList />

  </>
}

export default DataField;
