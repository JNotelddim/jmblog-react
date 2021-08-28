// Hooks
import { useQueryClient } from 'react-query';
import { useAppDispatch } from 'src/hook/redux';

// Actions
import { logout } from 'src/redux';

const UseLogOut = () => {
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  const handleLogOut = () => {
    // Remove token from ServiceWorker (ie, auth header will no longer be sent with reqs to api)
    navigator.serviceWorker.controller?.postMessage({
      type: 'CLEAR_TOKEN',
    });
    // Clear RQ cache -- to ensure data for the previously auth'd user doesn't stick around
    queryClient.getQueryCache().clear();
    // Update app auth state
    dispatch(logout());
  };

  return { handleLogOut };
};

export default UseLogOut;
