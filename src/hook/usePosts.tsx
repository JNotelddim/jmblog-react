import { QueryOptions, useQuery, UseQueryResult } from 'react-query';

import fetch from './apiFetch';
import { Post } from '../typings';

// TODO move serializers to top-level file
const serializePost = (item: Record<string, unknown>) => ({
  id: item._id as string,
  title: item.title as string,
  content: item.content as string,
  author: item.author as string,
  createdAt: item.createdAt as string, // Date
  modifiedAt: item.modifiedAt as string, // Date
  comments: item.comments as string[], // Id array
});

const serializePosts = async (response: Response): Promise<Post[]> => {
  const payload = (await response.json()) as unknown;
  return (payload as Record<string, unknown>[]).map(serializePost);
};

const fetchPostsFn = async () => {
  const response = await fetch('/posts');
  const serialized = serializePosts(response);
  return serialized;
};

export const UsePosts = (options?: QueryOptions): UseQueryResult<Post[]> => {
  return useQuery('posts', fetchPostsFn, options);
};

export default UsePosts;
