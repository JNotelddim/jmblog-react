import { useMutation, UseMutationOptions, useQueryClient } from 'react-query';

import { fetch } from 'src/hook/api';

import { PasswordChangeData } from 'src/typings';

const postPasswordChange = async (formData: PasswordChangeData) => {
  const res = await fetch(`/user/password`, {
    method: 'POST',
    body: JSON.stringify(formData),
  });
  return res.ok;
};

export const UseChangePassword = (
  options: UseMutationOptions<boolean, unknown, PasswordChangeData>
) => {
  const { onSuccess, ...rest } = options;
  const queryClient = useQueryClient();

  return useMutation(postPasswordChange, {
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries('profile');

      typeof onSuccess === 'function' && onSuccess(data, variables, context);
    },
    ...rest,
  });
};

export default UseChangePassword;
