// Modules
import React, { FC } from 'react';

// // Styles
import Snackbar from 'src/component/base/Snackbar';

// Typings
import { hide, selectTopSnackbar } from 'src/redux/snackbar';
import { useAppDispatch, useAppSelector } from 'src/hook/redux';

/**
 * SnackbarProvider hosts the global snackbar notifications for the application.
 */
const SnackbarProvider: FC = ({ children }) => {
  const activeSnackbar = useAppSelector(selectTopSnackbar);
  const dispatch = useAppDispatch();
  const { message, type, timeout } = activeSnackbar || {};

  // Handlers
  const handleClose = () => {
    dispatch(hide());
  };

  return activeSnackbar ? (
    <>
      <Snackbar
        message={message}
        type={type || 'INFO'}
        onClose={handleClose}
        autoHideDuration={timeout || 15000}
      />
      {children}
    </>
  ) : (
    <>{children}</>
  );
};

export default SnackbarProvider;
