import { useMutation, UseMutationOptions } from 'react-query';

import { fetch } from 'src/hook/api';

import { PostFormData, SuccessIndication } from 'src/typings';

const deletePostFn = async (formData: PostFormData) => {
  const { id } = formData;
  const res = await fetch(`/posts/${id}`, {
    method: 'DELETE',
  });
  const body: SuccessIndication = await res.json();
  return body;
};

export const UseDeletePost = (
  options?: UseMutationOptions<SuccessIndication, unknown, PostFormData>
) => {
  return useMutation(deletePostFn, options);
};

export default UseDeletePost;
