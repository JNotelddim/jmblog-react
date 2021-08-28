// Modules
import React from 'react';

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
import { Link } from 'react-router-dom';

/**
 * NavHeader is the header bar which appears on all pages whether the user is
 * authenticated or not. Though its contents vary depending on auth state.
 */
const NavHeader = () => {
  // Hooks
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const { handleLogOut } = useLogOut();

  // Render
  return (
    <Container>
      <Link to="/">
        <Text>JM Blog</Text>
      </Link>
      {isAuthenticated && <Button onClick={handleLogOut}>Log out</Button>}
    </Container>
  );
};

export default NavHeader;
