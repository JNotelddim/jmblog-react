import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// import { useAuth } from 'src/hook/auth';

const PrivateRoute: React.FC = ({ children, ...rest }) => {
  // const auth = useAuth();
  // TODO: create hook for getting auth state
  const auth = { user: null };

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
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
