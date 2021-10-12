import { useMutation, UseMutationOptions, useQueryClient } from 'react-query';

import { fetch } from 'src/hook/api';

import { User, ProfileSubmitData } from 'src/typings';
import { serializeUser } from './user.serializer';

const putPostFn = async (formData: ProfileSubmitData) => {
  const { id, ...rest } = formData;
  const res = await fetch(`/user/${id}`, {
    method: 'PUT',
    body: JSON.stringify(rest),
  });
  return await serializeUser(res);
};

export const UsePutPost = (
  options: UseMutationOptions<User, unknown, ProfileSubmitData>
) => {
  const { onSuccess, ...rest } = options;
  const queryClient = useQueryClient();

  return useMutation(putPostFn, {
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries('profile');

      typeof onSuccess === 'function' && onSuccess(data, variables, context);
    },
    ...rest,
  });
};

export default UsePutPost;
