// Hooks
import { useQueryClient } from 'react-query';
import { useAppDispatch } from 'src/hook/redux';

// Actions
import { logout } from 'src/redux';

const UseLogOut = () => {
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  const handleLogOut = () => {
    console.log('handleLogOut');
    navigator.serviceWorker.controller?.postMessage({
      type: 'CLEAR_TOKEN',
    });
    queryClient.invalidateQueries('profile');
    dispatch(logout());
  };

  return { handleLogOut };
};

export default UseLogOut;
