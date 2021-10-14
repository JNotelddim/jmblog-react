// Modules
import React, { FC } from 'react';

// // Styles
import Snackbar from 'src/component/base/Snackbar';

// Typings
import { hide, selectTopSnackbar } from 'src/redux/snackbar';
import { useAppDispatch, useAppSelector } from 'src/hook/redux';

/**
 * SnackbarProvider ...
 */
const SnackbarProvider: FC = ({ children }) => {
  const activeSnackbar = useAppSelector(selectTopSnackbar);
  const dispatch = useAppDispatch();
  const { message, type, timeout } = activeSnackbar || {};

  // Handlers
  const handleClose = () => {
    console.log('handleClose');
    dispatch(hide());
  };

  console.log({ type, timeout });

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
