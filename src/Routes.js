import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Frame } from '@dentsu-ui/components';
import DataField from './modules/ProductivityDataList/DataField';
import ViewClientList from './modules/ClientList/ViewClientList';

const Routes = (props) => (
  <Router {...props}>
    <Frame>
      <Switch>
        <Route exact path="/datafield/:clientCode" component={DataField} />
        <Route exact path="/viewdetails/:id">
          <h1>This is View Details Page </h1>
        </Route>
        <Route path="/" component={ViewClientList} />
      </Switch>
    </Frame>
  </Router>
);
export default Routes;
