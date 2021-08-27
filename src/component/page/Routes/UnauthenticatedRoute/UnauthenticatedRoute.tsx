import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { useAppSelector } from 'src/hook/redux';
import { selectIsAuthenticated } from 'src/redux';

/**
 * UnauthenticatedRoute is used for routes which should only be accessible to users
 * who are not logged in. For example, /login, or /signup
 */
const UnauthenticatedRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        ) : (
          children
        )
      }
    />
  );
};

export default UnauthenticatedRoute;
