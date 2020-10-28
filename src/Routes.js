import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import DataField from './modules/ProductivityDataList/DataField';
import { Frame } from '@dentsu-ui/components';

const Routes = (props) => {
  return <Router {...props}>
    <Frame>
      <Switch>
        <Route exact path="/datafield">
          <DataField />
        </Route>
        <Route exact path="/viewdetails/:id">
          <h1>This is View Details Page </h1>
        </Route>
        <Redirect to="/datafield" />
      </Switch>
    </Frame>
  </Router>
}
export default Routes;
