// Modules
import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query';

import { fetch } from 'src/hook/api';

// Serializers
import { serializeUser } from './user.serializer';

// Types
import { User } from 'src/typings';

// Exports
const fetchProfileFn = async () => {
  const response = await fetch('/profile');

  if (response.status >= 400) {
    // TODO: figure out a system for catching errors so they don't clog up the console.
    throw new Error(response.statusText);
  }

  const serialized = serializeUser(response);
  return serialized;
};

export const UseProfile = (
  options?: UseQueryOptions<User | undefined>
): UseQueryResult<User | undefined> => {
  return useQuery('profile', fetchProfileFn, options);
};

export default UseProfile;
