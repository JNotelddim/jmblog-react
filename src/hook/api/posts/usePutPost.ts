import { useMutation, UseMutationOptions } from 'react-query';

import { fetch } from 'src/hook/api';

import { Post, PostFormData } from 'src/typings';
import { serializePostResponse } from './post.serializer';

const putPostFn = async (formData: PostFormData) => {
  const res = await fetch(`/posts`, {
    method: 'PUT',
    body: JSON.stringify(formData),
  });
  return await serializePostResponse(res);
};

export const UsePutPost = (
  options?: UseMutationOptions<Post, unknown, PostFormData>
) => {
  return useMutation(putPostFn, options);
};

export default UsePutPost;
