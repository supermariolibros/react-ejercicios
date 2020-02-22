import * as React from "react";
import { HashRouter, Switch, Route } from 'react-router-dom';
import { MembersTableComponent, memberDetail } from "./components";
import { switchRoutes } from './core';

export const App: React.FunctionComponent = () => {
  return <HashRouter>
  <Switch>
    <Route exact={true} path={[switchRoutes.root]} component={MembersTableComponent} />
    <Route path={switchRoutes.member} component={memberDetail}/>
  </Switch>
 
</HashRouter>;
};
