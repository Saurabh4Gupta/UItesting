import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { Frame } from '@dentsu-ui/components';
import DataField from './modules/ProductivityDataList/DataField';
import ViewClientList from './modules/ClientList/ViewClientList';
import ViewProdDataRequest from './modules/ViewProdDataRequest/ViewProdDataRequest';

const Routes = (props) => (
  <Router {...props}>
    <Frame>
      <Switch>
        <Route exact path="/datafield/:clientCode" component={DataField} />
        <Route path="/viewDetails/:id" component={ViewProdDataRequest} />
        <Route path="/" component={ViewClientList} />
        <Redirect to="/" />
      </Switch>
    </Frame>
  </Router>
);
export default Routes;
