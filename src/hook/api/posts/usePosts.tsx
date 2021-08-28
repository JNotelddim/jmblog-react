// Modules
import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query';

import { fetch } from 'src/hook/api';

// Serializers
import { serializePostsResponse } from './post.serializer';

// Types
import { SummarizedPost } from 'src/typings';

// Exports
const fetchPostsFn = async () => {
  const response = await fetch('/posts');
  const serialized = serializePostsResponse(response);
  return serialized;
};

export const UsePosts = (
  options?: UseQueryOptions<SummarizedPost[]>
): UseQueryResult<SummarizedPost[]> => {
  return useQuery('posts', fetchPostsFn, options);
};

export default UsePosts;
