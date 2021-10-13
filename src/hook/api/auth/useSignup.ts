import { useMutation, UseMutationOptions } from 'react-query';

import { fetch } from 'src/hook/api';
import { SignupFormData } from 'src/typings';

const signupFn = async (formData: SignupFormData) => {
  const res = await fetch(`/auth/signup`, {
    method: 'POST',
    body: JSON.stringify(formData),
  });
  return res;
  // TODO: if !res.ok, throw error
};

export const useSignup = (
  options?: UseMutationOptions<Response, unknown, SignupFormData>
) => {
  return useMutation(signupFn, options);
};

export default useSignup;
