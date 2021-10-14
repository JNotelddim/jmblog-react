// Modules
import { useAppDispatch } from 'src/hook/redux';
import { hide, show } from 'src/redux/snackbar';
import { OpenSnackbarProps } from 'src/typings';

/**
 * UseSnackbarNotification allows any component to quickly dispatch a 'show' notification
 * action, without having to worry about manually including the app's dispatch function.
 */
const UseSnackbarNotification = () => {
  const dispatch = useAppDispatch();

  // Export Functions
  const openNotification = ({
    message,
    type = 'INFO',
    timeout = 15000,
  }: OpenSnackbarProps) => {
    dispatch(show({ message, type, timeout }));
  };

  const closeNotification = () => {
    dispatch(hide());
  };

  /**
   * If it's desirable, this could also return a list of active notifications,
   * as well as an option for the 'hide' fn to be more targeted, so that the
   * instances could look through the active notifications and close specific ones
   * if they happen to be open :thinking:
   */

  return {
    openNotification,
    closeNotification,
  };
};

export default UseSnackbarNotification;
