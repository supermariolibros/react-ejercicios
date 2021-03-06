import * as React from "react";
import { HashRouter, Switch, Route } from 'react-router-dom';
import { MemberDetailContainer } from "./components";
import { MemberListPageContainer } from "./pages";
import { switchRoutes } from './core';

export const App: React.FunctionComponent = () => {
  return <HashRouter>
  <Switch>
    <Route exact={true} path={[switchRoutes.root]} component={MemberListPageContainer} />
    <Route path={switchRoutes.member} component={MemberDetailContainer}/>
  </Switch>
 
</HashRouter>;
};
