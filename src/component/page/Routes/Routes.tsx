import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import AuthPage from 'src/component/page/AuthPage';
import ListPage from 'src/component/page/ListPage';

/**
 * Routes is a component which uses react-router to handle routing and navigation for the app.
 */
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* PUBLIC ROUTES */}
        <Route path="/public">
          <Route path="/login">
            <AuthPage pageType="LOGIN" />
          </Route>

          <Route path="/signup">
            <AuthPage pageType="SIGNUP" />
          </Route>

          {/* TODO: find a way to make these routes private w/o breaking service worker access*/}
          <Route path={['', '/list']} exact>
            <ListPage />
          </Route>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
