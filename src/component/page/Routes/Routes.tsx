import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

// Pages
import LoginPage from 'src/component/page/LoginPage';
import SignupPage from 'src/component/page/SignupPage';
import ListPage from 'src/component/page/ListPage';
import PostPage from 'src/component/page/PostPage';

// Components
import PrivateRoute from './PrivateRoute';
import UnauthenticatedRoute from './UnauthenticatedRoute';

// Hooks
import { useRehydrateAuthState } from 'src/hook/effect/rehydrateAuthState';

/**
 * Routes is a component which uses react-router to handle routing and navigation for the app.
 */
const Routes = () => {
  // If there's ever an 'AppRoot' component, this would make more sense there.
  useRehydrateAuthState();

  return (
    <BrowserRouter>
      <Switch>
        {/* PUBLIC ROUTES */}
        <UnauthenticatedRoute path="/login">
          <LoginPage />
        </UnauthenticatedRoute>

        <UnauthenticatedRoute path="/signup">
          <SignupPage />
        </UnauthenticatedRoute>

        <Route path={['/', '/list']} exact>
          <ListPage />
        </Route>

        <Route path="/post/:id" exact>
          <PostPage />
        </Route>

        <PrivateRoute path="/post/:id/edit">
          <PostPage />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
