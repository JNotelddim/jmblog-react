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
import { serializePostResponse } from './post.serializer';

// Types
import { Post } from 'src/typings';

// Exports
const fetchPostFn = async (context: QueryFunctionContext<QueryKey>) => {
  const id = context.queryKey[1]; // See line 24
  const response = await fetch(`/posts/${id}`);
  const serialized = serializePostResponse(response);
  return serialized;
};

export const UsePost = (
  id: string,
  options?: UseQueryOptions<Post>
): UseQueryResult<Post> => {
  return useQuery(['post', id], fetchPostFn, options);
};

export default UsePost;
