// Modules
import React, { FC } from 'react';

// Components
import { Snackbar as MuiSnackbar } from '@material-ui/core';
import Alert from 'src/component/base/Alert';
import Text from 'src/component/base/Text';

// Typings
import { SnackbarProps } from './Snackbar.type';

/**
 * Snackbar ...
 */
const Snackbar: FC<SnackbarProps & { onClose: () => void }> = ({
  message,
  action,
  type,
  onClose,
  ...props
}) => {
  console.log({ props });
  return (
    <MuiSnackbar
      open={true}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      onClose={onClose}
      {...props}
    >
      <Alert type={type} onClose={onClose}>
        <Text>{message}</Text>
      </Alert>
    </MuiSnackbar>
  );
};

export default Snackbar;
