// Modules
import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query';

import { fetch } from 'src/hook/api';

// Serializers
import { serializePosts } from './post.serializer';

// Types
import { Post } from 'src/typings';

// Exports
const fetchPostsFn = async () => {
  const response = await fetch('/posts');
  const serialized = serializePosts(response);
  return serialized;
};

export const UsePosts = (
  options?: UseQueryOptions<Post[]>
): UseQueryResult<Post[]> => {
  return useQuery('posts', fetchPostsFn, options);
};

export default UsePosts;
