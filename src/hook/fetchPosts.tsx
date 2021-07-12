import { QueryOptions, useQuery } from 'react-query';

const fetchPostsFn = async () => {
  const result = await fetch('/posts');
  console.log({ result });

  return result.body;
};

export const UsePosts = (options: QueryOptions) => {
  return useQuery('posts', fetchPostsFn, options);
};
