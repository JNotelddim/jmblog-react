import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import AuthPage from 'src/component/page/AuthPage';
import ListPage from 'src/component/page/ListPage';
import PrivateRoute from './PrivateRoute';

/**
 * Routes is a component which uses react-router to handle routing and navigation for the app.
 */
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* PUBLIC ROUTES */}
        <Route path="/login">
          <AuthPage pageType="LOGIN" />
        </Route>

        <Route path="/signup">
          <AuthPage pageType="SIGNUP" />
        </Route>

        <PrivateRoute path={['/', 'list']}>
          <ListPage />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
