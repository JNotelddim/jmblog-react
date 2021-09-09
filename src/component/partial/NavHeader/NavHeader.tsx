// Modules
import React from 'react';
import { useHistory, Link } from 'react-router-dom';

// Components
import { Button } from '@material-ui/core';
import Text from 'src/component/base/Text';

// Styled Components
import { Container } from './NavHeader.style';

// Hooks
import { useAppSelector } from 'src/hook/redux';
import { useLogOut } from 'src/hook/api/auth';

// Selectors + Actions
import { selectIsAuthenticated } from 'src/redux/user';

/**
 * NavHeader is the header bar which appears on all pages whether the user is
 * authenticated or not. Though its contents vary depending on auth state.
 */
const NavHeader = () => {
  // Hooks
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const history = useHistory();
  const { handleLogOut } = useLogOut();

  const isOnLoginPage = history.location.pathname === '/login';

  // Handlers
  const handleLogin = () => {
    history.push('/login');
  };

  // Render
  return (
    <Container>
      <Link to="/">
        <Text>JM Blog</Text>
      </Link>
      {isAuthenticated && <Button onClick={handleLogOut}>Log out</Button>}
      {!isAuthenticated && !isOnLoginPage && (
        <Button onClick={handleLogin}>Log in</Button>
      )}
    </Container>
  );
};

export default NavHeader;
