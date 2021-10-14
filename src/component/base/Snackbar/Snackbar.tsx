// Modules
import React, { FC } from 'react';

// Components
import { Snackbar as MuiSnackbar } from '@material-ui/core';
import Text from 'src/component/base/Text';

// Styles
import { Alert } from './Snackbar.style';

// Typings
import { SnackbarProps } from './Snackbar.type';

/**
 * Snackbar ...
 */
const Snackbar: FC<SnackbarProps> = ({ message, action, type, ...props }) => {
  return (
    <MuiSnackbar
      open={true}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      {/* TODO: add 'action' handling (particularly for hiding the snackbar) */}
      <Alert type={type}>
        <Text>{message}</Text>
      </Alert>
    </MuiSnackbar>
  );
};

export default Snackbar;
