// Modules
import React, { FC } from 'react';

// // Styles
import Snackbar from 'src/component/base/Snackbar';

// Typings
import { selectTopSnackbar } from 'src/redux/snackbar';
import { useAppSelector } from 'src/hook/redux';

/**
 * SnackbarProvider ...
 */
const SnackbarProvider: FC = ({ children }) => {
  const activeSnackbar = useAppSelector(selectTopSnackbar);
  const { message, type } = activeSnackbar || {};
  // TODO: handle timeouts
  // TODO: handle dismissing, stacking

  return activeSnackbar ? (
    <>
      <Snackbar message={message} type={type || 'INFO'} />
      {children}
    </>
  ) : (
    <>{children}</>
  );
};

export default SnackbarProvider;
