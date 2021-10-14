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
  const { message, type } = activeSnackbar || {};
  // TODO: handle timeouts
  // TODO: handle dismissing, stacking

  // Handlers
  const handleClose = () => {
    dispatch(hide());
  };

  return activeSnackbar ? (
    <>
      <Snackbar message={message} type={type || 'INFO'} onClose={handleClose} />
      {children}
    </>
  ) : (
    <>{children}</>
  );
};

export default SnackbarProvider;
