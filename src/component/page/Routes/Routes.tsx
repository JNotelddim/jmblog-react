import React, { useEffect } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

// Pages
import LoginPage from 'src/component/page/LoginPage';
import SignupPage from 'src/component/page/SignupPage';
import ListPage from 'src/component/page/ListPage';

// Components
import PrivateRoute from './PrivateRoute';
import UnauthenticatedRoute from './UnauthenticatedRoute';

// Hooks
import { useProfile } from 'src/hook/user';
import { useAppDispatch, useAppSelector } from 'src/hook/redux';

// State Selectors
import { selectIsAuthenticated, setProfile } from 'src/redux';

/**
 * Routes is a component which uses react-router to handle routing and navigation for the app.
 */
const Routes = () => {
  // TODO: when app loads, request profile to determine if SW has a token or not?

  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const dispatch = useAppDispatch();
  const { data: profile } = useProfile();

  // is there somewhere better that this could live? :thinking:
  useEffect(() => {
    if (!isAuthenticated && profile !== undefined) {
      dispatch(setProfile(profile));
    }
  }, [isAuthenticated, dispatch, profile]);

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

        <PrivateRoute path={['/', 'list']} exact>
          <ListPage />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
