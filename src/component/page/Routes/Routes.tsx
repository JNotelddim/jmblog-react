import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import LoginPage from 'src/component/page/LoginPage';
import SignupPage from 'src/component/page/SignupPage';
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
          <LoginPage />
        </Route>

        <Route path="/signup">
          <SignupPage />
        </Route>

        <PrivateRoute path={['/', 'list']} exact>
          <ListPage />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
