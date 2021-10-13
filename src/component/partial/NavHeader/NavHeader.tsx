// Modules
import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

// Components
import { Button, Menu, MenuItem } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import Text from 'src/component/base/Text';

// Styled Components
import { Container, IconButton } from './NavHeader.style';

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
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const history = useHistory();
  const { handleLogOut } = useLogOut();

  const isOnLoginPage = history.location.pathname === '/login';

  // Handlers
  const handleLogin = () => {
    history.push('/login');
  };

  const handleLogoutClick = () => {
    handleClose();
    handleLogOut();
  };

  const handleToAccount = () => {
    history.push('/account');
  };

  const handleOpenMenu: React.MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Render
  return (
    <Container>
      <Link to="/">
        <Text>JM Blog</Text>
      </Link>

      {!isAuthenticated && !isOnLoginPage && (
        <Button onClick={handleLogin}>Log in</Button>
      )}

      {isAuthenticated && (
        <IconButton onClick={handleOpenMenu}>
          <MenuIcon />
        </IconButton>
      )}
      <Menu
        id="authed-user-nav-menu"
        aria-labelledby="authed-user-nav-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        getContentAnchorEl={undefined}
      >
        <MenuItem onClick={handleToAccount}> Account </MenuItem>
        <MenuItem onClick={handleLogoutClick}>Log out</MenuItem>
      </Menu>
    </Container>
  );
};

export default NavHeader;
