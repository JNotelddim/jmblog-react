import { useMutation, UseMutationOptions } from 'react-query';

import { fetch } from 'src/hook/api';
import { SignupFormData } from 'src/typings';

const signupFn = async (formData: SignupFormData) => {
  const res = await fetch(`/auth/signup`, {
    method: 'POST',
    body: JSON.stringify(formData),
  });

  if (!res.ok) {
    if (res.status === 409) {
      throw new Error('Email address already in use.');
    } else {
      throw new Error('Signup failed. Feel free to try again.');
    }
  }

  return res;
};

export const useSignup = (
  options?: UseMutationOptions<Response, unknown, SignupFormData>
) => {
  return useMutation(signupFn, options);
};

export default useSignup;
