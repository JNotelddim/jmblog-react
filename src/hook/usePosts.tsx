import { QueryOptions, useQuery, UseQueryResult } from 'react-query';
import { PostList } from '../typings';

const fetchPostsFn = async () => {
  const url = process.env.REACT_APP_API_URL || '';

  const headers = new Headers();
  headers.append('Authorization', `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`);
  headers.append('Access-Control-Allow-Origin', `*`);

  const result = await fetch(url + '/posts', {
    method: 'GET',
    headers,
  });
  return await result.json();
};

export const UsePosts = (options?: QueryOptions): UseQueryResult<PostList> => {
  return useQuery('posts', fetchPostsFn, options);
};

export default UsePosts;
