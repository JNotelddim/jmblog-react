import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAppSelector } from 'src/hook';
import { selectIsAuthenticated } from 'src/redux';

const PrivateRoute: React.FC = ({ children, ...rest }) => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

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
