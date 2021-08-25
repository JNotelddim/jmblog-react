import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { useAppSelector } from 'src/hook';
import { selectIsAuthenticated } from 'src/redux';

const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  console.log('Private route, isAuthenticated', isAuthenticated);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
