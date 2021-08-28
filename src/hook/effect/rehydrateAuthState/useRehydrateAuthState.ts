// Modules
import { useEffect } from 'react';

// Hooks
import { useProfile } from 'src/hook/api/user';
import { useAppDispatch, useAppSelector } from 'src/hook/redux';

// State Selectors
import { selectIsAuthenticated, setProfile } from 'src/redux';
import { useState } from 'react';

/**
 * useRehydrateAuthState is a hook for restoring auth state after a browser refresh.
 *
 * This client code's auth state is tracked in redux, but a browser refresh clears that out.
 * There are libraries that can be used to persist redux state, but I don't really feel the
 * need for anything so major.
 * Instead, I figured since the auth token which is kept by the ServiceWorker doesn't clear
 * with a refresh, as the app loads, it could send a quick request to the `/profile` endpoint
 * which, if it succeeds, we know that there is an auth token around, and so technically there's
 * an active user session. So in that case, it makes sense to update the redux state to
 * represent that the client IS authenticated.
 */
const UseRehydrateAuthState = () => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const dispatch = useAppDispatch();
  const [checkQueryEnabled, setCheckQueryEnabled] = useState(true);
  const { data: profile } = useProfile({
    enabled: checkQueryEnabled,
    onSettled: () => {
      setCheckQueryEnabled(false);
    },
  });

  // is there somewhere better that this could live? :thinking:
  useEffect(() => {
    if (!isAuthenticated && profile !== undefined) {
      dispatch(setProfile(profile));
    }
  }, [isAuthenticated, dispatch, profile]);
};

export default UseRehydrateAuthState;
