// Modules
import {
  QueryFunctionContext,
  QueryKey,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from 'react-query';

import { fetch } from 'src/hook/api';

// Serializers
import { serializeUser } from './user.serializer';

// Types
import { User } from 'src/typings';

// Exports
const fetchProfileByIdFn = async (context: QueryFunctionContext<QueryKey>) => {
  const id = context.queryKey[1]; // See line 35
  const response = await fetch(`/user/${id}`);

  if (response.status >= 400) {
    throw new Error(response.statusText);
  }

  const serialized = serializeUser(response);
  return serialized;
};

export const UseProfileById = (
  id: string,
  options?: UseQueryOptions<User>
): UseQueryResult<User> => {
  return useQuery(['user', id], fetchProfileByIdFn, options);
};

export default UseProfileById;
