// Modules
import React, { FC } from 'react';

// // Styles
import Snackbar from 'src/component/base/Snackbar';

// Typings
import { selectTopSnackbar } from 'src/redux/snackbar';
import { useAppSelector } from 'src/hook/redux';
import { useSnackbarNotification } from 'src/hook/effect';

/**
 * SnackbarProvider hosts the global snackbar notifications for the application.
 */
const SnackbarProvider: FC = ({ children }) => {
  const { closeNotification } = useSnackbarNotification();
  const activeSnackbar = useAppSelector(selectTopSnackbar);
  const { message, type, timeout } = activeSnackbar || {};

  // Handlers
  const handleClose = () => {
    closeNotification();
  };

  return activeSnackbar ? (
    <>
      <Snackbar
        message={message}
        type={type || 'INFO'}
        onClose={handleClose}
        autoHideDuration={timeout}
      />
      {children}
    </>
  ) : (
    <>{children}</>
  );
};

export default SnackbarProvider;
