// Modules
import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query';

import { fetch } from 'src/hook';

// Serializers
import { serializeUser } from './user.serializer';

// Types
import { User } from 'src/typings';

// Exports
const fetchProfileFn = async () => {
  const response = await fetch('/profile');
  const serialized = serializeUser(response);
  return serialized;
};

export const UseProfile = (
  options?: UseQueryOptions<User>
): UseQueryResult<User> => {
  return useQuery('profile', fetchProfileFn, options);
};

export default UseProfile;